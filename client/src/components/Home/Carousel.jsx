import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="carousel-slide bg-red-500">
        <h2>Slide 1</h2>
      </div>
      <div className="carousel-slide bg-blue-500">
        <h2>Slide 2</h2>
      </div>
      <div className="carousel-slide bg-green-500">
        <h2>Slide 3</h2>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
