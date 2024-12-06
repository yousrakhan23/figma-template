"use client";

import React from "react";
// import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Signup from "@/app/Signup/page";
import Cart from "@/app/Cart/page";
import Checkout from "./Checkout/page";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Signup />
      <Cart />
      <Checkout />   
    </div>
  );
};

export default HomePage;
