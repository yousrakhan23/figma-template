
"use client";
import React from "react";
import { Poppins } from "next/font/google";

const fontPoppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const fontPoppins600 = Poppins({ weight: "600", subsets: ["latin"] });

const Header = () => {
  return (
    <div>
      <header className="bg-black text-white p-2 flex flex-col items-center sm:flex-row sm:justify-center sm:items-center">
        
        <h3
          className={`${fontPoppins400.className} text-center text-[14px] text-sm sm:text-base`}
        >
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span
            className={`${fontPoppins600.className} underline mx-3 inline-block`}
          >
            ShopNow
          </span>
        </h3>

        
        <div className="flex items-center sm:ml-3 mt-2 sm:mt-0">
          <span className="mr-1">English</span>
          <svg
            width="16"
            height="10"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_17807_19)">
              <path
                d="M10.364 4.95L15.314 0L16.728 1.414L10.364 7.778L4.00003 1.414L5.41403 0L10.364 4.95Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_17807_19"
                x="0"
                y="0"
                width="20.728"
                height="15.778"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_17807_19"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_17807_19"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </header>
    </div>
  );
};

export default Header;
