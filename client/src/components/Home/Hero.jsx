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
import roundfont from "../../assets/roundfont.png";

const Hero = () => {
  return (
    <div className="selector py-14 min-h-[100vh] md:pt-[12vh] ">
      <div className="flex justify-between items-end md:px-0 px-[12vh] md:gap-x-0">
        <div className="flex items-start font-semibold gap-2">
          <div class="h-[8vh] xl:h-[12vh] lg:h-[8vh] border-l-2 border-[#BDBDBD] align-center md:hidden mt-2"></div>
          <div className="flex flex-col h-full md:flex-row md:absolute top-[41vh] md:gap-2 md:justify-center w-full  text-xl md:text-xl italic">
            <p className=" text-[#FF7676] font ">Na Garam</p>
            <p className=" text-[#44B0FF] font">Na Thanda</p>
            <p className=" text-[#B0FF4D] font">Sirf Tazaa...</p>
          </div>
        </div>
        <div className="md:mx-auto ">
          <h1 className="text-7xl hero_font font-bold text-[#FFF] md:text-center md:text-6xl">
            Water Tank
          </h1>
          <h1 className="text-7xl hero_font font-bold text-[#DEC482] text-center mt-2 md:mb-[12vh] mb-[5vh] md:text-6xl">
            Doctor
          </h1>

          <div className="flex items-center justify-center gap-2 md:mx-2">
            <hr class="w-[10vh] border-t-2  border-[#DDC474] "></hr>
            <button className="rounded-full border-2 border-[#DDC474] py-1 px-4 text-[#DDC474] z-10 font-semibold">
              <NavLink to="/product/1">SHOP NOW!</NavLink>
            </button>
            <button className="rounded-full border-2 border-[#DDC474] py-1 px-4 text-[#DDC474] hidden md:block hero_font font-semibold z-10 md:text-black hero_bg">
              <Link to="Why" smooth={true} spy={true} offset={-180}>
                Explore More
              </Link>
            </button>
            <hr class="w-[10vh] border-t-2  border-yellow-300"></hr>
          </div>
        </div>
        <div className="bg-[#30303066] h-auto rounded-[27px] px-2 py-4 md:absolute right-2 top-[90vh]">
          <ul className="flex flex-col items-center gap-4 justify-center">
            <li className="duration-500 ease-in-out hover:scale-110">
              <img src={insta} className="w-8 h-8" />
            </li>
            <li className="duration-500 ease-in-out hover:scale-110">
              <img src={whats} className="w-8 h-8" />
            </li>
            <li className="duration-500 ease-in-out hover:scale-110">
              <img src={mail} className="w-8 h-8" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex lg:gap-2 justify-around px-[25vh] md:px-0 xl:px-[10vh]">
        <div className="text-white flex flex-col justify-center md:absolute md:flex-row-reverse top-[12vh] md:w-full md:gap-4 md:bg-[#E0C375] md:h-[6vh] md:items-center">
          <div className="md:flex md:flex-row md:gap-2 mt-[15vh] md:mt-0 md:font-semibold">
            <p className="hero_price_font text-[#F2C652] text-2xl md:text-black text-end md:text-xl">
              ₹ 2999
            </p>
            <p className="hero_price_font line-through text-[#ACA5A5] text-lg text-end">
              ₹ 4999
            </p>
          </div>
          <p className="font-semibold  lg:text-sm md:text-black text-lg">
            UPTO 50% OFF
          </p>
        </div>
        <div className="ml-[15vh] md:ml-0 z-5 md:mt-10 relative">
          <div className="h-[70%] w-[80%] rounded-full bg-[#FFFFFFBA] absolute top-[50%] left-[10%] sm:left-[12%] sm:w-[280px] sm:h-[200px] drop-shadow-2xl border-black "></div>
          <div className="flex relative">
            <img
              src={error}
              className="w-[100%] h-auto drop-shadow-3xl max-w-[60vh]"
            />
            <img
              src={splash}
              className="w-[50%] h-auto absolute left-[75%] bottom-[60%] md:w-[10vh] lg:w-[20vh] md:left-[75%] md:bottom-[70%]"
            />
            <div className="w-[40px] h-[40px] bg-[#E5E5E5C4] rounded-full absolute right-[42%] top-[40%] flex items-center justify-center">
              <BsFillPlayFill className="text-3xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center md:hidden relative">
          <img src={roundfont} className="absolute w-[180px] " />
          <div className="rounded-[50%] bg-[#DEC482] w-[130px] h-[130px] md:w-[110px] md:h-[110px] flex justify-center items-center flex-col ">
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
