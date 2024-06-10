import bus from '../assets/bus.png';
import train from '../assets/train.png';
import car from '../assets/car.png';
import parking from '../assets/parking2.png';

const Way = () => {
  return (
    <>
      <section
        id="editor-section-way-to-come"
        className="base-section relative bgpoint1 select-none large MapoFlowerIsland style4 !pt-0 text-black mx-auto mx-8"
        section-id="editor-section-way-to-come"
        style={{ paddingTop: "4rem", transform: "scale(1)", zIndex: 13 }}
      >
        <div className="section-wtc-area-1 flex flex-col w-full px-6">
          <div data-aos="fade-up" className="py-6 first-of-type:pt-0 last-of-type:pb-0 section-wtc-area-item-0 aos-init aos-animate">
            <h2 className="section-wtc-area-2 pb-4 !font-semibold tracking-tight whitespace-pre-wrap">
              <div data-aos="fade-up" className="flex items-center justify-start aos-init aos-animate">
                <img src={bus} width={28} height={28} style={{ marginRight: '5px' }} />
                <div className="font-semibold text-xl break-all">버스</div>
              </div>
            </h2>
            <div data-aos="fade-up" className="section-wtc-area-3 bgpoint1-line pt-4 px-2 border-t border-dashed tracking-tighter break-all whitespace-pre-wrap text-left aos-init aos-animate">
              <p><span style={{ fontFamily: "KBIZHanmaumMyungjoBold" }}>군수사령부 정류장 하차</span> 도보 6분</p>
              <p><span style={{ color: "rgb(214, 50, 50)" }}>●</span> 급행: 1002</p>
              <p><span style={{ color: "rgb(56, 109, 232)" }}>●</span> 일반: 114</p>
              <p><span style={{ fontFamily: "KBIZHanmaumMyungjoBold" }}>반석2통 정류장 하차 </span>도보 4분</p>
              <p><span style={{ color: "rgb(214, 50, 50)" }}>●</span> 급행: 1002</p>
              <p><span style={{ color: "rgb(56, 109, 232)" }}>●</span> 일반: 114</p>
            </div>
          </div>
          <div data-aos="fade-up" className="py-6 first-of-type:pt-0 last-of-type:pb-0 section-wtc-area-item-1 aos-init aos-animate">
            <h2 className="section-wtc-area-2 pb-4 !font-semibold tracking-tight whitespace-pre-wrap">
              <div data-aos="fade-up" className="flex items-center justify-start aos-init aos-animate">
                <img src={train} width={28} height={28} style={{ marginRight: '5px' }} />
                <div className="font-semibold text-xl break-all">지하철</div>
              </div>
            </h2>
            <div data-aos="fade-up" className="section-wtc-area-3 bgpoint1-line pt-4 px-2 border-t border-dashed tracking-tighter break-all whitespace-pre-wrap text-left aos-init aos-animate">
              <p><span style={{ color: "rgb(247, 118, 54)" }}>●</span><span style={{ fontFamily: "KBIZHanmaumMyungjoBold" }}>반석역 1호선</span> 2번 출구 도보 15분</p>
            </div>
          </div>
          <div data-aos="fade-up" className="py-6 first-of-type:pt-0 last-of-type:pb-0 section-wtc-area-item-2 aos-init aos-animate">
            <h2 className="section-wtc-area-2 pb-4 !font-semibold tracking-tight whitespace-pre-wrap">
              <div data-aos="fade-up" className="flex items-center justify-start aos-init aos-animate">
                <img src={car} width={28} height={28} style={{ marginRight: '5px' }} />
                <div className="font-semibold text-xl break-all">자가용</div>
              </div>
            </h2>
            <div data-aos="fade-up" className="section-wtc-area-3 bgpoint1-line pt-4 px-2 border-t border-dashed tracking-tighter break-all whitespace-pre-wrap text-left aos-init aos-animate">
              <p><span style={{ fontFamily: "KBIZHanmaumMyungjoBold" }}>· 내비게이션</span> : "플로르" 검색</p>
              <p><span style={{ fontFamily: "KBIZHanmaumMyungjoBold" }}>· 주소 검색 </span>: <span style={{ color: "rgb(0, 0, 0)" }}>"대전 유성구 지족북로 68" 검색</span></p>
            </div>
          </div>
          <div data-aos="fade-up" className="py-6 first-of-type:pt-0 last-of-type:pb-0 section-wtc-area-item-3 aos-init aos-animate">
            <h2 className="section-wtc-area-2 pb-4 !font-semibold tracking-tight whitespace-pre-wrap">
              <div data-aos="fade-up" className="flex items-center justify-start aos-init aos-animate">
                <img src={parking} width={28} height={28} style={{ marginRight: '5px' }} />
                <div className="font-semibold text-xl break-all">주차</div>
              </div>
            </h2>
            <div data-aos="fade-up" className="section-wtc-area-3 bgpoint1-line pt-4 px-2 border-t border-dashed tracking-tighter break-all whitespace-pre-wrap text-left aos-init aos-animate">
              <p>
                <span style={{ fontFamily: "KBIZHanmaumMyungjoBold" }}>· </span>자가용 이용 시 <span><mark data-color="#fff8b2" style={{ fontFamily: "KBIZHanmaumMyungjoBold", backgroundColor: "#fff8b2" }}>그린존 하이파킹 지족점, 무료주차 2시간</mark></span>
              </p>
              <p><span style={{ fontFamily: "KBIZHanmaumMyungjoBold" }}>·</span>카운터에서 주차 등록 후 출차</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Way