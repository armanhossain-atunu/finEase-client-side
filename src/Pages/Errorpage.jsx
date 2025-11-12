import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img
        src="https://imgs.search.brave.com/E0aKtG4vKHgMxwwm2iJipZFlfxbOytqkU-zSBbqpW_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzU5LzU1LzI4/LzM2MF9GXzU1OTU1/Mjg1MF9RY2E2WkF1/bEVaazBMbTdUcmNl/VGRCSTNEMll3Uk0x/Yi5qcGc"
        alt=""
      />
      <Link to="/" className="btn mt-4 bg-[#ebd1c7] text-[#5d3f68]">
        Back to Home
      </Link>
    </div>
  );
};

export default Errorpage;
