"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Logo.png";
import search_Icon from "@/public/search_Icon.png";
import wishlist_Icon from "@/public/wishlist_icon.png";
import cart_Icon from "@/public/Cart.png";
import user_Icon from "@/public/user.png";
import profile_Icon from "@/public/drop_down_profile_icon.png";
import mall_bag_Icon from "@/public/icon-mallbag.png";
import cancel_Icon from "@/public/icon-cancel.png";
import review_Icon from "@/public/Icon-Reviews.png";
import logout_Icon from "@/public/Icon-logout.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center flex-col w-screen ">
      <div className="w-full hidden lg:flex justify-evenly md:justify-center items-center relative bg-black h-12 text-white text-center">
        <div className="flex  md:text-sm lg:text-base  justify-center  items-center gap-5">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <h2 className="font-semibold underline">ShopNow</h2>
        </div>

        <div className="hidden  absolute md:right-10 lg:right-20 text-white  lg:flex justify-center items-center gap-2 ">
          <p>English</p>^
        </div>
      </div>

      <div className="flex justify-evenly items-center w-full border-b h-24 ">
        <Image
          src={logo}
          alt="logo"
          height={150}
          width={200}
          className=" object-contain w-[150px] h-[80px] lg:w-[200px] lg:h-[150px]"
        />

        <div className="hidden lg:flex justify-center items-center gap-10">
          
          <Link href="/" className=" text-lg text-black">
                Home
              </Link>
      
          <Link href="/" className="text-lg text-black">
                Contact
              </Link>
          
          <Link href="/AboutPage" className="text-lg text-black">
                About
              </Link>
          
          <Link href="/Signup" className="text-lg text-black">
                Signup
              </Link>
        </div>

        <div className="flex justify-center items-center gap-8 ">
          <div className="p-3 w-[243px] h-[38px] hidden lg:flex justify-evenly items-center  bg-gray-100">
            <input
              type="text"
              placeholder="what are you looking for?"
              className=" bg-gray-100 h-full outline-none border-none text-sm font-sans"
            />
            <Image
              src={search_Icon}
              alt="search icon"
              height={30}
              width={18}
              
            />
          </div>

          <div className="hidden lg:flex justify-center items-center gap-5">
            <Image src={wishlist_Icon} alt="wishlist" height={40} width={35} />
            <Image src={cart_Icon} alt="wishlist" height={40} width={40} />
          </div>

          <Image
            src={cart_Icon}
            alt="cart"
            height={40}
            width={40}
            className="block lg:hidden"
          />

          <DropdownMenu>
            <DropdownMenuTrigger className="relative ">
              <Image src={user_Icon} alt="user" height={40} width={40} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute -top-1 left-[-13rem] flex flex-col justify-center items-start pl-2 w-[224px] h-[208px] bg-gray-600/60 rounded-none backdrop-blur-md text-white">
              <DropdownMenuItem className="hover:bg-transparent">
                <div className=" flex justify-center items-center gap-2">
                  <Image src={profile_Icon} alt="user" height={30} width={30} />
                  <p> Manage My Account</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-center items-center gap-2">
                  <Image
                    src={mall_bag_Icon}
                    alt="user"
                    height={25}
                    width={25}
                  />
                  <p>My Order</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-center items-center gap-2">
                  <Image src={cancel_Icon} alt="user" height={25} width={25} />
                  <p>My Cancellations</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-center items-center gap-2">
                  <Image src={review_Icon} alt="user" height={30} width={30} />
                  <p>My Reviews</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex justify-center items-center gap-2">
                  <Image src={logout_Icon} alt="user" height={30} width={30} />
                  <p>Logout</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger>
              {/* <Image src={"/images/navbar/menu.svg"} alt='hamburger' height={40} width={40} className='block lg:hidden' /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#000"
                className="block lg:hidden"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-screen bg-slate-400 h-screen flex flex-col justify-center items-center">
              <div className="absolute top-20 w-[280px] h-[58px] flex justify-evenly items-center rounded-lg bg-gray-100">
                <input
                  type="text"
                  placeholder="what are you looking for?"
                  className="bg-gray-100  h-full outline-none border-none text-lg font-sans"
                />
                <Image
                  src={search_Icon}
                  alt="search icon"
                  height={30}
                  width={30}
                />
              </div>
              <Link href="/" className="font-semibold text-3xl mb-8 text-white">
                Home
              </Link>
              <Link href="/" className="font-semibold text-3xl mb-8 text-white">
                Contact
              </Link>
              <Link href="/" className="font-semibold text-3xl mb-8 text-white">
                About
              </Link>
              <Link href="/Signup" className="font-semibold text-3xl mb-8 text-white">
                Signup
              </Link>
              <Link href="/WishlistPage" className="font-semibold text-3xl mb-8 text-white">
                Wish List
              </Link>
              <Link href="/" className="font-semibold text-3xl mb-8 text-white">
                Wish List
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
