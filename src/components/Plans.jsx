import React from 'react'
import webpng from '../assets/single.png'
import digipng from '../assets/double.png'
import apppng from '../assets/triple.png'

export default function Plans() {
  return (
    <div className='py-24'>
        <div className='max-w-[1240px] mx-auto px-3 md:grid grid-cols-3 gap-10'>
            {/* first card */}
            <div className='rounded-2xl overflow-hidden shadow-xl text-center py-5 mt-4 hover:scale-105 duration-500'>
                <img src={webpng} alt="" className='w-24 object-cover mx-auto' />
                <h1 className='text-2xl font-bold mt-5'>Web Development</h1>
                <h1 className='text-2xl font-bold my-5'>$ 149</h1>
                <p className='text-gray-700 mt-2 px-16 text-[15px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam dolores ab sapiente quae in, 
                    minima expedita beatae nesciunt sit labore reprehenderit.
                </p>
                <button className='bg-[#00df9a] text-black font-bold w-40 py-2 rounded my-5'>Start Trial</button>
            </div>
            {/* second card */}
            <div className='rounded-2xl overflow-hidden bg-gray-100 shadow-xl text-center py-5 mt-4 hover:scale-105 duration-500'>
                <img src={digipng} alt="" className='w-24 object-cover mx-auto' />
                <h1 className='text-2xl font-bold mt-5'>Digital Marketing</h1>
                <h1 className='text-2xl font-bold my-5'>$ 149</h1>
                <p className='text-gray-700 mt-2 px-16 text-[15px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam dolores ab sapiente quae in, 
                    minima expedita beatae nesciunt sit labore reprehenderit.
                </p>
                <button className='bg-[#00df9a] text-black font-bold w-40 py-2 rounded my-5'>Start Trial</button>
            </div>
            {/* third card */}
            <div className='rounded-2xl overflow-hidden shadow-xl text-center py-5 mt-4 hover:scale-105 duration-500'>
                <img src={apppng} alt="" className='w-24 object-cover mx-auto' />
                <h1 className='text-2xl font-bold mt-5'>App Development</h1>
                <h1 className='text-2xl font-bold my-5'>$ 149</h1>
                <p className='text-gray-700 mt-2 px-16 text-[15px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam dolores ab sapiente quae in, 
                    minima expedita beatae nesciunt sit labore reprehenderit.
                </p>
                <button className='bg-[#00df9a] text-black font-bold w-40 py-2 rounded my-5'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

