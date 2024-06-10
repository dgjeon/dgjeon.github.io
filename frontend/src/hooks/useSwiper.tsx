import { useSwiper } from "swiper/react";
import prev from '../assets/arrow/arrow-left.png'
import next from '../assets/arrow/arrow-right.png'

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button className="swiper-button-next" onClick={() => swiper.slideNext()}>
      <img src={next} width={30} height={30} style={{ maxWidth: "unset" }} />   
    </button>
  )
}

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button className="swiper-button-prev" onClick={() => swiper.slidePrev()}>
      <img src={prev} width={30} height={30} style={{ maxWidth: "unset" }} />   
    </button>
  )
}

export {
  SwiperButtonNext,
  SwiperButtonPrev
}