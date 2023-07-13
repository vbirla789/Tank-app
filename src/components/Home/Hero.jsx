import React from "react";
import {
  AiFillInstagram,
  AiFillMessage,
  AiOutlineArrowRight,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import insta from "../../assets/instagram.png";
import whats from "../../assets/whatsapp.png";
import mail from "../../assets/gmail.png";
import error from "../../assets/errer2 Background Removed 1 (1).png";

const Hero = () => {
  return (
    <div className="selector py-10 min-h-[100vh]">
      <div className="flex justify-between px-4">
        <div className="flex flex-col items-start font-semibold justify-end ">
          <p className="text-[#FF7676]">Na Garam</p>
          <p className="text-[#44B0FF]">Na Thanda</p>
          <p className="text-[#B0FF4D]">Sirf Tazaa</p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-[#FFF]">Water Tank</h1>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent text-center mt-2">
            Doctor
          </h1>
          <div className="flex items-center justify-center">
            <button className="rounded-full border-2 border-yellow-300 py-1 px-4 text-yellow-300 mt-8 ">
              SHOP NOW!
            </button>
          </div>
        </div>
        <div className="bg-[#30303066] h-[21vh] rounded-2xl px-2 py-2 ">
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
        <div className="text-white">
          <p className="font-semibold text-yellow-300 text-lg">$2999</p>
          <p className="font-semibold line-through  text-lg">$4999</p>
          <p className="font-semibold  text-lg">UPTO 50% OFF</p>
        </div>
        <div className="absolute">
          <img src={error} className="w-[90vh] h-auto " />
        </div>
        <div className="rounded-[50%] bg-yellow-300 w-[100px] h-[100px] flex justify-center items-center flex-col">
          <h1 className="text-center font-semibold">Explore More</h1>
          <span>
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
