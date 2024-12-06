// "use client";
// import React, { useState } from "react";
// import { Inter, Poppins } from "next/font/google";
// import { MdClose, MdOutlineMenuOpen } from "react-icons/md";

// const fontInter = Inter({ weight: "700", subsets: ["latin"] });
// const fontPoppins = Poppins({ weight: "400", subsets: ["latin"] });

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className=" top-0 z-50 border-b-[0.5px]">
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">
//         <h1
//           className={`${fontInter.className} text-black w-118 h-24 pl-[10rem] pt-9 text-[24px]`}
//         >
//           Exclusive
//         </h1>

//         <nav className="hidden sm:flex items-center space-x-8 pr-[5rem]">
//           <ul
//             className={`${fontPoppins.className} flex items-center space-x-6 pr-[12rem]`}
//           >
//             <li className="text-black text-[16px] cursor-pointer border-b-2 ">
//               Home
//             </li>
//             <li className="text-black text-[16px] cursor-pointer ">Contact</li>
//             <li className="text-black text-[16px] cursor-pointer ">About</li>
//             <li className="text-black text-[16px] cursor-pointer ">Sign Up</li>
//           </ul>

//           <div className="flex items-center border px-9 py-1 bg-[#F5F5F5]">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="outline-none text-[12px] w-full bg-[#F5F5F5] pr-7"
//             />

//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="top-[4px] left-[4px] h-[16px] w-[16px] "
//             >
//               <path
//                 d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//               />
//             </svg>
//           </div>

//           <div className="flex items-center space-x-4">
//             <svg
//               width="22"
//               height="20"
//               viewBox="0 0 22 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>

//             <svg
//               width="32"
//               height="32"
//               viewBox="0 0 32 32"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M3 5H7L10 22H26"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//         </nav>

//         <div
//           className="text-2xl sm:hidden cursor-pointer mr-4 mt-3"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <MdClose /> : <MdOutlineMenuOpen />}
//         </div>
//       </div>

//       {isOpen && (
//         <nav className="sm:hidden bg-white border-t shadow-md">
//           <ul className="flex flex-col items-center space-y-4 py-4">
//             <li className="text-black text-[16px] cursor-pointer ">Home</li>
//             <li className="text-black text-[16px] cursor-pointer ">Contact</li>
//             <li className="text-black text-[16px] cursor-pointer ">About</li>
//             <li className="text-black text-[16px] cursor-pointer ">Sign Up</li>
//           </ul>
//           <div className="flex items-center justify-center border rounded-md px-3 py-2 mx-6">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="outline-none text-[14px] w-full"
//             />

//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className=""
//             >
//               <path
//                 d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//               />
//             </svg>
//           </div>
//           <div className="flex justify-center items-center space-x-6 py-4">
//             <svg
//               width="22"
//               height="20"
//               viewBox="0 0 22 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>

//             <svg
//               width="32"
//               height="32"
//               viewBox="0 0 32 32"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M3 5H7L10 22H26"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//               <path
//                 d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
//                 stroke="black"
//                 stroke-width="1.5"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//         </nav>
//       )}
//     </div>
//   );
// };

// export default Navbar;
"use client";
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/Logo.png"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
    return (
        <div className='flex justify-center items-center flex-col w-screen '>

            <div className='w-full hidden lg:flex justify-evenly md:justify-center items-center relative bg-black h-12 text-white text-center'>
                <div className='flex  md:text-sm lg:text-base  justify-center  items-center gap-5'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <h2 className='font-semibold underline'>ShopNow</h2>
                </div>

                <div className='hidden  absolute md:right-10 lg:right-20 text-white  lg:flex justify-center items-center gap-2 '>
                    <p>English</p>
                    ^
                </div>
            </div>

            <div className='flex justify-evenly items-center w-full border-b h-24 '>
                <Image src={logo} alt='logo' height={150} width={200} className=' object-contain w-[150px] h-[80px] lg:w-[200px] lg:h-[150px]' />

                <div className='hidden lg:flex justify-center items-center gap-10'>
                    <p className='text-lg'> Home</p>
                    <p className='text-lg'> Contact</p>
                    <p className='text-lg'> About</p>
                    <p className='text-lg'> SignUp</p>
                </div>

                <div className='flex justify-center items-center gap-8 '>

                    <div className='p-3 w-[243px] h-[38px] hidden lg:flex justify-evenly items-center  bg-gray-100'>
                        <input type="text" placeholder='what are you looking for?' className=' bg-gray-100 h-full outline-none border-none text-sm font-sans' />
                        <Image src={"/images/navbar/component.svg"} alt='search icon' height={30} width={30} className='' />
                    </div>

                    <div className='hidden lg:flex justify-center items-center gap-5'>
                        <Image src={"/images/navbar/Wishlist.svg"} alt='wishlist' height={40} width={40} />
                        <Image src={"/images/navbar/Cart.svg"} alt='wishlist' height={40} width={40} />
                    </div>

                    <Image src={"/images/navbar/Cart.svg"} alt='cart' height={40} width={40} className='block lg:hidden'/>
                    
                    <DropdownMenu >
                        <DropdownMenuTrigger className='relative '>
                            <Image src={"/images/navbar/user.png"} alt='user' height={40} width={40} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='absolute -top-1 left-[-13rem] flex flex-col justify-center items-start pl-2 w-[224px] h-[208px] bg-gray-600/60 rounded-none backdrop-blur-md text-white'>

                            <DropdownMenuItem className='hover:bg-transparent'>
                                <div className=' flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/user.svg"} alt='user' height={30} width={30} />
                                    <p> Manage My Account</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-mallbag.svg"} alt='user' height={25} width={25} />
                                    <p>My Order</p>
                                </div>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-cancel.svg"} alt='user' height={25} width={25} />
                                    <p>My Cancellations</p>
                                </div>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-Reviews.svg"} alt='user' height={30} width={30} />
                                    <p>My Reviews</p>
                                </div>

                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex justify-center items-center gap-2'>
                                    <Image src={"/images/navbar/icon-logout.svg"} alt='user' height={30} width={30} />
                                    <p>Logout</p>
                                </div>

                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>



                    <Sheet>
                        <SheetTrigger>
                            <Image src={"/images/navbar/menu.svg"} alt='hamburger' height={40} width={40} className='block lg:hidden' />
                        </SheetTrigger>
                        <SheetContent className='w-screen bg-gray-700 h-screen flex flex-col justify-center items-center'>
                                    <div className='absolute top-20 w-[280px] h-[58px] flex justify-evenly items-center rounded-lg bg-gray-100'>

                                        <input type="text" placeholder='what are you looking for?' className='bg-gray-100  h-full outline-none border-none text-lg font-sans' />
                                        <Image src={"/images/navbar/component.svg"} alt='search icon' height={30} width={30}  />
                                    </div>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Home</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Contact</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>About</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Signup</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Wish List</Link>
                                    <Link href="/" className='font-semibold text-3xl mb-8 text-white'>Wish List</Link>
                                    
                            
                            </SheetContent>
                    </Sheet>

                </div>

            </div>
        </div>
    )
}
