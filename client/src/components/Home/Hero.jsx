import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import insta from "../../assets/instagram.png";
import whats from "../../assets/whatsapp.png";
import mail from "../../assets/gmail.png";
import error from "../../assets/errer.png";
import splash from "../../assets/splash1 1.png";

const Hero = () => {
  return (
    <div className="selector py-14 min-h-[100vh] md:pt-[20vh]">
      <div className="flex justify-between px-4 items-end md:px-0">
        <div className="flex items-start font-semibold gap-2 ">
          <div class="h-16 border-l-2 border-gray-500 align-center mt-1 md:hidden"></div>
          <div className="flex flex-col h-full md:flex-row md:absolute top-[58vh]  md:gap-2 md:justify-center md:w-full">
            <p className="text-[#FF7676]">Na Garam</p>
            <p className="text-[#44B0FF]">Na Thanda</p>
            <p className="text-[#B0FF4D]">Sirf Tazaa</p>
          </div>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-5xl font-bold text-[#FFF] md:text-center">
            Water Tank
          </h1>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent text-center mt-2 md:mb-[20vh]">
            Doctor
          </h1>

          <div className="flex items-center justify-center mt-8 gap-2">
            <hr class="w-[10vh] border-t-2  border-yellow-300 "></hr>
            <button className="rounded-full border-2 border-yellow-300 py-1 px-4 text-yellow-300 ">
              SHOP NOW!
            </button>
            <button className="rounded-full border-2 border-yellow-300 py-1 px-4 text-yellow-300 hidden md:block">
              Explore More
            </button>
            <hr class="w-[10vh]  border-t-2  border-yellow-300"></hr>
          </div>
        </div>
        <div className="bg-[#30303066] h-auto rounded-2xl px-2 py-2 md:absolute right-2 top-[32vh]">
          <ul className="flex flex-col items-center gap-3 justify-center">
            <li>
              <img src={insta} className="w-6 h-6" />
            </li>
            <li>
              <img src={whats} className="w-6 h-6" />
            </li>
            <li>
              <img src={mail} className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="text-white flex flex-col justify-center md:absolute md:flex-row-reverse top-[12vh] md:w-full md:gap-4 md:bg-[#E0C375] md:h-[10vh] md:items-center">
          <div className="md:flex md:flex-row md:gap-2">
            <p className="font-semibold text-yellow-300 text-xl md:text-black">
              $2999
            </p>
            <p className="font-semibold line-through text-[#ACA5A5] text-lg">
              $4999
            </p>
          </div>
          <p className="font-semibold  text-lg md:text-black">UPTO 50% OFF</p>
        </div>
        <div className="ml-[5vh] md:ml-0">
          <div className="flex relative">
            <img src={error} className="w-[80vh] h-auto " />
            <img src={splash} className="w-[30vh] h-auto absolute left-[80%]" />
            <div className="w-[40px] h-[40px] bg-[#E5E5E5C4] rounded-full absolute right-[42%] top-[40%] flex items-center justify-center">
              <BsFillPlayFill className="text-3xl" />
            </div>
          </div>

          {/* <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="h-[200px] w-[220px] rounded-full bg-[#FFFFFFBA]"></div>
          </div> */}
        </div>

        <div className="flex items-center md:hidden">
          <div className="rounded-[50%] bg-yellow-300 w-[120px] h-[120px] md:w-[110px] md:h-[110px] flex justify-center items-center flex-col">
            <h1 className="text-center font-semibold text-xl md:text-lg">
              Explore More
            </h1>
            <span>
              <AiOutlineArrowRight className="text-lg " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
