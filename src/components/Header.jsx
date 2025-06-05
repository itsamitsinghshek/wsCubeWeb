import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#317aba] p-4'>
        <div className='max-w-[1240px] py-[10px] items-center flex justify-between mx-auto'>
            <div className='text-3xl font-bold'>WsCube Tech</div>
            {
                toggle ?
                <IoClose onClick={() => setToggle(!toggle)} className='text-white text-4xl md:hidden block' />
                :
                <IoMdMenu onClick={() => setToggle(!toggle)} className='text-white text-4xl md:hidden block' />
            }
            <ul className='hidden md:flex text-white gap-10'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* responsive menu */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[88px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact</li>
            </ul>
        </div>
    </div>
  )
}
