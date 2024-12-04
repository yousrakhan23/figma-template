"use client";
import React from 'react';
import { Poppins } from 'next/font/google';

const fontPoppins400 = Poppins({ weight: '400', subsets: ['latin'] });
const fontPoppins600 = Poppins({ weight: '600', subsets: ['latin'] });
const Header = () => {
    return (
        <div>
            <header className=" ">
                <h3 className={`${fontPoppins400.className} text-center bg-black text-white p-2 w-550`}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className={`${fontPoppins600.className} underline mx-3`}>ShopNow</span>
                    <span className="ml-[150px]">English 
                        <svg width="21" height="10" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg " className='ml-[1180px] '>
                        <g filter="url(#filter0_d_17807_19)">
                            <path d="M10.364 4.95L15.314 0L16.728 1.414L10.364 7.778L4.00003 1.414L5.41403 0L10.364 4.95Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_17807_19" x="0" y="0" width="20.728" height="15.778" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17807_19" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17807_19" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    </span>
                </h3>
            </header>
        </div>
    );
};

export default Header;
