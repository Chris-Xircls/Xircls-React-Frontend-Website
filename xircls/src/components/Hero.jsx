import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-8 h-[90vh]">
      <div className="lg:w-1/2 p-8 z-1 relative lg:ml-[9rem]">
        <h1 className="text-3xl lg:text-6xl mb-4 text-black font-black">
          The <span className="text-[#4388CF]">World's First Decentralized<br />Collaborative</span> Marketing Network
        </h1>
        <p className="text-base lg:text-2xl mb-6 w-full lg:w-1/2 text-gray-500">
          Create sustainable options and cultivate loyalty for your business
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 font-bold text-white btn-lg rounded-2xl">
          Get Started
        </button>
      </div>
      <div className="lg:w-1/2 items-start">
        <img src="src/assets/hero.svg" alt="Hero Image" className="w-full" />
      </div>
    </div>
  );
};

export default Hero;
