"use client";
import React from "react";
import Image from "next/image";
import Lcd_Monitor from "@/public/lcd_Monitor.png";
import GamePad from "@/public/gamepad.png";
import imageIcon from "@/public/img1.png"
import visaIcon from "@/public/img2.png";
import brandIcon from "@/public/img3.png";
import brandIconTwo from "@/public/img4.png";
const Checkout = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        <div className="mb-10 lg:ml-[160px] mt-10 text-sm text-black opacity-50 flex flex-wrap lg:justify-start justify-center gap-4">
          {["Account", "My Account", "Product", "View Cart", "Checkout"].map((item, index) => (
            <span key={index} className="relative group cursor-pointer">
              {item}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          ))}
        </div>

        {/* Billing Details Heading */}
        <h1 className="text-[28px] md:text-[36px] font-bold mb-6 lg:ml-[160px] text-center lg:text-left">
          Billing Details
        </h1>

        <div className="flex flex-col lg:flex-row justify-center gap-8">

          {/* Billing Form */}
          <div className="bg-white p-6 rounded w-full max-w-md lg:w-[470px]">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 opacity-50 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded px-4 py-2 bg-[#f5f5f5] opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 opacity-50 mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full rounded px-4 py-2 bg-[#f5f5f5] opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 opacity-50 mb-2">Street Address</label>
                <input type="text" className="w-full rounded px-4 py-2 bg-[#f5f5f5]" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 opacity-50 mb-2">
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  className="w-full rounded px-4 py-2 bg-[#f5f5f5] opacity-50"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 opacity-50 mb-2">Town/City</label>
                <input type="text" className="w-full rounded px-4 py-2 bg-[#f5f5f5]" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 opacity-50 mb-2">Phone Number</label>
                <input type="text" className="w-full rounded px-4 py-2 bg-[#f5f5f5]" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 opacity-50 mb-2">Email Address</label>
                <input type="email" className="w-full rounded px-4 py-2 bg-[#f5f5f5] opacity-50" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 bg-[#f5f5f5]" id="saveInfo" />
                <label htmlFor="saveInfo" className="text-gray-700">
                  Save this information for faster checkout next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 w-full max-w-md lg:w-[470px]">
            <h2 className="text-lg font-bold mb-4">Your Order</h2>

            {/* Order Items */}
            <ul className="mb-4 space-y-4">
              <li className="flex items-center">
                <Image src={Lcd_Monitor} alt="LCD Monitor" width={48.88} height={42.22} />
                <div className="flex justify-between w-full text-sm ml-4">
                  <span className="text-gray-700">LCD Monitor</span>
                  <span className="text-gray-700">$650</span>
                </div>
              </li>
              <li className="flex items-center">
                <Image src={GamePad} alt="HI Gamepad" width={48.88} height={42.22} />
                <div className="flex justify-between w-full text-sm ml-4">
                  <span className="text-gray-700">HI Gamepad</span>
                  <span className="text-gray-700">$1100</span>
                </div>
              </li>
            </ul>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-gray-700">$1750</span>
            </div>
            <hr className="border-gray-300 mb-4" />
    
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Shipping:</span>
              <span className="text-gray-700">Free</span>
            </div>
            <hr className="border-gray-300 mb-4" />
            
            <div className="mb-4">
             <div className="flex items-center justify-between mb-3">
             <div className="flex items-center">
              <input type="radio" id="pics" name="payment" className="mr-2" />
             <label htmlFor="pics" className="text-gray-700">Bank Transfer</label>
             </div>
            <div className="flex gap-2">
            <Image src={imageIcon} alt="img1" width={39.2} height={25} />
            <Image src={visaIcon} alt="img2" width={39.2} height={25} />
            <Image src={brandIcon} alt="img3" width={39.2} height={25} />
            <Image src={brandIconTwo} alt="img4" width={39.2} height={25} />
          </div>
        </div>

              <div className="flex items-center">
                <input type="radio" id="cash" name="payment" className="mr-2" />
                <label htmlFor="cash" className="text-gray-700">Cash on Delivery</label>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border border-gray-300 rounded px-4 py-2"
              />
              <button className="bg-[#db4444] text-white text-sm rounded py-2 px-4">
                Apply Coupon
              </button>
            </div>
            <button className="w-full bg-[#db4444] text-white rounded py-3">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;