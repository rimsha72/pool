import React from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
const Services = ({ }) => {
  const scrollAnimation = getScrollAnimation();

  return (
    <div className="relative">
      <div className="max-w-[1850px] mx-auto p-6 sm:p-8 lg:p-16">
        <h1 className="text-6xl font-medium w-2/3 mt-6 leading-tight">Our Services</h1>
        <p className="text-[#ADADAD] text-xl mt-4 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex flex-row w-full text-center justify-center gap-16 mt-8">
          <div class="bg-[#0095E9] shadow-md rounded-[48px] max-w-sm text-center h-[505px]">
            <a href="#" className="flex justify-center">
              <img class="rounded-t-lg p-8" src="/assets/luxury.svg" alt="product image" />
            </a>
            <div class="px-5 pb-10">
              <a href="#">
                <h3 class="text-white-500 font-semibold tracking-tight text-3xl">
                  Luxury Pools
                </h3>
              </a>
            </div>
            <div class="px-5">
              <a href="#">
                <h3 class="text-white-500 text-xl">
                  Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </h3>
              </a>
            </div>
          </div>
          <div class="bg-white border-2 border-[#D9D9D9] shadow-md rounded-[48px] max-w-sm text-center h-[458px] ">
            <a href="#" className="flex justify-center">
              <img class="rounded-t-lg p-8" src="/assets/maintain.svg" alt="product image" />
            </a>
            <div class="px-5 pb-10">
              <a href="#">
                <h3 class="text-black font-semibold tracking-tight text-3xl">
                  Best Quality
                </h3>
              </a>
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h3 class="text-black text-xl">
                  Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </h3>
              </a>
            </div>
          </div>
          <div class="bg-white border-2 border-[#D9D9D9] shadow-md rounded-[48px] max-w-sm text-center h-[458px] ">
            <a href="#" className="flex justify-center">
              <img class="rounded-t-lg p-8" src="/assets/quality.svg" alt="product image" />
            </a>
            <div class="px-5 pb-10">
              <a href="#">
                <h3 class="text-black font-semibold tracking-tight text-3xl">
                  swim day 1
                </h3>
              </a>
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h3 class="text-black text-xl">
                  Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </h3>
              </a>
            </div>
          </div>
          <div class="bg-white border-2 border-[#D9D9D9] shadow-md rounded-[48px] max-w-sm text-center h-[458px]">
            <a href="#" className="flex justify-center">
              <img class="rounded-t-lg p-8" src="/assets/actions.svg" alt="product image" />
            </a>
            <div class="px-5 pb-10">
              <a href="#">
                <h3 class="text-black font-semibold tracking-tight text-3xl">
                  Low Maintenance
                </h3>
              </a>
            </div>
            <div class="px-5 pb-5">
              <a href="#">
                <h3 class="text-black text-xl">
                  Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
