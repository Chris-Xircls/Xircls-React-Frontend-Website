import React from "react";

const Stats = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full lg:w-[60%] h-[120px] flex justify-center items-center bg-gradient-to-r from-black to-orange-950">
        <div className="stat items-center flex flex-col text-white">
          <div className="stat-value">100%</div>
          <div className="stat-desc font-bold text-white">Verified Customer<br/>Engagement</div>
        </div>
        
        <div className="stat items-center flex flex-col text-white">
          <div className="stat-value">3%</div>
          <div className="stat-desc font-bold text-white">Average Click <br />Through</div>
        </div>
        
        <div className="stat items-center flex flex-col text-white">
          <div className="stat-value">13%</div>
          <div className="stat-desc font-bold text-white">Conversion Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
