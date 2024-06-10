import img from '../assets/seahee/flower-01.png'

const Flower = () => {
  return (
    <>
      <section
        id="editor-section-flower"
        className="base-section relative bgbase select-none large MapoFlowerIsland style4 text-black text-center"
        section-id="editor-section-flower"
        style={{ paddingTop: "2rem", paddingBottom: "2rem", transform: "scale(1)", zIndex: 18, backgroundColor: "#FAFAFA" }}
      >
        <div className="w-full flex flex-col flex-1 justify-center items-center">
          <img src={img} style={{ width: "35px", height: "32px" }}/>
        </div>

        <div data-aos="fade-up" className="section-flower-area-2 flex justify-center aos-init aos-animate">
          <div className="section-box">
            <h2 className="subtitle !pb-2 whitespace-pre-wrap mt-6">
              <div className="font-semibold">화환은 정중히 사양합니다.</div>
            </h2>
            <div className="whitespace-pre-wrap"><p>축하해 주시는 마음만 감사히 받겠습니다.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Flower