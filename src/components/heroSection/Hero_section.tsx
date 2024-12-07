"use client";
import React from "react";
import Image from "next/image";
import apple_iphone from "@/public/apple_iphone.png"
import arrow_hero from "@/public/arrow.png"
import hero_section_image from "@/public/hero_section_img.png"

export default function Hero_section() {
  return (
    <div className="flex">
      <div className="hidden w-[25vw] lg:flex  justify-end items-center  border-r pr-5 ">

        <div className="flex flex-col justify-center items-start gap-3">

          <div className="flex justify-between items-center w-[200px]">Woman’s Fashion <p>&gt;</p></div>

          <div className="flex justify-between items-center w-[200px]">Men’s Fashion <p>&gt;</p></div>

          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Sports & Outdoor</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
      </div>

      <div className="w-screen lg:w-[75vw] flex justify-center items-center">

        <div className="w-full  lg:w-[80%] mt-14 md:mt-0 bg-black flex justify-center md:px-8 items-center flex-wrap md:flex-nowrap">

          <div className="flex flex-col justify-center items-start">

            <div className="flex justify-center items-center gap-6 mb-5">
              <Image src={apple_iphone} alt="hero" height={30} width={40} />
              <p className="text-gray-200 text-sm">iPhone 14 Series</p>
            </div>

            <h1 className="text-4xl w-[294px] text-white">Up to 10% off Voucher</h1>

            <div className="text-white mt-5 flex gap-5">
              <p className="underline">Shop Now</p>
                <Image src={arrow_hero} alt="arrow" height={5} width={25}/>
            </div>

          </div>

          <Image src={hero_section_image} alt="hero" height={300} width={450} className="mt-20 md:mt-0" />
        </div>

      </div>
    </div>
  )
}