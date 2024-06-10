import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperCore } from "swiper"

import 'swiper/swiper-bundle.css'

import { SwiperButtonPrev, SwiperButtonNext } from '../hooks/useSwiper';

import img_1 from '../assets/img/c1.jpg'
import img_2 from '../assets/img/c2.jpg'
import img_3 from '../assets/img/c3.jpg'
import img_4 from '../assets/img/c4.jpg'
import img_5 from '../assets/img/c12.jpg'
import img_6 from '../assets/img/c5.jpg'
import img_7 from '../assets/img/c6.jpg'
import img_8 from '../assets/img/c7.jpg'
import img_9 from '../assets/img/c13.jpg'
import img_10 from '../assets/img/c8.jpg'
import img_11 from '../assets/img/c9.jpg'
import img_12 from '../assets/img/c10.jpg'
import img_13 from '../assets/img/KKK_0061.jpg'
import img_14 from '../assets/img/KKK_0176.jpg'
import img_15 from '../assets/img/KKK_0242.jpg'
import img_16 from '../assets/img/KKK_0371.jpg'
import img_17 from '../assets/img/KKK_0416.jpg'
import img_18 from '../assets/img/KKK_0539.jpg'
import img_19 from '../assets/img/KKK_0573.jpg'
import img_20 from '../assets/img/c11.jpg'

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null)

  const imgs = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_10,
    img_11,
    img_12,
    img_13,
    img_14,
    img_15,
    img_16,
    img_17,
    img_18,
    img_19,
    img_20
  ]

  const imageRender = imgs.map((item, index) => {
    return (
      <SwiperSlide key={`swiper-${index}`}>
        <img src={item} />
      </SwiperSlide>
    )
  })

  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        loop
      >
        <SwiperButtonPrev/>
        { imageRender }
        <SwiperButtonNext />
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        modules={[FreeMode, Navigation, Thumbs]}
        watchSlidesProgress
      >
        { imageRender }
      </Swiper>
    </>
  )
}

export default Carousel