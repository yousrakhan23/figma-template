"use client";
import React from 'react';
import Image  from 'next/image';
import Qr from "@/public/Qrcode 1.png";
import Google from "@/public/googleplay.png";
import App from "@/public/apple.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin ,FaPaperPlane} from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="bg-black text-white px-5 py-16 md:px-11">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
    
    {/* Exclusive Section */}
    <div className="space-y-8">
      <h2 className="font-inter text-2xl font-bold leading-[24px] tracking-[0.03em] text-left underline-offset-4">
        Exclusive
      </h2>
      <h2 className="font-inter text-2xl font-semibold leading-[24px] tracking-[0.03em] text-left">
        Subscribe
      </h2>
      <p className="font-poppins text-base font-normal leading-[24px] text-left">
        Get 10% off your first order
      </p>
      <div className="relative w-full max-w-[217px]">
        <input
          type="email"
          placeholder="Enter your email"
          className="border-white bg-black w-full h-[48px] py-3 px-4 pr-10 rounded-tl-md border text-white"
        />
        <FaPaperPlane className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer" />
      </div>
    </div>

    {/* Support Section */}
    <div className="space-y-6">
      <h3 className="text-[22px] font-poppins text-xl font-medium leading-[28px] text-left">Support</h3>
      <p className="font-poppins text-base font-medium leading-[24px] text-left">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <p className="font-poppins text-base font-medium leading-[24px] text-left">exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>

    {/* Account Section */}
    <div className="space-y-5">
      <h3 className="text-[22px] font-poppins text-xl font-medium leading-[28px] text-left">Account</h3>
      <p>My Account</p>
      <p>Login / Register</p>
      <p>Cart</p>
      <p>Wishlist</p>
      <p>Shop</p>
    </div>

    {/* Quick Link Section */}
    <div className="space-y-5">
      <h3 className="font-bold text-lg mb-2 text-[22px]">Quick Link</h3>
      <p>Privacy Policy</p>
      <p>Terms Of Use</p>
      <p>FAQ</p>
      <p>Contact</p>
    </div>

    {/* Download App Section */}
    <div className="space-y-8">
      <h3 className="text-left text-[25px] font-semibold leading-[28px]">Download App</h3>
      <p className="mb-2">Save $3 with App New User Only</p>
      <div className="flex flex-col items-center space-y-5 gap-6 md:space-y-0 md:flex-row md:items-start">
        <div className="flex-shrink-0">
          <Image src={Qr} alt="QR Code" width={85} height={100} />
        </div>
        <div className="flex flex-col md:flex-shrink-0 items-center space-y-6 gap-y-2 md:space-y-0">
          <Image src={Google} alt="Google Play QR Code" width={100} height={100} />
          <Image src={App} alt="App Store QR Code" width={100} height={100} />
        </div>
      </div>
      <div className="flex space-x-6 items-center mt-4 md:mt-0">
        <FaFacebook className="text-2xl text-white hover:text-blue-600" />
        <FaTwitter className="text-2xl text-white hover:text-blue-400" />
        <FaInstagram className="text-2xl text-white hover:text-pink-500" />
        <FaLinkedin className="text-2xl text-white hover:text-blue-700" />
      </div>
    </div>
  </div>

  {/* Footer Copyright Section */}
  <div className="text-center mt-6 text-sm font-poppins text-[18px] text-gray-800">
    <p>&copy; Copyright Rimel 2022. All rights reserved.</p>
  </div>
</footer>

    );
};

export default Footer;