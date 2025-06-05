import React from 'react'
import { ReactTyped } from "react-typed";

export default function () {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl'>Learn with us</div>
            <h2 className='text-white text-4xl md:text-6xl md:py-5'>Grow with us</h2>
            <div className='text-white text-2xl md:text-4xl'>Learn
            <ReactTyped className='pl-3' strings={["Web Development", "Digital Marketing", "Ethical Hacking"]}
             typeSpeed={100} loop={true} backSpeed={100} />
            </div>
            <button className='bg-black text-white py-3 px-10 rounded mt-6'>Get started</button>
        </div>
    </div>
  )
}
