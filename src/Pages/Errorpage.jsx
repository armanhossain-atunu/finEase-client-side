import React from "react";
import { Link } from "react-router";
import Button from "../Components/Button";

const Errorpage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img
        src="https://i.ibb.co/RpMSPtYJ/404-not-found.gif"
        alt=""
        className="h-70"
      />
      <p className="text-lg mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Button>
        <Link to="/">
          Back to Home
        </Link>
      </Button>
    </div>
  );
};

export default Errorpage;
