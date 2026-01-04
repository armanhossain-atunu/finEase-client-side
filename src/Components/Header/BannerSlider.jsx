import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Button from "../Button";

const BannerSlider = () => {
  return (
    <div
      data-aos="fade-right"
      className="relative w-full max-w-7xl mx-auto px-4"
    >

      {/* 🔹 Swiper */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        dir="rtl"
        speed={900}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        pagination={{ clickable: true }}
        className="
          lg:w-full
          h-[220px]
          sm:h-[300px]
          md:h-[420px]
          lg:h-[60vh]
        "
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/B2pZ9cXk/banner-Img.jpg"
            alt="Banner 1"
            className=" lg:w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://www.pngarts.com/files/17/Finance-PNG-Free-Download.png"
            alt="Banner 2"
            className="lg:w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://fetchsky.com/wp-content/uploads/2020/06/payment-gateway.png"
            alt="Banner 3"
            className="lg:w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
