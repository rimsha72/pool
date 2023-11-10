import React from "react";
import { HiLocationMarker } from "react-icons/hi"
import { BiCurrentLocation } from "react-icons/bi"
import getScrollAnimation from "../utils/getScrollAnimation";
const Hero = ({ }) => {
  const scrollAnimation = getScrollAnimation();

  return (
    <div className="relative py-24 h-screen">
      <div
        className="bg-main "
        style={{
          backgroundImage: `url('/assets/main4.png')`,
          backgroundSize: "100% 100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>
      <div className="max-w-[1850px] mx-auto p-6 sm:p-8 lg:p-16 xl:flex-row flex flex-col justify-center items-center">
        <div className="w-1/2 text-white ">
          <div className="flex mt-8">
            <hr className="w-16 h-1 bg-[#0095e9] border-0 rounded md:my-4 mr-4" />
            <h1 className="text-[33px] font-semibold mb-2 text-[#0095e9]">
              YOUR DREAM PLUNGE POOL
            </h1>
          </div>
          <h1 className="text-white-500 text-[100px] font-bold w-full">Build Your Dream Plunge Pool </h1>
          <p className="text-lg text-white-500 font-normal mb-16" >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s Lorem Ipsum is simply <br />dummy text
          </p>

          <form className="pb-8">
            <label for="default-search" className="mb-4 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BiCurrentLocation
                  className="w-10 h-10 font-bold mr-4 text-[#0095e9] "
                />
              </div>
              <input type="search" id="default-search" className="block w-full p-5 pl-16 text-sm h-20 text-gray-900 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Locator the nearest dealers" required />
              <button className="text-white flex items-center text-lg flex-row absolute right-2.5 bottom-2.5 bg-[#0095e9] hover:bg-blue-800 focus:ring-4 text-white-500 focus:outline-none focus:ring-blue-300 rounded-2xl px-4 py-4 "><HiLocationMarker
                className="w-6 h-6 font-bold mr-4 text-white-500"
              />Locate</button>
            </div>
          </form>
          <div className="flex gap-4">
            <img src="/assets/left.svg" alt="" />
            <img src="/assets/right.svg" alt="" />
          </div>
        </div>
        <div className="w-1/2" >
          <div className="flex justify-end ">
            <div style={{ backgroundImage: `url('/assets/form.png')`, backgroundSize: "cover" }} className="p-16 rounded-lg shadow-2xl w-[593px] h-[621px] justify-end" >
              <form>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-white-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-white-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country of Residence</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-white-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-white-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-white-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pool required</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input type="text" name="repeat_password" id="floating_repeat_password" className="block py-10 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-white-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type Your Requirements Here...</label>
                </div>
                <button type="submit" className="mt-16 text-white bg-white-500 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center">Request a free quote</button>
              </form>
            </div>
          </div>
          <div className="flex gap-10 justify-end mt-4">
            <img src="/assets/1.svg" alt="" />
            <img src="/assets/2.svg" alt="" />
            <img src="/assets/3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
