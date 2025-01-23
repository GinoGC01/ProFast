// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimoniesCard } from "./testimoniesCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./sliderTestimonies.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export function SliderTestimonies({ testimones }) {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper-testimonies"
      >
        {testimones?.map((testimonie) => (
          <SwiperSlide key={testimonie.client}>
            <TestimoniesCard testimonie={testimonie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
