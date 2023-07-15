import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import insta from "../../assets/instagram.png";
import whats from "../../assets/whatsapp.png";
import mail from "../../assets/gmail.png";
import error from "../../assets/errer.png";
import splash from "../../assets/splash1 1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="selector py-14 min-h-[100vh] md:pt-[20vh]">
      <div className="flex justify-between px-4 items-end md:px-0">
        <div className="flex items-start font-semibold gap-2 ">
          <div class="h-16 border-l-2 border-gray-500 align-center mt-1 md:hidden"></div>
          <div className="flex flex-col h-full md:flex-row md:absolute top-[48vh] md:gap-2 md:justify-center w-full ">
            <p className="text-xl text-[#FF7676] font">Na Garam</p>
            <p className="text-xl text-[#44B0FF] font">Na Thanda</p>
            <p className="text-xl text-[#B0FF4D] font">Sirf Tazaa...</p>
          </div>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-6xl hero_font font-bold text-[#FFF] md:text-center">
            Water Tank
          </h1>
          <h1 className="text-6xl hero_font font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent text-center mt-2 md:mb-[12vh] mb-[5vh]">
            Doctor
          </h1>

          <div className="flex items-center justify-center gap-2 md:mx-2">
            <hr class="w-[10vh] border-t-2  border-yellow-300 "></hr>
            <button className="rounded-full border-2 border-yellow-300 py-1 px-4 text-yellow-300 ">
              <Link to="/product/1">SHOP NOW!</Link>
            </button>
            <button className="rounded-full border-2 border-yellow-300 py-1 px-4 text-yellow-300 hidden md:block hero_font font-bold">
              Explore More
            </button>
            <hr class="w-[10vh]  border-t-2  border-yellow-300"></hr>
          </div>
        </div>
        <div className="bg-[#30303066] h-auto rounded-2xl px-2 py-3 md:absolute right-2 top-[90vh]">
          <ul className="flex flex-col items-center gap-4 justify-center">
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
      <div className="flex gap-[20vh] justify-around px-[20vh] md:px-0">
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
        <div className="ml-[10vh] md:ml-0 z-5">
          <div className="h-[250px] w-[300px] rounded-full bg-[#FFFFFFBA] absolute top-[80%] left-[40%] md:left-[13%] md:top-[82%] md:w-[280px]"></div>
          <div className="flex relative">
            <img src={error} className="w-[70vh] h-auto " />

            <img
              src={splash}
              className="w-[30vh] h-auto absolute left-[80%] md:w-[10vh]"
            />
            <div className="w-[40px] h-[40px] bg-[#E5E5E5C4] rounded-full absolute right-[42%] top-[40%] flex items-center justify-center">
              <BsFillPlayFill className="text-3xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <div className="rounded-[50%] bg-yellow-300 w-[130px] h-[130px] md:w-[110px] md:h-[110px] flex justify-center items-center flex-col">
            <h1 className="text-center font-semibold text-2xl md:text-lg hero_font ">
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
