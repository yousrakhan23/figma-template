"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lcd_Monitor from "@/public/lcd_Monitor.png";
import GamePad from "@/public/gamepad.png";
import { Poppins } from "next/font/google";


const fontPoppins = Poppins({ weight: "400", subsets: ["latin"] });
const CartPage = () => {
  // State for quantities
  const [quantities, setQuantities] = useState({ product1: 1, product2: 2 });

  // Function to update quantity
  const handleQuantityChange = (product: string, value: string) => {
    setQuantities((prev) => ({ ...prev, [product]: parseInt(value) }));
  };

  // Prices (can be fetched dynamically)
  const prices = {
    product1: 650,
    product2: 550,
  };

  // Calculate totals
  const subtotal =
    quantities.product1 * prices.product1 +
    quantities.product2 * prices.product2;

  return (
    <div className="container mx-auto px-[5rem] py-8 w-[1170px] h-[840px] top-[323px] left-[135px] gap-[80px]">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">Home / <span className="text-black">Cart</span></div>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse  text-left">
          <thead>
            <tr className="shadow-md ">
              <th className={`${fontPoppins.className} p-4 pl-[4rem]`}>Product</th>
              <th className={`${fontPoppins.className} p-4  text-center`}>Price</th>
              <th className={`${fontPoppins.className} p-4  text-center`}>Quantity</th>
              <th className={`${fontPoppins.className} p-4  text-center`}>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* Product 1 */}
            <tr>
              <td className="p-4 pl-[4rem]  shadow-md flex items-center space-x-4">
                <Image
                  src={Lcd_Monitor}
                  alt="LCD Monitor"
                  className="w-16 h-16 object-cover"
                />
                <span className="text-gray-800">LCD Monitor</span>
              </td>
              <td className="p-4 shadow-md text-gray-700 text-center ">
                ${prices.product1}
              </td>
              <td className="p-4 shadow-md  text-center">
                <select
                  className="border border-gray-300 rounded px-2 py-1 "
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
              <td className="p-4 shadow-md text-gray-700 text-center">
                ${quantities.product1 * prices.product1}
              </td>
            </tr>

            {/* Product 2 */}
            <tr>
              <td className="p-4 flex items-center space-x-4 pl-[4rem] shadow-md">
                <Image
                  src={GamePad}
                  alt="Gamepad"
                  className="w-16 h-16 object-cover"
                />
                <span className="text-gray-800">HI Gamepad</span>
              </td>
              <td className="p-4 shadow-md text-gray-700t text-center">
                ${prices.product2}
              </td>
              <td className="p-4 shadow-md text-center">
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
              <td className="p-4 text-center text-gray-700">
                ${quantities.product2 * prices.product2}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="border border-gray-400 rounded px-4 py-2 hover:bg-gray-100">
          Return To Shop
        </button>
        <button className="border border-gray-400 rounded px-4 py-2 hover:bg-gray-100">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Coupon Section */}
        <div className="lg:col-span-2 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <button className="bg-[#DB4444] text-white px-4 py-2 rounded ">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Section */}
        <div className="border border-gray-300 rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
          <button className="bg-[#DB4444] text-white w-full px-4 py-2 rounded mt-4 ">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
