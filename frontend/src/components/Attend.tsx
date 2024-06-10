import React, { useState } from "react"
import styled from 'styled-components'

interface AttendType {
  updateAttendInfo: (obj: object) => void;
}

const Attend = (props: AttendType) => {
  const types = [
    { text: '신랑 측', value: 'groom' },
    { text: '신부 측', value: 'bride' },
  ]
  const attends = [
    { text: '참석', value: 'ok' },
    { text: '미참석', value: 'no' },
  ]
  const eats = [
    { text: '식사함', value: 'yes' },
    { text: '식사 안 함', value: 'no' },
  ]

  const [type, setType] = useState('groom')
  const [attend, setAttend] = useState('ok')
  const [eat, setEat] = useState('yes')
  const [name, setName] = useState('')
  const [adult, setAdult] = useState(1)
  const [child, setChild] = useState(0)
  const [baby, setBaby] = useState(0)
  const [person, setPerson] = useState({
    성인: 1,
    어린이: 0,
    유아: 0
  });

  const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
    props.updateAttendInfo({
      type: e.target.value,
      attend,
      eat,
      name,
      person: getPersionString()
    })
  }

  const handleChangeAttend = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttend(e.target.value)
    props.updateAttendInfo({
      type,
      attend: e.target.value,
      eat,
      name,
      person: getPersionString()
    })
  }

  const handleChangeEat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEat(e.target.value)
    props.updateAttendInfo({
      type,
      attend,
      eat: e.target.value,
      name,
      person: getPersionString()
    })
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    props.updateAttendInfo({
      type,
      attend,
      eat,
      name: e.target.value,
      person: getPersionString()
    })
  }

  const handleChangeAdult = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value)

    if (!e.target.value) {
      value = 0
    }

    setAdult(value)
    setPerson({
      ...person,
      '성인': value
    })
    handleChangePerson();
  }

  const handleChangeChild = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value)

    if (!e.target.value) {
      value = 0
    }

    setChild(value)
    setPerson({
      ...person,
      '어린이': value
    })
    handleChangePerson();
  }

  const handleChangeBaby = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value)

    if (!e.target.value) {
      value = 0
    }

    setBaby(value)
    setPerson({
      ...person,
      '유아': value
    })
    handleChangePerson();
  }

  const getPersionString = () => {
    const _person: { [key: string ]: number } = person
    const personStr = Object.keys(_person)
      .map(key => {
        return key + ':' + _person[key]
      })
      .join(', ')

    return personStr
  }

  const handleChangePerson = () => {
    props.updateAttendInfo({
      type,
      attend,
      eat,
      name,
      person: getPersionString()
    })
  }

  const changePersonCount = (type1: string, type2: string) => {
    const _person: { [key: string ]: number } = person

    if (type1 === '+') {
      _person[type2] = _person[type2] + 1
    }

    if (type1 === '-') {
      _person[type2] = _person[type2] - 1
    }

    if (type2 === '성인') {
      setAdult(_person[type2])
      setPerson({
        ...person,
        '성인': _person[type2]
      })
    }

    if (type2 === '어린이') {
      setChild(_person[type2])
      setPerson({
        ...person,
        '어린이': _person[type2]
      })
    }

    if (type2 === '유아') {
      setBaby(_person[type2])
      setPerson({
        ...person,
        '유아': _person[type2]
      })
    }

    handleChangePerson()
  }
  
  return (
    <>
        <form className="w-full mx-auto text-black mt-4 mb-4">
          <div className="flex items-center mb-2">
            <div className="w-1/4">
              <label className="block text-gray-500 font-bold mb-1 text-center leading-[28px]">
                분류<span className="text-red-400">*</span>
              </label>
            </div>
            <div className="w-3/4">
              <RadioWrap>
                {
                  types.map((t, i) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name="type"
                        value={t.value}
                        defaultChecked={t.value === type}
                        onChange={handleChangeType}
                      />
                      <span className='selected'
                        style={{
                          border: t.value === type ? '1px solid pink' : '1px solid lightgray',
                          backgroundColor: t.value === type ? 'pink' : 'lightgray'
                        }}
                      >
                        {t.text}
                      </span>
                    </label>
                  ))
                }
              </RadioWrap>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-1/4">
              <label className="block text-gray-500 font-bold mb-1 text-center leading-[28px]">
                참석<span className="text-red-400">*</span>
              </label>
            </div>
            <div className="w-3/4">
              <RadioWrap>
                {
                  attends.map((t, i) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name="attend"
                        value={t.value}
                        defaultChecked={t.value === attend}
                        onChange={handleChangeAttend}
                      />
                      <span className='selected'
                        style={{
                          border: t.value === attend ? '1px solid pink' : '1px solid lightgray',
                          backgroundColor: t.value === attend ? 'pink' : 'lightgray'
                        }}
                      >
                        {t.text}
                      </span>
                    </label>
                  ))
                }
              </RadioWrap>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-1/4">
              <label className="block text-gray-500 font-bold mb-1 text-center leading-[28px]">
                성함<span className="text-red-400">*</span>
              </label>
            </div>
            <div className="w-3/4">
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-1 pl-1 pr-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[95%] ml-[4%]"
                placeholder="(필수) 참석자 성함을 입력해주세요."
                type="text"
                name="name"
                value={name}
                onInput={handleChangeName}
              />
            </div>
          </div>
          {
            attend === 'ok' &&
            <>
              <div className="flex items-center mb-2">
                <div className="w-1/4">
                  <label className="block text-gray-500 font-bold mb-1 text-center leading-[28px]">
                    동행인원<span className="text-red-400">*</span>
                  </label>
                </div>
                <div className="w-3/4">
                  <div className="flex items-center pl-1 pr-1 py-1">
                    <div className="w-1/2">
                      <label>성인</label>
                      <div className="flex justify-center py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg" data-hs-input-number="">
                        <div className="flex items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => changePersonCount('-', '성인')}
                          >
                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </button>
                          <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" value={adult} data-hs-input-number-input="" onChange={handleChangeAdult} />
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => changePersonCount('+', '성인')}
                          >
                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <label>어린이(8세 이상)</label>
                      <div className="flex justify-center py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg" data-hs-input-number="">
                        <div className="flex items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => changePersonCount('-', '어린이')}
                          >
                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </button>
                          <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" value={child} data-hs-input-number-input="" onChange={handleChangeChild} />
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => changePersonCount('+', '어린이')}
                          >
                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-1 pr-1 py-1">
                    <div className="w-1/2">
                      <label>유아(8세 미만)</label>
                      <div className="flex justify-center py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg" data-hs-input-number="">
                        <div className="flex items-center gap-x-1.5">
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => changePersonCount('-', '유아')}
                          >
                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                            </svg>
                          </button>
                          <input className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" value={baby} data-hs-input-number-input="" onChange={handleChangeBaby} />
                          <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => changePersonCount('+', '유아')}
                          >
                            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-1/4">
                  <label className="block text-gray-500 font-bold mb-1 text-center leading-[28px]">
                    식사<span className="text-red-400">*</span>
                  </label>
                </div>
                <div className="w-3/4">
                  <RadioWrap>
                    {
                      eats.map((t, i) => (
                        <label key={i}>
                          <input
                            type="radio"
                            name="eat"
                            value={t.value}
                            defaultChecked={t.value === attend }
                            onChange={handleChangeEat}
                          />
                          <span className='selected'
                            style={{
                              border: t.value === eat ? '1px solid pink' : '1px solid lightgray',
                              backgroundColor: t.value === eat ? 'pink' : 'lightgray'
                            }}
                          >
                            {t.text}
                          </span>
                        </label>
                      ))
                    }
                  </RadioWrap>
                </div>
              </div>
            </>
          }
        </form>
    </>
  )
}

const RadioWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  label {
    width: 45%;
  }
  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  span {
    display: block;
    width: 100%;
  }
  .selected {
    border: 1px solid red;
    border-radius: 5px;
    font-size: 14px;
    background-color: #FAFAFA;
    margin: 4px;
    text-align: center;
    padding: 4px 16px;
  }
`

export default Attend;