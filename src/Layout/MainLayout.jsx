import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
