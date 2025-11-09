import React from "react";
import MyContainer from "./MyContainer";
import { FcDownload } from "react-icons/fc";

const Stat = () => {
  return (
    <MyContainer className="text-center py-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className=" stat flex flex-col justify-center items-center">
          <div className="font-bold text-2xl">Downloads</div>
          <div className="stat-value">14 M</div>
          <p>
            <FcDownload className="text-5xl" />
          </p>
        </div>

        <div className="stat">
          <div className="font-bold text-2xl">Rating</div>
          <div className="stat-value">4.7</div>
          <p className="text-5xl">⭐</p>
        </div>

        <div className="stat">
          <div className="font-bold text-2xl">Languages</div>
          <div className="stat-value">40</div>
          <p className="text-5xl">🌐</p>
        </div>

        <div className="stat">
          <div className="font-bold text-2xl">Banks Connect</div>
          <div className="stat-value">15 K</div>
          <p className="text-5xl">🏦</p>
        </div>
      </div>
    </MyContainer>
  );
};

export default Stat;
