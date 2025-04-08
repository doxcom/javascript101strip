"use client";


import React from 'react'
import { BsQuote } from 'react-icons/bs';

const Review = () => {
  return (
    <div className="pt-20 pb-60 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20">
        {/*Text Content */}
        <div className="xl:col-span-1 mt-6">
            {/*Subheading*/}
              <div className="flex items-center space-x-4">
                             <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
                                 <BsQuote className="h-6 w-6 text-white"/>
                             </div>
                             <h1 className="text-xl text-white font-semibold">
                                 Student Feedback
                             </h1>
                         </div>

                                     {/*other*/}


        </div>

         {/*Slider */}
         <div></div>
      </div>
    </div>
  )
}

export default Review