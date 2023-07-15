// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Card = ({ imageSrc, title, description, alignRight, delay }) => {
//   const cardAlignmentClass = alignRight ? 'md:float-right' : 'md:float-left';

//   return (
//     <div className={`flex flex-col items-center bg-transparent rounded-lg md:flex-row m-4 md:max-w-sm ${cardAlignmentClass}`} data-aos="fade-in" data-aos-delay={delay}>
//       <img className="object-cover w-20 h-20 rounded-t-lg md:h-20 md:w-20 md:rounded-lg shadow-blue" src={imageSrc} alt="" />
//       <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className={`mb-2 text-2xl font-bold tracking-tight text-center md:text-left text-black `}>{title}</h5>
//         <p className={`mb-3 font-normal text-gray-900 text-center md:text-left `}>{description}</p>
//       </div>
//     </div>
//   );
// };

// const Challenge = () => {
//   const data = [
//     {
//       imageSrc: 'src/assets/decentralized.svg',
//       title: 'Decentralized',
//       description: 'Global network of companies with no third-party or central authority',
//       delay: 400
//     },
//     {
//       imageSrc: 'src/assets/peer.svg',
//       title: 'Peer-to-peer verified',
//       description: 'Real-time customer verification by companies',
//       delay: 500
//     },
//     {
//       imageSrc: 'src/assets/blockchain.svg',
//       title: 'Ledger-based',
//       description: 'A ledger-based verification model that encompasses transactions and actions',
//       delay: 600
//     },
//     {
//       imageSrc: 'src/assets/shield.svg',
//       title: 'No Data Sharing',
//       description: 'Customer data remains localized and 100% secure with built-in data protocol',
//       delay: 700
//     },
//   ];

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div className="bg-section-pattern bg-no-repeat flex flex-col lg:flex-row mt-20 lg:ml-10 h-full">
//       <div className="w-full lg:w-1/2 flex items-center justify-center" data-aos="fade-right" data-aos-delay="200">
//         <div className="w-[80%] lg:w-[80%]">
//           <p className="text-purple-800 font-black">THE CHALLENGE</p>
//           <h1 className="font-weight-800 text-[30px] md:text-[50px] font-black text-black mt-4">Skip The Big Promises<br />Hire Marketing Experts Based on Loyalty & Honesty</h1>
//           <p className="mt-4 text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>
//       </div>
//       <div className="w-full lg:w-1/2 mt-4 relative" data-aos="fade-right">
//         {data.map((item, index) => (
//           <Card
//             key={index}
//             imageSrc={item.imageSrc}
//             title={item.title}
//             description={item.description}
//             alignRight={index % 2 === 1}
//             delay={item.delay}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// 

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Challenge = () => {
 
    useEffect(() => {
      AOS.init({once:true});
    }, []);
  return(
    <>
      <div className="w-[100%] flex flex-col items-center justify-center align-middle">
        <h1 className="text-black font-black lg:text-[40px] text-2xl text-center">We Use Our Experience To Help Your Revenue Growth</h1>
        <p className="text-gray font-black text-[20px]">lorem lorem lorem lorem lorem, lorem</p>
        <div className="lg:w-[70%] lg:mt-20 mt-10 flex lg:flex-row flex-col-reverse lg:px-20 gap-10 lg:ml-20 " data-aos="fade-right" data-aos-delay="300">
        <div className="lg:w-[50%] flex flex-col gap-0 lg:px-0 px-14">
        <p className="text-purple-800 font-black text-lg">INFLUENCER</p>
            <h1 className="font-weight-800 text-lg md:text-xl lg:text-2xl font-black text-black">PARTNERSHIP</h1>
            <p className="mt-4 text-gray-500 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
        </div>
        <div className="lg:w-[50%]">
        <img src="src/assets/partnership.svg" className="lg:-mt-10"/>
        </div>
        </div>

        <div className="lg:w-[80%] lg:mt-20 mt-10 flex lg:flex-row flex-col lg:px-20 lg:gap-10 gap-0 lg:ml-20 " data-aos="fade-left" data-aos-delay="300">
        
        <div className="lg:w-[50%]">
        <img src="src/assets/experience.svg" className="lg:-mt-20"/>
        </div>
        <div className="lg:w-[40%] flex flex-col gap-0 mt-5  lg:px-0 px-14">
        <p className="text-yellow-400 font-black text-lg">COMPANY</p>
            <h1 className="font-weight-800 text-lg md:text-xl lg:text-2xl font-black text-black">EXPERIENCE</h1>
            <p className="mt-4 text-gray-500 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
        </div>
        </div>

        <div className="lg:w-[70%] lg:mt-20 mt-10 flex lg:flex-row flex-col-reverse lg:px-20 gap-10 lg:ml-20 " data-aos="fade-right" data-aos-delay="300">
        <div className="lg:w-[50%] flex flex-col gap-0 lg:px-0 px-14">
        <p className="text-red-700 font-black text-lg">SERVICES</p>
            <h1 className="font-weight-800 text-lg md:text-xl lg:text-2xl font-black text-black">GROWTH</h1>
            <p className="mt-4 text-gray-500 text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
        </div>
        <div className="lg:w-[50%]">
        <img src="src/assets/partnership.svg" className="lg:-mt-10"/>
        </div>
        </div>

      </div>
    </>
  )
};
export default Challenge;