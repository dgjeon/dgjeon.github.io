const https = require('https')
const express = require('express')
const path = require('path')
const cors = require('cors')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapters = new FileSync('db.json')
const fs = require('node:fs')
const cons = require('consolidate')
const axios = require('axios')

const app = express()
const PORT = 3000
const db = low(adapters)

const options = {
  key: fs.readFileSync(path.join(__dirname, 'cert/privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert/cert.pem')),
  ca: fs.readFileSync(path.join(__dirname, 'cert/chain.pem')),
}

db.defaults({ attend: [] }).write();

app.engine('ejs', cons.ejs)
app.engine('html', cons.htmling)

app.set('view engine', "html")

app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use((err, req, res, next) => {
  if (err.message === 'someError') {
    res.status(400).json({ message: 'not found' });
  }
  res.status(500).json({ message: 'internal server error '});
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

app.post('/api/attend', (req, res) => {
  const {
    type,
    attend,
    name,
    eat,
    person
  } = req.body
  const curr = new Date()
  const utc =  curr.getTime() +  (curr.getTimezoneOffset() * 60 * 1000);

  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + (KR_TIME_DIFF));
  const now = kr_curr.toISOString().substring(0, 10) + ' ' + kr_curr.toString().substring(16, 24)

  try {
    const getName = db.get('attend').find({ name }).value();
  
    if (getName) {
      db.get('attend')
        .find({ name })
        .assign({
          type,
          attend,
          eat,
          person,
          updateDate: now
        })
        .write()
    } else {
      db.get('attend')
        .push({
          ...req.body,
          createDate: now
        })
        .write()
        .name
    }
  
    res.status(200).send({ status: 200, data: req.body });
  } catch (e) {
    res.status(500).send({ status: 500, data: e.message });
  }
})

app.get('/M9zJKICi16', (req, res) => {
  const data = db.get('attend').sortBy('createDate').value()

  const result = data.map(d => {
    const type = { groom: '신랑 측', bride: '신부 측' };
    const attend = { ok: '참석', no: '참석 불가' };
    const eat = { yes: '식사함', no: '식사 안 함' };

    return {
      type: type[d.type],
      name: d.name,
      attend: attend[d.attend],
      eat: eat[d.eat],
      person: d.person
    }
  })

  const groomCount = result.filter(d => d.type === '신랑 측').length || 0;
  const brideCount = result.filter(d => d.type === '신부 측').length || 0;
  const total = result.length || 0;
  
  res.render('list.ejs', {
    list: result,
    total,
    groomCount,
    brideCount
  })
})

app.get('/cb', (req, res) => {
  res.send({ code: req.query.code });
})

https.createServer(options, app, (req, res) => {
  
}).listen(PORT, () => {
  console.log('listening on ', PORT);
})