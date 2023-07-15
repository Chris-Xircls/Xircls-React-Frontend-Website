import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({once:true});
  }, []);

  return (
    <>
      <div className="bg-section-pattern flex flex-col-reverse lg:flex-row items-center justify-center align-middle mt-20 lg:ml-10">
        <div className="w-full lg:w-1/2" >
          <img src="src/assets/about.svg" alt="About Image" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="lg:w-[80%] lg:px-0 px-5" >
            <p className="text-purple-800 font-bold">THE STATEMENT</p>
            <h1 className="font-weight-800 text-4xl md:text-5xl lg:text-6xl font-black text-black mt-4">We're on a Mission To Help Businesses Grow</h1>
            <p className="mt-4 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-4 shadow-blue mt-3 rounded-xl align-middle">Learn more about security &gt;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
