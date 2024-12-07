"use client";

import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaStar } from 'react-icons/fa';
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import product1 from "@/public/gucci_bag.png"
import product2 from "@/public/product2.png"
import product3 from "@/public/product3.png";
import product4 from "@/public/product4.png";
import product5 from "@/public/product5.png";
import product6 from "@/public/product6.png";
import product7 from "@/public/product7.png";
import product8 from "@/public/product8.png";

export default function Wishlist() {
  return (
<div className="w-full max-w-[1170px] mx-auto p-4 lg:p-10">
  <div className="flex flex-wrap items-center justify-between h-[56px] mb-8 sm:mb-10 lg:mb-12">
    <h2 className="text-[#000000] font-[400] text-[10px] lg:text-[20px]">Wishlist (4)</h2>
    <button className="border-[1px] px-6 py-2 lg:px-[48px] lg:py-[16px] border-[#00000080] text-[14px] lg:text-[16px] font-[500]">
      Move All To Bag
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 ">

    {/*product 1*/}
    <div className="border w-[270px] sm:w-[300px] lg:w-[270px] relative gap-[16px]">
      <div className="flex items-center justify-between absolute top-[12px] left-[12px] w-full px-[12px]">
        <span className="bg-[#DB4444] text-[#FAFAFA] text-[12px] font-[400] px-[12px] py-[4px] rounded">
          -35%
        </span>
        <div className="bg-white p-1 rounded-full mr-4">
          <RiDeleteBinLine color="#000000" />
        </div>
      </div>
      <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={product1}
          alt="Gucci duffle bag"
          width={178}
          height={129}
          className="object-contain"
        />
      </div>

      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="h-[56px] gap-[10px] p-4 pl-1">
        <h3 className="text-[#000000] text-[14px] lg:text-[16px] font-[500] ">Gucci duffle bag</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[14px] lg:text-[16px] font-[500]">$960</p>
          <p className="text-[#000000] opacity-[50%] line-through text-[14px] lg:text-[16px] font-[500]">$1160</p>
        </div>
      </div>
    </div>

     {/*product 2*/}
    <div className="border w-[270px] sm:w-[300px] lg:w-[270px] relative gap-[16px]">
      <div className="flex items-center justify-between absolute top-[20px] left-[14px] pl-48">
        <div className="bg-white p-1 rounded-full ml-6">
          <RiDeleteBinLine color="#000000" />
        </div>
      </div>
      <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={product2}
          alt="product 2"
          width={178}
          height={129}
          className="object-contain"
        />
      </div>
      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-[#000000] text-[16px] font-[500]">RGB liquid CPU Cooler</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[16px] font-[500]">$1960</p>
        </div>
      </div>
    </div>
 
    {/*product 3*/}
    <div className="border w-[270px] sm:w-[300px] lg:w-[270px] relative overflow-hidden gap-[16px]">
      <div className="flex items-center justify-between absolute top-[20px] left-[14px] pl-48">
        <div className="bg-white p-1 rounded-full ml-6">
          <RiDeleteBinLine color="#000000" />
        </div>
      </div>
      <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={product3}
          alt="product 3"
          width={178}
          height={129}
          className="object-contain"
        />
      </div>
      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="p-4">
        <h3 className="text-[#000000] text-[16px] font-[500]">GP11 Shooter USB Gamepad</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[16px] font-[500]">$550</p>
        </div>
      </div>
    </div>

     {/*product 4*/}
    <div className="border w-[270px] sm:w-[300px] lg:w-[270px] relative overflow-hidden gap-[16px]">
      <div className="flex items-center justify-between absolute top-[20px] left-[14px] pl-48">
        <div className="bg-white p-1 rounded-full ml-6">
          <RiDeleteBinLine color="#000000" />
        </div>
      </div>
      <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={product4}
          alt="product 4"
          width={178}
          height={129}
          className="object-contain"
        />
      </div>
      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="p-4">
        <h3 className="text-[#000000] text-[16px] font-[500]">Quilted Satin Jacket</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[16px] font-[500]">$750</p>
        </div>
      </div>
    </div>
    </div>
    
        <div className="w-full lg:w-[1170px] h-[466px] py-20 pr-10">
  <div className="flex items-center justify-between h-[56px] p-4 mb-10 lg:mb-12">
    <div className="flex items-center">
      <div className="bg-[#DB4444] rounded-tl-[4px] w-[20px] h-[40px] rounded-md"></div>
      <div className="text-[20px] font-[400] leading-[26px] text-center text-black ml-2">
        Just For You
      </div>
    </div>
    <button className="w-[150px] border-slate-700 bg-white text-black h-[56px] px-[20px] py-[16px] gap-[10px] border-[1px] border-solid rounded-[4px]">
      See All
    </button>
  </div>


 {/*Product Section2*/}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
    {/* Product Card 1 */}
    <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-[16px]">
      <div className="flex items-center justify-between absolute top-[12px] left-[12px] w-full px-[12px]">
        <span className="bg-[#DB4444] text-[#FAFAFA] text-[12px] font-[400] px-[12px] py-[4px] rounded">
          -35%
        </span>
        <div className="bg-white p-1 rounded-full mr-4">
          <IoEyeOutline color="#000000" />
        </div>
      </div>
      <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={ product5 }
          alt=" product 5 "
          width={158}
          height={166}
          className="object-contain"
        />
      </div>

      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="h-[56px] gap-[10px] p-4 pl-1">
        <h3 className="text-[#000000] text-[14px] lg:text-[16px] font-[500]">
          ASUS FHD Gaming Laptop
        </h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[14px] lg:text-[16px] font-[500]">$960</p>
          <p className="text-[#000000] opacity-[50%] line-through text-[14px] lg:text-[16px] font-[500]">$1160</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="#FFAD33" />
          ))}
          <p className="ml-1 text-sm sm:text-base">(65)</p>
        </div>
      </div>
    </div>

    {/* Product Card 2 */}
    <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-14 lg:gap-[16px]">
      <div className="flex items-center justify-between absolute top-[20px] left-[14px] pl-48">
        <div className="bg-white p-1 rounded-full ml-6">
          <IoEyeOutline color="#000000" />
        </div>
      </div>
      <div className="bg-[#F5F5F5] w-full h-[200px] sm:h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={product6}
          alt="IPS LCD Gaming Monitor"
          width={158}
          height={166}
          className="object-contain"
        />
      </div>
      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="p-4">
        <h3 className="text-[#000000] text-[16px] font-[500]">IPS LCD Gaming Monitor</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[16px] font-[500]">$1160</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="#FFAD33" />
          ))}
          <p className="ml-1 text-sm sm:text-base">(65)</p>
        </div>
      </div>
    </div>

    {/* Product Card 3 */}
    <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-[16px]">
      <div className="flex items-center justify-between absolute top-[20px] left-0 right-0 px-[14px]">
        <span className="bg-[#00FF66] text-[#FAFAFA] text-[12px] font-[400] px-[12px] py-[4px] rounded">
          NEW
        </span>
        <div className="bg-white p-1 rounded-full ml-auto">
          <IoEyeOutline color="#000000" />
        </div>
      </div>

      <div className="bg-[#F5F5F5] w-full h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={product7}
          alt="HAVIT HV-G92 Gamepad"
          width={158}
          height={166}
          className="object-contain"
        />
      </div>
      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="p-4">
        <h3 className="text-[#000000] text-[16px] font-[500]">HAVIT HV-G92 Gamepad</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[16px] font-[500]">$560</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="#FFAD33" />
          ))}
          <p className="ml-1 text-sm sm:text-base">(65)</p>
        </div>
      </div>
    </div>

    {/* Product Card 4 */}
    <div className="border w-full sm:w-[270px] lg:w-[270px] relative overflow-hidden gap-[16px]">
      <div className="flex items-center justify-between absolute top-[20px] left-[14px] pl-48">
        <div className="bg-white p-1 rounded-full ml-6">
          <IoEyeOutline color="#000000" />
        </div>
      </div>

      <div className="bg-[#F5F5F5] w-full h-[250px] rounded-[4px] flex justify-center items-center">
        <Image
          src={product8}
          alt="Wireless Mouse"
          width={158}
          height={166}
          className="object-contain"
        />
      </div>
      <div className="bg-[#000000] text-white text-center text-[12px] font-[400] br-[4px] py-[8px] flex items-center justify-center gap-2">
        <MdOutlineShoppingCart color="#FFFFFF" size={14.92} />
        Add To Cart
      </div>
      <div className="p-4">
        <h3 className="text-[#000000] text-[16px] font-[500]">Wireless Mouse</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-[#DB4444] text-[16px] font-[500]">$250</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="#FFAD33" />
          ))}
          <p className="ml-1 text-sm sm:text-base">(65)</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

 
)
}