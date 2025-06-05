import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2699fb] py-16 px-6 md:px-16">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold">WsCube Tech.</h2>
                    <p className="mt-2 text-gray-200">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat
                        consequatur libero reiciendis, blanditiis accusantium.
                    </p>
                    <div className="flex mt-4 space-x-3 text-gray-300">
                        <a href="#" className="hover:text-white"><FaFacebookF size={24} /></a>
                        <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
                        <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
                        <a href="#" className="hover:text-white"><FaLinkedinIn size={24} /></a>
                    </div>
                </div>
                
                {/* Solutions */}
                <div>
                    <h3 className="font-semibold">Solutions</h3>
                    <ul className="mt-2 space-y-2 text-gray-200">
                        <li><a href="#" className='hover:text-white'>Analytics</a></li>
                        <li><a href="#" className='hover:text-white'>Marketing</a></li>
                        <li><a href="#" className='hover:text-white'>Commerce</a></li>
                        <li><a href="#" className='hover:text-white'>Insights</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold">Support</h3>
                    <ul className="mt-2 space-y-2 text-gray-200">
                        <li><a href="#" className="hover:text-white">Pricing</a></li>
                        <li><a href="#" className="hover:text-white">Documentation</a></li>
                        <li><a href="#" className="hover:text-white">Guides</a></li>
                        <li><a href="#" className="hover:text-white">API Status</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold">Company</h3>
                    <ul className="mt-2 space-y-2 text-gray-200">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-white">Jobs</a></li>
                        <li><a href="#" className="hover:text-white">Press</a></li>
                        <li><a href="#" className="hover:text-white">Careers</a></li>
                    </ul>
                </div>
            </div>
        </footer>
  )
}
