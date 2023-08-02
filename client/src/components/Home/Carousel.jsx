import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../App.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import slide_image_1 from "../../assets/img1.jpg";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="py-10">
      <h1 className="font-semibold text-5xl lg:text-4xl text-orange-300 underline mb-10 text-center">
        Why Us?
      </h1>
      <div className="flex lg:flex-col justify-around mx-[20vh] lg:mx-10">
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
            onSlideChange={handleSlideChange} // Add the onSlideChange event handler
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  src={slide_image_1}
                  alt="slide_image"
                  className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
                />
                <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
                  <h1 className="text-3xl font-semibold text-white sm:text-2xl">
                    Vastu
                  </h1>
                  <p className="text-lg text-slate-200 sm:text-base">
                    Harmonizes your space with Vastu shastra's grace.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src={slide_image_1}
                  alt="slide_image"
                  className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
                />
                <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
                  <h1 className="text-3xl font-semibold text-white sm:text-2xl">
                    Layers
                  </h1>
                  <p className="text-lg text-slate-200 sm:text-base">
                    High-grade imported materials as a shield for water.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src={slide_image_1}
                  alt="slide_image"
                  className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
                />
                <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
                  <h1 className="text-3xl font-semibold text-white sm:text-2xl">
                    Temperature Control
                  </h1>
                  <p className="text-lg text-slate-200 sm:text-base">
                    Prevent from extreme hot water.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src={slide_image_1}
                  alt="slide_image"
                  className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
                />
                <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
                  <h1 className="text-3xl font-semibold text-white sm:text-2xl">
                    Durability
                  </h1>
                  <p className="text-lg text-slate-200 sm:text-base">
                    Increase your tank’s life saving it from outdoor elements.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </div>

        <div className="p-5 flex items-center flex-col justify-center w-[60%] lg:w-[100%]">
          {currentSlide === 0 && (
            <p
              className={`text-2xl font-semibold lg:text-xl text-[#fff] text-center ${
                expanded ? "line-clamp-none" : "line-clamp-4"
              }`}
            >
              The special water tank jacket is based on ancient Feng Shui and
              Vastu Shastra principles, which aim to bring harmony to the
              environment. It's the first of its kind in India and not only
              insulates the water tank but also protects it. By using the grace
              of Vastu Shastra, this jacket creates a balanced and positive
              atmosphere for the surrounding area. Embrace this unique product
              that combines tradition and modernity to improve your space.
            </p>
          )}
          {currentSlide === 1 && (
            <p
              className={`text-2xl font-semibold lg:text-xl text-[#fff] text-center ${
                expanded ? "line-clamp-none" : "line-clamp-4"
              }`}
            >
              Introducing our water tank jacket, carefully crafted with multiple
              layers of premium imported materials, guaranteeing exceptional
              water protection. These high-grade materials create a reliable
              shield, safeguarding your water from extreme hot or cold
              temperatures. Moreover, the jacket offers an impressive 99%
              protection against harmful UV (Ultraviolet) and IR (Infrared)
              rays, ensuring your water stays pure and undamaged.
            </p>
          )}
          {currentSlide === 2 && (
            <p
              className={`text-2xl font-semibold lg:text-xl text-[#fff] text-center ${
                expanded ? "line-clamp-none" : "line-clamp-4"
              }`}
            >
              Our water tank jacket effectively protects your water from outdoor
              conditions without altering its quality. It keeps the water safe
              and pure, maintaining its original properties. Enjoy peace of mind
              knowing that your water remains unaffected by external elements
              while staying fresh and ready for use whenever you need it. This
              means you won't need costly devices like RO systems, heaters, or
              geysers, which helps reduce your electricity bills
            </p>
          )}
          {currentSlide === 3 && (
            <p
              className={`text-2xl font-semibold lg:text-xl text-[#fff] text-center ${
                expanded ? "line-clamp-none" : "line-clamp-4"
              }`}
            >
              By using The Water Tank Doctor's jacket, you can increase the
              durability of your water tank. It provides reliable protection
              against outdoor elements, such as harmful bacteria, fungus,
              mildew, and dust. Additionally, it acts as a barrier to keep
              monkeys, squirrels, and birds away from your tank. This
              easy-to-install jacket fits perfectly on any water tank, old or
              new, preventing the loss or misplacement of tank lids or
              covers.Thus your water tank is safest in our hands
            </p>
          )}
          {/* Add more content for other slides as needed */}

          <button
            className="bg-[#fff] lg:py-1 lg:px-3 rounded-md mt-10 text-black px-8 py-2 text-xl lg:text-lg font-semibold"
            onClick={toggleContent}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
      <hr class="h-[5px] mt-4 mx-10 bg-gray-200 border-0 border-dotted dark:bg-gray-700 "></hr>
    </div>
  );
}

export default App;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../../App.css";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

// import slide_image_1 from "../../assets/img1.jpg";
// import slide_image_2 from "../../assets/img1.jpg";
// import slide_image_3 from "../../assets/img1.jpg";

// function App() {
//   return (
//     <div className="py-10">
//       <h1 className="font-semibold text-5xl lg:text-4xl text-orange-300 underline mb-10 text-center">
//         Why Us?
//       </h1>
//       <div className="flex lg:flex-col items-center justify-around mx-[20vh] lg:mx-10">
//         <div className="w-[50%] mx-auto lg:w-[100%] mb-5">
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={1.8}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//             }}
//             pagination={{ el: ".swiper-pagination", clickable: true }}
//             navigation={{
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//               clickable: true,
//             }}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className=""
//           >
//             <SwiperSlide>
//               <div className="relative">
//                 <img
//                   src={slide_image_1}
//                   alt="slide_image"
//                   className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
//                 />
//                 <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
//                   <h1 className="text-3xl font-semibold text-white sm:text-2xl">
//                     Vastu
//                   </h1>
//                   <p className="text-lg text-slate-200 sm:text-base">
//                     Harmonizes your space with Vastu shastra's grace.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="relative">
//                 <img
//                   src={slide_image_1}
//                   alt="slide_image"
//                   className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
//                 />
//                 <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
//                   <h1 className="text-3xl font-semibold text-white sm:text-2xl">
//                     Layers
//                   </h1>
//                   <p className="text-lg text-slate-200 sm:text-base">
//                     high-grade imported materials as a shield for water
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="relative">
//                 <img
//                   src={slide_image_1}
//                   alt="slide_image"
//                   className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
//                 />
//                 <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
//                   <h1 className="text-3xl font-semibold text-white sm:text-2xl">
//                     Temperature control
//                   </h1>
//                   <p className="text-lg text-slate-200 sm:text-base">
//                     Prevent from extreme hot water
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="relative">
//                 <img
//                   src={slide_image_1}
//                   alt="slide_image"
//                   className="w-[90vh] h-[65vh] lg:h-[30vh] rounded-lg"
//                 />
//                 <div className="absolute  top-[50%] transform translate(-50%, -50%) text-center">
//                   <h1 className="text-3xl font-semibold text-white sm:text-2xl">
//                     Durability
//                   </h1>
//                   <p className="text-lg text-slate-200 sm:text-base">
//                     Increase your tank’s life saving it from outdoor elements
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <div className="slider-controler">
//               <div className="swiper-button-prev slider-arrow">
//                 <ion-icon name="arrow-back-outline"></ion-icon>
//               </div>
//               <div className="swiper-button-next slider-arrow">
//                 <ion-icon name="arrow-forward-outline"></ion-icon>
//               </div>
//               <div className="swiper-pagination"></div>
//             </div>
//           </Swiper>
//         </div>

//         <div className="p-5 flex items-center flex-col justify-center w-[60%] lg:w-[100%]">
//           <p className="text-2xl font-semibold lg:text-xl text-[#fff] text-center">
//             We would love to hear about what is right but also about what we can
//             improve for better services.
//           </p>
//           <button className="bg-[#fff] lg:py-1 lg:px-3 rounded-md mt-10 text-black px-8 py-2 text-xl lg:text-lg font-semibold">
//             explore
//           </button>
//         </div>
//       </div>
//       <hr class="h-[5px] mt-4 mx-10 bg-gray-200 border-0 border-dotted dark:bg-gray-700 "></hr>
//     </div>
//   );
// }

// export default App;
