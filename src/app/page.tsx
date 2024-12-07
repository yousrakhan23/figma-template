"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import BestSellingProducts from "@/components/bestSellingProducts/BestSellingProducts";
import BrowseByCategory from "@/components/browseByCategory/BrowseByCategory";
import ExploreProducts from "@/components/exploreProducts/ExploreProducts";
import FlashSales from "@/components/flashSales/FlashSales";
import Hero_section from "@/components/heroSection/Hero_section";
import NewArrivals from "@/components/newArrivals/NewArrivals";
import SpeakerBanner from "@/components/speakerBanner/SpeakerBanner";
import Wishlist from "./WishlistPage/page";
import Cart from "@/app/Cart/page";
import Checkout from "./Checkout/page";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero_section />
   <FlashSales />
   <BrowseByCategory />
   <BestSellingProducts />
   <SpeakerBanner />
   <ExploreProducts />
   <NewArrivals />

      
      
      <Wishlist />
      <Cart />
      <Checkout />
      <Footer />
    </div>
  );
};

export default HomePage;
