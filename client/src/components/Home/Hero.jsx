import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import insta from "../../assets/instagram.png";
import whats from "../../assets/whatsapp.png";
import mail from "../../assets/gmail.png";
import error from "../../assets/errer.png";
import splash from "../../assets/splash1 1.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="selector py-14 min-h-[100vh] md:pt-[12vh] ">
      <div className="flex justify-between items-end md:px-0 px-[12vh] md:gap-x-0">
        <div className="flex items-start font-semibold gap-2 ">
          <div class="h-16 border-l-2 border-gray-500 align-center md:hidden mt-3"></div>
          <div className="flex flex-col h-full md:flex-row md:absolute top-[41vh] md:gap-2 md:justify-center w-full ">
            <p className="text-xl text-[#FF7676] font">Na Garam</p>
            <p className="text-xl text-[#44B0FF] font">Na Thanda</p>
            <p className="text-xl text-[#B0FF4D] font">Sirf Tazaa...</p>
          </div>
        </div>
        <div className="md:mx-auto ">
          <h1 className="text-6xl hero_font font-bold text-[#FFF] md:text-center">
            Water Tank
          </h1>
          <h1 className="text-6xl hero_font font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent text-center mt-2 md:mb-[12vh] mb-[5vh]">
            Doctor
          </h1>

          <div className="flex items-center justify-center gap-2 md:mx-2">
            <hr class="w-[10vh] border-t-2  border-yellow-300 "></hr>
            <button className="rounded-full border-2 border-yellow-300 py-1 px-4 text-yellow-300 z-10 font-semibold">
              <NavLink to="/product/1">SHOP NOW!</NavLink>
            </button>
            <button className="rounded-full border-2 border-yellow-300 py-1 px-4 text-yellow-300 hidden md:block hero_font font-semibold z-10">
              <Link to="Why" smooth={true} spy={true} offset={-180}>
                Explore More
              </Link>
            </button>
            <hr class="w-[10vh] border-t-2  border-yellow-300"></hr>
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
      <div className="flex gap-[20vh] lg:gap-2 justify-around px-[20vh] md:px-0 lg:px-5">
        <div className="text-white flex flex-col justify-center md:absolute md:flex-row-reverse top-[12vh] md:w-full md:gap-4 md:bg-[#E0C375] md:h-[6vh] md:items-center">
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
        <div className="ml-[15vh] md:ml-0 z-5 md:mt-10 relative">
          <div className="h-[70%] w-[80%] rounded-full bg-[#FFFFFFBA] absolute top-[50%] left-[10%] sm:left-[12%] sm:w-[280px] sm:h-[200px] drop-shadow-3xl lg:w-[52vh] lg:h-[35vh]"></div>
          <div className="flex relative">
            <img src={error} className="w-[370px] h-auto sm:w-[60vh]" />
            <img
              src={splash}
              className="w-[20vh] h-auto absolute left-[80%] md:w-[10vh] lg:w-[20vh] "
            />
            <div className="w-[40px] h-[40px] bg-[#E5E5E5C4] rounded-full absolute right-[42%] top-[40%] flex items-center justify-center">
              <BsFillPlayFill className="text-3xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <div
            className="rounded-[50%] bg-[#DEC482] w-[130px] h-[130px] md:w-[110px] md:h-[110px] flex justify-center items-center flex-col"
            style={{ shapeOutside: "circle()" }}
          >
            {/* <p class="text-justify ml-4">
              Lorem ipsum dolor sit amet, consectetur
            </p> */}
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
