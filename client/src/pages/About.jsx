import React from "react";
import img from "../assets/img1.jpg";
import frame1 from "../assets/Frame 4.svg";
import frame2 from "../assets/Frame 5.svg";
import video from "../assets/tankvideo.mp4";

const About = () => {
  return (
    <div className="min-h-[200vh] pt-[10vh] md:pt-[12vh] about_color ">
      <div className="about_head_color mt-5 mx-[10vh] pt-10 pb-[20vh] px-[15vh] rounded-lg md:px-[10vh] md:pb-[10vh] sm:px-4 sm:mx-[5vh] sm:pb-[5vh]">
        <h1 className="text-center font-semibold text-5xl lg:text-4xl text-orange-300 underline mb-[15vh] md:mb-[5vh]">
          About Us
        </h1>
        <div className="flex md:flex-col-reverse justify-between items-center w-full">
          <p className="text-[#fff] inline-block align-top mb-4 md:mb-0 font-semibold text-lg md:w-[100%] md:mt-10 w-1/2">
            Welcome to Water Tank Doctor, where we proudly present India's First
            - an extraordinary outdoor water tank jacket crafted with advanced
            American technology and top-quality European materials. Inspired by
            ancient wisdom from Feng Shui and Vastu Shastra, our innovative
            design aims to create a harmonious environment for you.
          </p>

          <img src={img} className="w-[70vh] rounded-lg h-[40vh] sm:h-[20vh]" />
        </div>
      </div>
      <hr class="h-[5px] mt-4 bg-gray-200 border-0 border-dotted dark:bg-gray-700 hidden md:block mx-6 "></hr>
      <div className="flex items-center justify-center flex-col md:mx-[10%] mx-[20%] ">
        <div className="flex items-start justify-center mt-[20vh] gap-10 md:mt-[5vh] ">
          <div className="bg-[#ffffff26] flex items-center justify-center rounded-[50%]">
            <img
              src={frame1}
              className="w-[80vh] h-auto mr-5 md:w-[500px] sm:ml-3"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h className="font-semibold text-4xl lg:text-3xl text-transparent bg-gradient-to-r from-red-400 to-violet-800 bg-clip-text  ">
              Vission
            </h>
            <p className=" text-[#fff] text-lg font-semibold md:w-full">
              At Water Tank Doctor, our goal is to make your water tank last
              longer and keep the water fresh. We protect your underground water
              from harmful UV rays, insects, and other things that can spoil it.
              Our solutions are designed to preserve the natural properties of
              your water while ensuring its cleanliness.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center mt-[20vh] gap-10 md:mt-[10vh] ">
          <div className="bg-[#ffffff26] flex items-center justify-center rounded-[50%]">
            <img
              src={frame2}
              className="w-[80vh] h-auto mr-4 md:w-[500px] md:ml-3"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h className="font-semibold text-4xl lg:text-3xl text-transparent bg-gradient-to-r from-[#C9FF84] to-violet-800 bg-clip-text">
              Mission
            </h>
            <p className="text-[#fff] text-lg font-semibold md:w-full">
              Our mission is to redefine your water tank experience with
              innovation, durability, and care. Choose Water Tank Doctor and
              discover the transformative difference it brings to your water
              storage. Embrace the peace of mind that comes with safeguarding
              your valuable resource. Together, let's make a positive change
              with Water Tank Doctor!
            </p>
          </div>
        </div>
      </div>
      <div className="mx-0 mt-[15vh]">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="h-[70vh] w-full object-cover"
        >
          <source type="video/mp4" src={video} />
        </video>
      </div>
    </div>
  );
};

export default About;
