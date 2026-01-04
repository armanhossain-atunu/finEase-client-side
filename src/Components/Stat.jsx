import React, { useEffect, useState } from "react";
import MyContainer from "./MyContainer";
import { FcDownload } from "react-icons/fc";

const Counter = ({ end, duration = 2000, decimals = 0 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setValue(end);
      } else {
        setValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{value.toFixed(decimals)}</span>;
};

const Stat = () => {
  return (
    <div  className="bg-[#875DF890] mt-10">
      <MyContainer className="text-center py-10">
        <div className="flex flex-col md:flex-row justify-between">

          {/* Downloads */}
          <div className="stat flex flex-col justify-center items-center">
            <div className="font-bold text-2xl">Downloads</div>
            <div className="stat-value">
              <Counter end={14000000} duration={3000} /> {/* 14M */}
            </div>
            <p>
              <FcDownload className="text-5xl" />
            </p>
          </div>

          {/* Rating */}
          <div className="stat flex flex-col justify-center items-center">
            <div className="font-bold text-2xl">Rating</div>
            <div className="stat-value">
              <Counter end={4.7} duration={2000} decimals={1} />
            </div>
            <p className="text-5xl">⭐</p>
          </div>

          {/* Languages */}
          <div className="stat flex flex-col justify-center items-center">
            <div className="font-bold text-2xl">Languages</div>
            <div className="stat-value">
              <Counter end={40} duration={2000} />
            </div>
            <p className="text-5xl">🌐</p>
          </div>

          {/* Banks Connect */}
          <div className="stat flex flex-col justify-center items-center">
            <div className="font-bold text-2xl">Banks Connect</div>
            <div className="stat-value">
              <Counter end={15000} duration={3000} />
            </div>
            <p className="text-5xl">🏦</p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Stat;
