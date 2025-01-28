// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { GaleryCard } from './galeryCard.jsx'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './galery.css'
// import required modules
import { Navigation } from 'swiper/modules'

export function Galery({ galery }) {
  return (
    <section id="galery">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper galery"
        id="swiper-galery"
      >
        {galery.images?.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <GaleryCard img={img} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
