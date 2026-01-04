import React, { useContext } from "react";
import Banner from "../Components/Header/Banner";
import Budgeting from "../Components/Budgeting";
import Stat from "../Components/Stat";
import Features from "../Components/Features";
import AccountSummary from "../Components/AccountSummary";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import TestimonialsSwiper from "../Components/Testimonials";
import FAQ from "../Components/FAQ";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <Banner></Banner>
      <Budgeting></Budgeting>
      <AccountSummary></AccountSummary>
      <Features></Features>
      <Stat></Stat>
      <TestimonialsSwiper></TestimonialsSwiper>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
