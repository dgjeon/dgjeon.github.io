import { useState } from "react"
import { toast } from 'react-toastify'
import { CopyToClipboard } from "react-copy-to-clipboard";

import arrow from '../assets/arrow/arrow.png'

const items = [
  {
    index: 0,
    title: '신랑 측',
    type: '신랑',
    name: '전대겸',
    account: '하나 679-910258-97307',
    kakaopay: 'https://link.kakaopay.com/_/1iG1mUp',
    isKakaopay: true,
    isOpen: false,
  },
  {
    index: 1,
    title: '신부 측',
    type: '신부',
    name: '김세희',
    account: '국민 770001-01-264013',
    kakaopay: '',
    isKakaopay: false,
    isOpen: false,
  },
]

const Accordion = () => {
  const [list, setList] = useState(items)

  const eventHandler = (index: number) => {
    const tmpItems = list.map(item => {
      if (item.index === index) {
        return {
          ...item,
          isOpen: !item.isOpen
        }
      } 

      return item;
    })

    setList(tmpItems)
  }

  return (
    <>
      <div className="px-12 flex flex-col w-full text-black">
        {
          list.map((item, index) => {
            let kakaopayBtn;

            if (item.isKakaopay) {
              kakaopayBtn = <a
                draggable="false"
                href={item.kakaopay}
                target="_blank"
                className="copy-btn kakao-copy-btn flex items-center !bg-[#ffdf00] !border-[#ffdf00] rounded-sm"
              >
                <img src="https://cdn2.makedear.com/homepage/img/kpay_a.webp" draggable="false" className="kakao-copy-img mt-1 mx-auto" />
              </a>
            }

            return (
              <div className="accountbg1 my-2 border section-account-area-group-0" key={index}>
                <div className="py-1 relative flex items-center justify-center text-center cursor-pointer">
                  <div className="relative w-full">
                    <h2
                      className="flex flex-col items-center justify-center tracking-tighter select-none whitespace-pre-wrap"
                      onClick={() => eventHandler(item.index)}
                    >{item.title}</h2>
                    <button
                      className="absolute top-1/2 right-0 -translate-y-1/2 justify-self-end hover:border-white focus:outline-none"
                      onClick={() => eventHandler(item.index)}
                    >
                      <img src={arrow} style={ item.isOpen ? { transform: 'rotate(0)', transitionDuration: '300ms' } : { transform: 'rotate(180deg)', transitionDuration: '300ms' } } />
                      </button>
                  </div>
                </div>
                <div>
                  { item.isOpen && <div className="accountbg2 my-2 border section-account-area-group-0 duration-500 erase-in">
                    <div className="p-6 flex flex-col items-center last-of-type:rounded-b-lg tracking-tighter leading-none transition-all ease-out duration-1000">
                      <div className="flex items-start justify-between w-full">
                        <div className="flex items-center w-[72%] text-left leading-custom whitespace-pre-wrap" style={{ lineHeight: '32px' }}>
                          <span className="mr-2">{item.type}</span>
                          <span className="font-semibold">{item.name}</span>
                        </div>
                        {kakaopayBtn}
                      </div>
                      <div className="mt-2 flex items-start justify-between w-full">
                        <div className="flex items-center w-[72%] text-left leading-custom whitespace-pre-wrap" style={{ lineHeight: '32px' }}>
                          <span className="mr-2">{item.account}</span>
                        </div>
                        <CopyToClipboard
                          text={item.account}
                          onCopy={() => toast.success('계좌번호가 복사되었습니다.')}
                        >
                          <button
                            data-group="0"
                            data-account="0"
                            data-clipboard-text="국민 0123-45-6789101"
                            className="copy-btn kakao-copy-btn relative flex items-center justify-center border rounded-sm bg-gray-100 hover:bg-gray-200"
                            style={{ padding: 0 }}
                          >
                            복사
                          </button>
                        </CopyToClipboard>
                      </div>
                    </div>
                  </div> }
                </div>  
              </div>  
            )
          })
        }
      </div>
    </>
  )
}

export default Accordion