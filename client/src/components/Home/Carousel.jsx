import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../assets/img1.jpg";
import slide_image_2 from "../../assets/img1.jpg";
import slide_image_3 from "../../assets/img1.jpg";

function App() {
  return (
    <div className="py-10">
      <h1 className="font-semibold text-5xl lg:text-4xl text-orange-300 underline mb-10 text-center">
        Why Us?
      </h1>
      <div className="flex lg:flex-col items-center justify-around mx-[20vh] lg:mx-10">
        <div className="w-[50%] mx-auto lg:w-[100%] mb-5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.8}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className=""
          >
            <SwiperSlide>
              <img
                src={slide_image_1}
                alt="slide_image"
                className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide_image_2}
                alt="slide_image"
                className="w-[90vh] h-[65vh] lg:h-[30vh]  rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide_image_3}
                alt="slide_image"
                className="w-[90vh] h-[65vh] lg:h-[30vh]  rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide_image_3}
                alt="slide_image"
                className="w-[90vh] h-[65vh] lg:h-[30vh]  rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide_image_3}
                alt="slide_image"
                className="w-[90vh] h-[65vh] lg:h-[30vh]  rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide_image_3}
                alt="slide_image"
                className="w-[90vh] h-[65vh] lg:h-[30vh]  rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide_image_3}
                alt="slide_image"
                className="w-[90vh] h-[65vh] lg:h-[30vh]  rounded-lg"
              />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

        <div className="p-5 flex items-center flex-col justify-center w-[60%] lg:w-[100%]">
          <p className="text-2xl font-semibold lg:text-xl text-[#fff] text-center">
            We would love to hear about what is right but also about what we can
            improve for better services.
          </p>
          <button className="bg-[#fff] lg:py-1 lg:px-3 rounded-md mt-10 text-black px-8 py-2 text-xl lg:text-lg font-semibold">
            explore
          </button>
        </div>
      </div>
      <hr class="h-[5px] mt-4 mx-10 bg-gray-200 border-0 border-dotted dark:bg-gray-700 "></hr>
    </div>
  );
}

export default App;
