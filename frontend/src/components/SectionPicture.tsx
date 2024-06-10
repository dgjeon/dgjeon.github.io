import img from '../assets/img/intro.jpg'

const Picture = () => {
  return (
    <>
      <section
        id="editor-section-picture"
        className="base-section relative bgpoint1 !py-0 !z-[60] select-none large MapoFlowerIsland style4 h-96 w-full flex flex-col justify-center items-center"
        style={{ paddingTop: "4rem", paddingBottom: "4rem", transform: "scale(1)", zIndex: 2 }}
        data-aos="fade-up"
      >
        <div className="section-picture-area-1 h-full">
          <img
            src={img}
            draggable="false"
            className="h-full call-out select-none pointer-events-none"
          />
        </div>
      </section>
    </>
  )
}

export default Picture