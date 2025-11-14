import React from "react";
import MyContainer from "../MyContainer";
import Button from "../Button";

const Banner = () => {
  return (
    <MyContainer className="mt-18 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center space-y-5">
          <h1 className="text-3xl font-bold">
            Take Control of Your <br /> Money with Fin
            <span className="text-[#875DF8]">Ease</span>
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Track income, expenses, and savings goals effortlessly. Your
            all-in-one personal finance management solution.
          </p>
          <Button>Get Started</Button>
        </div>
        <div>
          <img data-aos="fade-right"  src="https://i.ibb.co.com/B2pZ9cXk/banner-Img.jpg" alt="" />
        </div>
      </div>
    </MyContainer>
  );
};

export default Banner;
