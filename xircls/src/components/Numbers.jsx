import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ start }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            if (count < 800) {
              setCount((prevCount) => prevCount + 1);
            } else {
              clearInterval(interval);
            }
          }, 5);
          
          return () => {
            clearInterval(interval);
          };
        }
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);
  
  return (
    <>
      <h1
        ref={countRef}
        className="text-black font-black lg:text-5xl text-3xl mt-5"
      >
        {count >= 800 ? 800 : count}K+
      </h1>
      <progress
        className="progress progress-primary w-56 h-5 lg:mt-8 mt-5"
        value={Math.min(count / 800, 1)}
        max={1}
      ></progress>
    </>
  );
};

const Numbers = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 px-5">
        <h1 className="text-black text-center font-black lg:text-5xl text-3xl">
          For You.
          <br />
          No Matter Who You Are.
        </h1>
        <div className="flex flex-row gap-5">
          <CountUp start />
        </div>

        <div className="mt-5 flex flex-row gap-6">
          <div class="grid grid-cols-2 grid-rows-3 gap-4">
            <div class="col-span-2 row-span-2 gap-5 flex flex-col justify-center items-center text-black bg-[#8AE7BC] hover:text-white hover:bg-black rounded-xl hover:-translate-y-6 hover:shadow-2xl hover:hue-rotate-60 transition ease-in-out duration-100">
            <h1 className='item-center justify-center align-middle font-bold  lg:text-5xl text-xl'>760k</h1>
              <h1 className='item-center justify-center align-middle font-bold  lg:text-2xl text-sm '>Transactions</h1>
            </div>
            <div class="">
              <img src="src/assets/block12.svg" />
            </div>
            <div class="">
              <img src="src/assets/block12.svg" />
            </div>
          </div>
          <div class="grid grid-cols-2 grid-rows-3 gap-2">
            <div class="">
              <img src="src/assets/block12.svg" />
            </div>
            <div class="">
              <img src="src/assets/block12.svg" />
            </div>
            <div class="col-span-2 row-span-3 gap-5 flex flex-col justify-center items-center rounded-xl text-black hover:text-white bg-[#DEC3FD] hover:bg-black hover:-translate-y-6 hover:shadow-2xl hover:hue-rotate-60 transition ease-in-out duration-100">
            <h1 className='item-center justify-center align-middle  lg:text-5xl text-xl font-bold '>700K</h1>
              <h1 className='item-center justify-center align-middle  lg:text-2xl text-sm font-bold '>Genuine Customers</h1>
            </div>
          </div>

          <div class="grid grid-cols-2 grid-rows-3 gap-4">
            <div class=" flex flex-col gap-5 justify-center items-center text-black hover:text-white col-span-2 row-span-2 rounded-xl bg-[#52A6FF] hover:bg-black hover:-translate-y-6 hover:shadow-2xl transition ease-in-out duration-100 ">
              <h1 className='item-center justify-center align-middle lg:text-5xl text-xl font-bold'>100%</h1>
              <h1 className='item-center justify-center align-middle lg:text-2xl text-sm font-bold'>Verified</h1>
            </div>
            <div class="">
              <img src="src/assets/block12.svg" />
            </div>
            <div class="">
              <img src="src/assets/block12.svg" />
            </div>
          </div>

          <div className="grid grid-rows-3 gap-4">
            <img src="src/assets/block21.svg" />
            <img src="src/assets/block22.svg" />
            <img src="src/assets/block21.svg" />
          </div>
        </div>
        <div className="container bg-black lg:w-[70%] w-[90%] mt-10 h-100 rounded-3xl text-center shadow-2xl">
          <div className="flex flex-col mt-10 mb-10 justify-center align-middle items-center">
            <div className="flex items-center gap-5">
              <h1 className="text-center font-black text-white lg:text-4xl text-lg ">
                Grow Your Business with
              </h1>
              <img
                src="src/assets/White_XIRCLS.png"
                className=" lg:h-30 w-30 lg:w-40 h-10"
              />
            </div>
            <p className="text-white mt-6 font-black">
              No Payment Required. 100% Free
            </p>
            <div className="flex mt-5 gap-10">
              <button className="btn btn-primary rounded-2xl px-6">
                Get Started
              </button>
              <button className="btn btn-outline rounded-2xl px-6">
                Lets Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Numbers;
