"use client"
import React from 'react'
import { Inter } from 'next/font/google';
const fontInter = Inter({ weight: '700', subsets: ['latin'] });
const Navbar = () => {
  return (
    <div>
        <nav className=''>  
            <h1 className={`${fontInter.className} text-black w-118 h-24 pl-[10rem] pt-9 text-[24px]`}>Exclusive</h1>
            <ul>
                <li className='text-16px'>Home</li>
                <li className='text-16px'>Contact</li>
                <li className='text-16px'>About</li>
                <li className='text-16px'>Sign Up</li>
            </ul>
            </nav>
      
    </div>
  )
}

export default Navbar;