import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Network = () => {
    useEffect(() => {
        AOS.init({once:true});
      }, [])
    return(
        <>
        <div className="mt-20 flex flex-col items-center" data-aos="fade-in" data-aos-delay="500" >
        <h1 className="text-black text-center px-10 font-black text-3xl lg:text-5xl">Join A Global Network Of Companies</h1>
        <img src="src/assets/network.svg" className="w-[120%] lg:mt-[-180px]"/>
  <button className="bg-blue-500 text-white px-8 py-5 rounded-2xl text-lg shadow-blue hover:bg-black mt-10">
    Learn More About Us
  </button>
</div>


        
        </>
    )
}
export default Network