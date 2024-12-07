"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Signup from "@/app/Signup/page";
import LoginPage from "@/app/LoginPage/page";
import Wishlist from "./WishlistPage/page";
import Cart from "@/app/Cart/page";
import Checkout from "./Checkout/page";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Signup />
      <LoginPage />
      <Wishlist />
      <Cart />
      <Checkout />
      <Footer />
    </div>
  );
};

export default HomePage;
