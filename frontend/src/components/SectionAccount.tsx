import Accordion from './Accordion'

const Account = () => {
  return (
    <>
      <section
        id="editor-section-account"
        className="base-section relative w-full bgpoint1 flex flex-col justify-center items-center select-none large MapoFlowerIsland style4 !pb-8"
        style={{ paddingTop: "4rem", paddingBottom: "4rem", transform: "scale(1)", zIndex: 14 }}
      >
        <h2 data-aos="fade-up" className="section-label whitespace-pre-wrap aos-init aos-animate text-black pb-4 font-semibold">
          <div className='title'>마음 전하실 곳</div>
        </h2>
        <div data-aos="fade-up" className="section-wtc-area-3 bgpoint1-line w-full pt-4 pb-4 border-t border-dashed tracking-tighter break-all whitespace-pre-wrap text-left aos-init aos-animate text-black text-center">
          <p>참석이 어려우신 분들을 위해</p>
          <p>계좌번호를 기재하였습니다.</p>
          <p>너그러운 마음으로 양해 부탁 드립니다.</p>
        </div>

        <Accordion />
      </section>
    </>
  )
}

export default Account