import React from "react";
import img from "../assets/img1.jpg";
import frame1 from "../assets/Frame 4.svg";
import frame2 from "../assets/Frame 5.svg";

const About = () => {
  return (
    <div className="min-h-[200vh] pt-[10vh] md:pt-[12vh] about_color py-10">
      <div className="about_head_color mt-5 mx-[10vh] pt-10 pb-[20vh] px-[15vh] rounded-lg md:px-[10vh] md:pb-[10vh] sm:px-4 sm:mx-[5vh] sm:pb-[5vh]">
        <h1 className="text-center font-semibold text-5xl lg:text-4xl text-orange-300 underline mb-[15vh] md:mb-[5vh]">
          About Us
        </h1>
        <div className="flex md:flex-col-reverse justify-between items-center w-full">
          <p className="text-[#fff] inline-block align-top mb-4 md:mb-0 font-semibold text-lg md:w-[100%] md:mt-10 w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scramled it to make a type specimen book.
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
              className="w-[80vh] h-auto mr-5 md:w-[500px] md:mr-3 "
            />
          </div>
          <div className="flex flex-col gap-5">
            <h className="font-semibold text-4xl lg:text-3xl text-transparent bg-gradient-to-r from-red-400 to-violet-800 bg-clip-text  ">
              Vission
            </h>
            <p className=" text-[#fff] text-lg font-semibold md:w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scramled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center mt-[20vh] gap-10 md:mt-[10vh] ">
          <div className="bg-[#ffffff26] flex items-center justify-center rounded-[50%]">
            <img
              src={frame2}
              className="w-[80vh] h-auto mr-4 md:w-[500px] md:mr-2"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h className="font-semibold text-4xl lg:text-3xl text-transparent bg-gradient-to-r from-[#C9FF84] to-violet-800 bg-clip-text">
              Mission
            </h>
            <p className="text-[#fff] text-lg font-semibold md:w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scramled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
