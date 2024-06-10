import solo1 from '../assets/img/solo1.png'
import solo2 from '../assets/img/solo2.png'

const Portrait = () => {
  return (
    <>
      <section
        id="editor-section-portrait"
        className="w-full flex flex-1 justify-center items-center base-section relative bgbase px-16 select-none large MapoFlowerIsland style4 !pb-16"
        style={{ paddingBottom: "4rem", transform: "scale(1)", zIndex: 6 }}
      >
        <div data-aos="section-portrait-area-1 fade-up" className="flex items-center aos-init aos-animate">
          <div className="flex-1 h-[21.8rem] rounded-xl overflow-hidden">
            <img src={solo1} draggable="false" className="w-full h-full object-cover select-none pointer-events-none call-out" />
          </div>
          <div className="mx-4 text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
          <div className="flex-1 h-[21.8rem] rounded-xl overflow-hidden">
            <img src={solo2} draggable="false" className="w-full h-full object-cover select-none pointer-events-none call-out" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Portrait