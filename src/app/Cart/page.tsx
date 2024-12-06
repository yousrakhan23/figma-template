"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lcd_Monitor from "@/public/lcd_Monitor.png";
import GamePad from "@/public/gamepad.png";
import { Poppins } from "next/font/google";

const fontPoppins = Poppins({ weight: "400", subsets: ["latin"] });

const CartPage = () => {
  const [quantities, setQuantities] = useState({ product1: 1, product2: 2 });

  const handleQuantityChange = (product: string, value: string) => {
    setQuantities((prev) => ({ ...prev, [product]: parseInt(value) }));
  };

  const prices = {
    product1: 650,
    product2: 550,
  };

  const subtotal =
    quantities.product1 * prices.product1 +
    quantities.product2 * prices.product2;

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        Home / <span className="text-black">Cart</span>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="shadow-md">
              <th className={`${fontPoppins.className} p-4 `}>Product</th>
              <th className={`${fontPoppins.className} p-4 text-center`}>
                Price
              </th>
              <th className={`${fontPoppins.className} p-4 text-center`}>
                Quantity
              </th>
              <th className={`${fontPoppins.className} p-4 text-center`}>
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 flex items-center space-x-4">
                <div className="relative inline-block">
                  <Image
                    src={Lcd_Monitor}
                    alt="LCD Monitor"
                    width={50}
                    height={50}
                    className="object-cover"
                  />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 -mt-2 -ml-2 cursor-pointer"
                  >
                    <circle cx="12" cy="12" r="9" fill="#DB4444" />
                    <path
                      d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>LCD Monitor</span>
              </td>
              <td className="p-4 text-center">${prices.product1}</td>
              <td className="p-4 text-center">
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={quantities.product1}
                  onChange={(e) =>
                    handleQuantityChange("product1", e.target.value)
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td className="p-4 text-center">
                ${quantities.product1 * prices.product1}
              </td>
            </tr>
            <tr>
              <td className="p-4 flex items-center space-x-4">
                <Image
                  src={GamePad}
                  alt="Gamepad"
                  width={50}
                  height={50}
                  className="object-cover"
                />
                <span>HI Gamepad</span>
              </td>
              <td className="p-4 text-center">${prices.product2}</td>
              <td className="p-4 text-center">
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={quantities.product2}
                  onChange={(e) =>
                    handleQuantityChange("product2", e.target.value)
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </td>
              <td className="p-4 text-center">
                ${quantities.product2 * prices.product2}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center mt-6 gap-9">
        <button
          className={`${fontPoppins.className} border border-gray-400 rounded px-4 py-2 text-[16px] w-[200px] sm:w-[218px] h-[56px]`}
        >
          Return To Shop
        </button>
        <button
          className={`${fontPoppins.className} border border-gray-400 rounded px-4 py-2 w-[200px] sm:w-[195px] h-[56px]`}
        >
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total */}
      {/* Coupon Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 flex flex-col lg:flex-row items-center gap-4 sm:pb-[3rem] md:pb-[12rem] ">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-[#000000] rounded px-4 py-2 w-full max-w-[300px] h-[50px]"
          />
          <button className="bg-[#DB4444] text-white px-4 py-2 rounded w-full max-w-[211px] h-[56px] lg:mt-0 mt-4">
            Apply Coupon
          </button>
        </div>

        
        <div className="border border-gray-300 rounded p-4 w-full max-w-xs md:max-w-md lg:max-w-full mx-auto lg:mx-0">
          <h2
            className={`${fontPoppins.className} text-lg mb-4 text-center lg:text-left`}
          >
            Cart Total
          </h2>
          <div className="flex flex-col lg:flex-row justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex flex-col lg:flex-row justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#DB4444] text-[#FAFAFA] text-[16px] w-[250px] h-[50px] px-4 py-2 rounded mt-4">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
