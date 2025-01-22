"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import aya from "../../public/images/aya.png"
import Link from "next/link"
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex flex-col'> 
    {/* Banner Section */}
        <div className='banner flex justify-center items-center text-xs md:text-sm h-[2rem] md:h-[2rem] bg-gradient-to-r from-[#021e60] to-[#004eeb] text-white'>
          <p>An open-source EVM faucet, built for the community by the community. {' '} 
            <a href='https://www.ayahq.com/'>Powered by <span className='cursor-pointer underline underline-offset-1'>AyaHQ</span></a>
          </p>
        </div>
        {/* Navigation Section */}
          <div className='navigation h-[5rem] md:text-lg bg-white flex items-center justify-around'>
            <div className='logo cursor-pointer'>
              <Image src={aya} className='w-[5rem]' alt='Aya Logo' />
            </div>
            <div className='links flex items-center justify-center py-2 px-2 bg-[#fafbff] border  divide-x divide-gray-300'>
              <Link href='/about' className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>Home</Link>
              <Link href='/developers' className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>About</Link>
              <Link href='/solutions'className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>Developers</Link>
              <Link href='/company' className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>Company</Link>
              <Link href='/resources' className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>Resources</Link>
            </div>  
            <div className='modes border p-2 flex items-center rounded md:text-lg'>
              <button><LuSun /></button>
            </div>
          </div>
    </div>
  )
}

export default Header