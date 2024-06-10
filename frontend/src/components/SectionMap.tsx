import { toast } from 'react-toastify'
import { CopyToClipboard } from "react-copy-to-clipboard";
import Map from "./Map"

const SectionMap = () => {
  const wedding = '대전 유성구 지족북로 68 4층 플로르'

  const kakaoMapStart = () => {
    const APIKEY = import.meta.env.VITE_APP_KAKAO_MAP_KEY

    const script = document.createElement("script")
    script.async = true
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js'
    document.head.appendChild(script)

    script.addEventListener("load", () => {
      window.Kakao.init(APIKEY);

      window.Kakao.Navi.start({
        name: wedding,
        x: 127.3064746,
        y: 36.3892362,
        coordType: 'wgs84',
      });
    })
  }

  return (
    <>
      <section
        id="editor-section-map" 
        className="w-full flex flex-1 justify-center items-center base-section relative bgpoint1 w-full flex flex-col justify-center items-center select-none large MapoFlowerIsland style4 !pb-12"
        style={{ paddingTop: "4rem", paddingBottom: "4rem", transform: "scale(1)", zIndex: 12 }}
        data-aos="fade-up"
      >
        <h2 className="section-label whitespace-pre-wrap aos-init aos-animate text-black pb-4 font-semibold">
          <div className="title">찾아오시는 길</div>
        </h2>
        <div
          className="id6-section6 text-center break-all mb-4 leading-8 border-t border-dashed w-full pt-4 pb-4"
          style={{ letterSpacing: "0em", color: "#000000", whiteSpace: "break-spaces" }}
        >
          대전 유성구 지족북로 68 4층 플로르
        </div>
        <CopyToClipboard
          text={'대전 유성구 지족북로 68 4층 플로르'}
          onCopy={() => toast.success('주소가 복사되었습니다.')}
        >
          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          >
            주소복사
          </button>
        </CopyToClipboard>

        <div className="relative text-center w-full h-96 mt-8">
          <Map></Map>
        </div>

        <div className="mt-12 mx-8 mx-auto">
          <p className="text-center text-slate-600 mb-1">아래 버튼을 누르면 길 안내를 시작합니다.<br/>(모바일만 지원)</p>
          <div data-aos="fade-up" className="flex justify-between w-full aos-init aos-animate">
            <div className="flex flex-col w-full px-6">
              <div className="flex justify-between w-full h-14">
                <div className="style-button2 text-base flex flex-1 items-center justify-evenly rounded-xl border tracking-tighter whitespace-nowrap cursor-pointer text-black">
                  <a
                    href={`nmap://search?query=${encodeURIComponent(wedding)}&appname=https://rotojuna.wedding`}
                    className="ml-6 flex items-center justify-center w-1/3 text-black"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="https://cdn2.makedear.com/homepage/img/icon/navermap1.webp" width="20px" height="20px" draggable="false" className="naviicon mr-2" />
                    네이버지도
                  </a>
                  <div className="style-border mx-6 h-[1.4rem] w-[1px] border-r border-r-[#eee]"></div>
                  <a
                    className="flex items-center justify-center w-1/3 text-black"
                    style={{ textDecoration: 'none' }}
                    onClick={kakaoMapStart}
                  >
                    <img src="https://cdn2.makedear.com/homepage/img/icon/kakaonavi1.png" width="20px" height="20px" draggable="false" className="naviicon mr-2" />
                    카카오내비
                  </a>
                  <div className="style-border mx-6 h-[1.4rem] w-[1px] border-r border-r-[#eee]"></div>
                  <a
                    href={`tmap://search?name=${wedding}`}
                    className="mr-6 flex items-center justify-center w-1/3 text-black"
                    style={{ textDecoration: 'none' }}
                  >
                    <img src="https://cdn2.makedear.com/homepage/img/icon/tmap1.png" width="20px" height="20px" draggable="false" className="naviicon-tmap mr-2" />
                    티맵
                  </a>
                </div>
                <div data-aos="fade-up" className="ddaysize flex flex-col items-center justify-center text-center break-all whitespace-pre-wrap aos-init aos-animate">
              </div>
              </div>
            </div>
          </div>  
        </div>  
      </section>
    </>
  ) 
}
export default SectionMap