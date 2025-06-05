import React from 'react'
import laptop from '../assets/laptop.jpg'
export default function Expert() {
  return (
    <div className='max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-2'>
        <div className='md:w-[80%]'>
            <img src={laptop} alt="" className='inline' />
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
            <p className='my-2 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos consectetur amet sint in nihil sed consequatur. 
                Quam, iure, esse laborum aliquid earum optio quisquam praesentium voluptates illum eaque perspiciatis.
            </p>
            <button className='bg-black text-white w-40 py-3 rounded'>Get started</button>
        </div>
    </div>
  )
}
