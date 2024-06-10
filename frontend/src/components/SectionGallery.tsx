import Carousel from './Carousel'

const Gallery = () => {
  return (
    <>
      <section 
        id="editor-section-gallery"
        className="max-w-screen-sm base-section relative bgbase select-none large MapoFlowerIsland style4" 
        style={{ transform: "scale(1)", zIndex: 9 }}
      >
        <div className="relative">
          <div data-aos="fade-up" className="aos-init aos-animate">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery