import React from "react";

const Owner = () => {
    return(
        <>
         <div className=" flex lg:flex-row flex-col-reverse mt-20 lg:ml-10 h-[80%] text-center lg:px-0 px-10 mb-10">
            <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-right" data-aos-delay="200">
            <div className="lg:w-1/2 ">
                <img src="src/assets/quotes.svg" className="h-10 w-10 opacity-10"/>
                <p className="lg:text-3xl text-xl text-gray-500">“ XIRCLS matching process takes into account so many variables that I wouldn't even have thought of when trying to hire a marketing agency ”</p>
                <img src="src/assets/.svg" className="rounded-5xl lg:h-50 lg:w-50"/>
                <h3>Owner</h3>
                <h1>Name, Title of job</h1>
            </div>
            </div>
        <div className="lg:w-1/2 mt-4" data-aos="fade-right">
            <img src="src/assets/image.png" className="mt-10 shadow-3xl" />
            
        </div>
        </div>
        </>
    )
}
export default Owner