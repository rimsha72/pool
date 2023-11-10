import React from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
const Hero = ({ }) => {
  const scrollAnimation = getScrollAnimation();

  return (
    <div className="relative">
      <div className="max-w-[1850px] mx-auto p-6 sm:p-8 lg:p-16 justify-center items-center">
        <div className="flex mt-8">
          <div className="flex items-center">
            <hr className="w-16 h-1 bg-[#0095e9] border-0 rounded md:my-4 mr-4" />
          </div>
          <h1 className="text-[33px] font-semibold mb-2 text-[#0095e9]">
            WE BUILD THE BEST POOLS
          </h1>
        </div>
        <h1 className="text-6xl font-medium w-2/3 mt-6 leading-tight">We Are Plunge Pool Builders & Plunge Pool Selling Experts</h1>
        <div className="flex flex-row">
          <div className="w-2/3">
            <img src="/assets/pool1.svg" alt="" className="mt-10" />
          </div>

          <div className="w-2/3" >
            <p className="text-[#ADADAD] text-xl mt-20 mb-16">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </p>
            <div>
              <div class="relative">
                {/* <img class="absolute top-0 left-0" src="/assets/pool2.svg" alt="Workplace" width="600" />
                <img class="cursor-pointer absolute top-0 left-0 mt-32 ml-40 hover:shadow-outline" src="/assets/pool3.svg" width="600" /> */}
                <div className="flex justify-end">
                  <img class="top-0 left-0" src="/assets/pool2.svg" alt="Workplace" width="600" />
                </div>
                <img class="cursor-pointer absolute top-0 left-0 mt-32 ml-[-45px] hover:shadow-outline" src="/assets/pool3.svg" width="600" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-end">
          <p className="text-[#0095E9] text-2xl">More About Company</p>
          <div className="flex items-center">
            <img src="/assets/right1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
