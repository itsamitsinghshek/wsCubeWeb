import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] mx-auto py-10 md:flex justify-between'>
            <div>
                <h1 className='text-xl md:text-4xl font-bold text-white'>Want to learn latest I.T skills ?</h1>
                <p className='text-white'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <input type="email" className='p-3 mr-2 rounded-md text-black my-2 md:my-0' placeholder='Enter your E-mail' />
                <button className='bg-black text-white w-40 py-3 rounded'>Notify me</button>
                <p className='text-white mt-4'>We care about the protection of your data. Read our<br/><a href="#" className='text-black'>privacy policy.</a></p>
            </div>
        </div>
    </div>
  )
}
