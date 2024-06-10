const Paragraph = () => {
  return (
    <>
      <section
        id="editor-section-paragraph"
        className="base-section relative bgpoint1 select-none large MapoFlowerIsland style4 text-black leading-8"
        style={{ paddingTop: "4rem", paddingBottom: "4rem", transform: "scale(1)", zIndex: 1 }}
        data-aos="fade-up"
      >
        <div className="section-paragraph-area-2 flex flex-col items-center relative overflow-hidden">
          <div data-aos="fade-up" className="section-paragraph-area-3 poet flex flex-col tracking-tighter break-all whitespace-pre-wrap RIDIBatang text-center aos-init aos-animate">
            <p>봄의 그대는 벚꽃이었고</p>
            <p>여름의 그대는 바람이었으며</p>
            <br />
            <p>가을의 그대는 하늘이었고</p>
            <p>겨울의 그대는 하얀 눈이었다</p>
            <br />
            <p>그대는 언제나 행복, 그 자체였다.</p>
            <br />
            <p>강현욱 &lt;사계&gt; 중에서</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Paragraph