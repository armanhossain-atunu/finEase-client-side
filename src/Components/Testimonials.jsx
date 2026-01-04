import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rahim Ahmed",
    role: "Small Business Owner",
    image: "https://i.ibb.co.com/r267DxK6/christina-wocintechchat-com-SJv-Dxw0azqw-unsplash.jpg",
    rating: 5,
    comment:
      "Amazing service! The website was fast, clean, and exactly what I wanted.",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 4,
    comment:
      "Very professional work. Communication was smooth and delivery was on time.",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    comment:
      "Highly recommended! Great UI and excellent performance optimization.",
  },
  {
    id: 4,
    name: "Sabbir Hossain",
    role: "Freelancer",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 4,
    comment:
      "Loved the design quality and fast support. Will work again!",
  },
];

const TestimonialsSwiper = () => {
  return (
    <section className="py-16 bg-base-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition h-56 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < item.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 flex-grow">
                  “{item.comment}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSwiper;
