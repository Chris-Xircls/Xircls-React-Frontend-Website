import React from "react";
import Marquee from "react-fast-marquee";

const Clients = () => {
    const clientLogos = [
      "src/assets/brands/leaflogo.svg",
      "src/assets/brands/designerclass.svg",
      "src/assets/brands/cornitos.svg",
      "src/assets/brands/hammer.svg",
      "src/assets/brands/kapiva.svg",
      "src/assets/brands/snitch.svg",
      "src/assets/brands/bewakoof.svg",
      "src/assets/brands/skullcandy.svg",
    ];
  
    return (
      <div className="flex flex-row gap-10 h-[200px] align-middle items-center opacity-50 mt-5">
        <Marquee>
          {clientLogos.map((logo, index) => (
            <img key={index} src={logo} className="m-6" alt={`Client Logo ${index}`} />
          ))}
        </Marquee>
      </div>
    );
  };
  
export default Clients