import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Solution = () => {
  useEffect(() => {
    AOS.init({once:true});
  }, []);

  const images = [
    { src: 'src/assets/1.svg', delay: 200 },
    { src: 'src/assets/2.svg', delay: 400 },
    { src: 'src/assets/3.svg', delay: 800 },
  ];

  return (
    <>
      <div className="bg-section-pattern flex flex-col-reverse lg:flex-row items-center justify-center mt-10 lg:ml-10 lg:px-0 px-10">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                className={`lg:ml-10 ${index === 1 ? 'lg:ml-20' : ''} lg:mt-0 `}
                data-aos="fade-right"
                data-aos-delay={image.delay}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-5">
          <div className="w-full lg:w-[80%]">
            <p className="text-purple-800 font-black">THE SOLUTION</p>
            <h1 className="font-weight-800 text-3xl md:text-4xl lg:text-5xl font-black text-black mt-4">XIRCLS Is Where You Go To Solve The Problem</h1>
            <p className="mt-4 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
            <p className="mt-4 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-5 shadow-blue mt-3 rounded-xl">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
