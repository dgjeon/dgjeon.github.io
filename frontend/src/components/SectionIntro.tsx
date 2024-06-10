import img from '../assets/img/_240324_0111.jpg'

const Intro = () => {
  return (
    <>
      <section className="flex flex-1 flex-col" data-aos="fade-up">
        <div className="relative w-full h-full">
          <div className="relative overflow-hidden bg-repeat bg-cover bg-center">
            <div className="absolute bottom-0 w-full" style={{ height: "10rem", background: "linear-gradient(180deg, transparent, #fff)" }}></div>
            <img className="w-full h-full object-cover select-none pointer-events-none call-out" src={img} />
            <div className="absolute w-full h-full z-10 top-0" style={{ maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 90%, rgba(0,0,0,0)); mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 90%, rgba(0,0,0,0))" }}>
              <img draggable="false" className="absolute top-0 left-0 w-full select-none pointer-events-none call-out" style={{ zIndex: "2", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%, rgba(0,0,0,0))" }} src="https://cdn2.makedear.com/homepage/img/effect/new1/3.png" />
            </div>
          </div>
        </div>

        <div
          className="id6-section6 text-center break-all leading-8"
          style={{ letterSpacing: "0em", color: "#000000", whiteSpace: "break-spaces" }}
        >
          <div className="id6-section2 justify-center w-full" style={{ letterSpacing: "0.25em", whiteSpace: "break-spaces" }}>전대겸 & 김세희</div>
          2024년 6월 29일 토요일 오전 11시<br />
          대전 유성구 지족북로 68 4층 <b style={{ fontFamily: "KimjungchulMyungjoBold" }}>플로르</b>
        </div>
      </section>
    </>
  )
}

export default Intro