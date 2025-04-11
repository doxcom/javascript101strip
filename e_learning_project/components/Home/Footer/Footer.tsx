import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
        {/*Define grid system */}
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* 1st footer part */}
        <div>
            <Image src="/images/logo.png" alt="Logo" height={100} width={100} />
            <p className="text-white text-opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            {/*social link */}
            <div className="flex items-center space-x-4 mt-6">
                <FaFacebookF className="w-6 h-6 text-blue-600" />
                <FaTwitter  className="w-6 h-6 text-sky-500"/>
                <FaYoutube  className="w-6 h-6 text-red-700"/>
                <FaInstagram  className="w-6 h-6 text-pink-600"/>
            </div>
        </div>

        </div>
        <div></div>
        </div>
  )
}

export default Footer