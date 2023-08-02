import React from "react";
import whats from "../assets/whatsapp.png";
import insta from "../assets/instagram.png";
import mail from "../assets/gmail.png";

const Contact = () => {
  return (
    <div className="py-[10vh] md:pt-[12vh] about_color">
      <div className="about_head_color mt-5 mx-5 pb-[10vh] pl-[25vh] rounded-lg md:pb-[10vh] flex justify-between  md:flex-col md:mx-[10vh] md:pl-[12vh] sm:px-4 sm:mx-[5vh] sm:pb-[5vh]">
        <div className=" max-w-sm flex flex-col mt-[10vh] sm:mt-[5vh] md:justify-center">
          <h1 className="font-semibold text-5xl lg:text-4xl text-[#fff] underline mb-10 text-center">
            Contact Us
          </h1>
          <div className="flex gap-2">
            <p className="text-[#fff] mr-2">Dm at :</p>
            <img src={whats} className="w-6 h-6" />
            <img src={insta} className="w-6 h-6" />
            <img src={mail} className="w-6 h-6" />
          </div>
          <div className="flex items-center mt-5">
            <hr className="flex-grow border-t border-gray-300 mr-4" />
            <span className="text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300 ml-4" />
          </div>
          <div className="text-lg mt-[10vh] text-[#fff] flex flex-col gap-10">
            <h1>Mobile:</h1>
            <h1>Address:</h1>
          </div>
        </div>

        <div className="w-full mx-auto max-w-lg pt-[10vh]">
          <form className=" rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-[#fff] text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#fff] text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-[#fff]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex">
              <button
                className="bg-[#2c5567] hover:opacity-50 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr class="h-[5px] mt-10 bg-gray-200 border-0 border-dotted dark:bg-gray-700  mx-[20vh] md:mx-10"></hr>
    </div>
  );
};

export default Contact;
