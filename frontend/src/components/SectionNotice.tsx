import Modal from "./Modal"
import { useState } from "react";

interface NoticeType {
  openAttendForm: () => void;
}

const SectionNotice = (props: NoticeType) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const move = () => {
    toggle();
    props.openAttendForm();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        children={
          <>
          <div className="px-4 py-8 w-full text-black leading-8">
            <div className="pb-8 flex flex-col w-full text-center title">참석 정보</div>
            <div className="text-center tracking-tighter break-all">
              <p>참석의 부담은 가지지 말아주시고</p>
              <p>식사가 코스 요리로 준비되어</p>
              <p>인원 수 파악을 위해 여쭙는 것이니</p>
              <p>참석 정보를 알려주시면 감사하겠습니다.</p>
            </div>
            <div className="px-10"><hr className="my-8 w-full border-[#eee] border-dashed" /></div>
            <div className="flex justify-center text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center text-center">
                  <div className="flex items-center font-bold">
                    <div>
                      신랑 전대겸
                    </div>
                    <div className="px-2">
                      &amp;
                    </div>
                    <div>
                      신부 김세희
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>2024년 6월 29일 토요일 오전 11시</p>
                </div>
                <div className="flex items-center">
                  <p>대전 유성구 지족북로 68 4층 플로르</p>
                </div>
              </div>
            </div>
          </div>

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
              onClick={move}
            >
              참석정보 입력하기
            </button>
          </div>
          </>
        }
      ></Modal>
    </>
  )
}

export default SectionNotice;