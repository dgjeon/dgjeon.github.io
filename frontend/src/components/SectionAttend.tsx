import { useState, forwardRef, useImperativeHandle } from "react"
import axios from 'axios'
import { toast } from 'react-toastify'

import Modal from "./Modal"
import useModal from "../hooks/useModal"

import Attend from './Attend'

const SectionAttend = forwardRef((props, ref) => {
  interface form {
    type: string,
    attend: string,
    name: string,
    person: string,
    eat: string
  }

  interface Token {
    access_token: string,
    refresh_token: string
  }

  const { isOpen, toggle } = useModal()
  
  const [info, setInfo] = useState<form | {}>({
    type: 'groom',
    attend: 'ok',
    name: '',
    person: '성인: 1',
    eat: 'yes'
  })

  const [restAPIKey] = useState(import.meta.env.VITE_APP_KAKAO_REST_API_KEY)
  const [token, setToken] = useState(import.meta.env.VITE_APP_KAKAO_ACCESS_TOKEN)
  const [refreshToken] = useState(import.meta.env.PSjfHLr_NPJ97Gav3ZqjRELOQaPSLAf0AAAAAgo9c5sAAAGP_73QarfuZLkpz6yP)

  const updateAttendInfo = (obj: object) => {
    console.log(obj)
    setInfo(obj);
  }

  const setAcessToken = async () => {
    const data = {
      grant_type: 'refresh_token',
      client_id: restAPIKey,
      refresh_token: refreshToken
    }

    const res = await axios.post<Token>('https://kauth.kakao.com/oauth/token', data, {
      headers: { 'content-type': "application/x-www-form-urlencoded" }
    })

    setToken(res.data.access_token)
  }

  const alertKakao = async (json: object) => {
    await axios.post('https://kapi.kakao.com/v2/api/talk/memo/default/send',
      `template_object=${JSON.stringify(json)}`,
     {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      toast.success('참석 의사를 전달했습니다');
      toggle();
    }).catch(async e => {
      await setAcessToken();
      alertKakao(json);
    })
  }

  const submit = async () => {
    const isEmpty = Object.values(info).filter(val => val === '')

    if (isEmpty.length) {
      toast.error('필수 값이 비어있습니다.');
      return;
    }

    const res = await axios.post('/api/attend', info);

    const text = Object.keys(info).reduce((prev, cur, index) => {
      const val = Object.values(info)[index]
      const key = {
        type: '분류',
        attend: '참석여부',
        name: '이름',
        eat: '식사여부',
        person: '참석자 수'
      }[cur];
      const value: { [key: string ]: string} = {
        groom: '신랑 측',
        bride: '신부 측',
        ok: '참석',
        no: '참석 불가',
        yes: '식사함',
      }
      let v = `${key}: ${value[val] || val}  `;

      if (cur === 'eat' && val === 'no') {
        v = `${key}: 식사 안 함  `;
      }

      prev += v;

      return prev;
    }, '');

    const json = {
      object_type: 'text',
      text,
      link: {
        web_url: 'https://jseoun.pe.kr:3000/M9zJKICi16'
      },
      button_title: ''
    };
    
    if (res.status !== 200) {
      toast.error('참석 의사 전달에 실패했습니다.');
      return;
    }

    alertKakao(json);
  }

  useImperativeHandle(ref, () => ({
    openAttendForm: toggle
  }))

  return (
    <>
      <section
        id="editor-section-attendance"
        className="base-section relative w-full bgpoint1 flex flex-col justify-center items-center select-none large MapoFlowerIsland style4 !pb-8"
        style={{ paddingTop: "4rem", paddingBottom: "4rem", transform: "scale(1)", zIndex: 14 }}
      >
        <h2 data-aos="fade-up" className="section-label whitespace-pre-wrap aos-init aos-animate text-black pb-4">
          <div className="title">참석정보</div>
        </h2>
        <div data-aos="fade-up" className="section-wtc-area-3 bgpoint1-line w-full pt-4 pb-4 border-t border-dashed tracking-tighter break-all whitespace-pre-wrap text-left aos-init aos-animate text-black text-center">
          <p>참석의 부담은 가지지 말아주시고</p>
          <p>식사가 코스 요리로 준비되어</p>
          <p>인원 수 파악을 위해 여쭙는 것이니</p>
          <p>참석 정보를 알려주시면 감사하겠습니다.</p>
        </div>
        <button
          type="button"
          className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          onClick={toggle}
        >
          참석의사 전달하기
        </button>
      </section>

      <Modal
        isOpen={isOpen}
        toggle={toggle}
        children={
          <>
            <Attend updateAttendInfo={updateAttendInfo}></Attend>
              
            <div className="flex text-black justify-around">
              <button
                type="button"
                className="text-lg text-gray-900 bg-slate-200 text-sm w-[50%] rounded-none"
                onClick={toggle}
              >
                닫기
              </button>
              <button
                type="button"
                className="text-lg text-gray-900 bg-black text-white text-sm w-[50%] rounded-none"
                onClick={submit}
              >
                참석정보 전달하기
              </button>
            </div>
          </>
        }
      ></Modal>
    </>
  )
})

export default SectionAttend