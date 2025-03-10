"use client";

import React from 'react'
import Tilt from "react-parallax-tilt";
import Image from "next/image";

//define the type

type Props = {
    course: {
        id: number;
        image: string;
        title: string;
        price: number;
        author: string;
        reviewNumber: number;
        lessons: number;
        students: number;
        category: string;
    };
};

const CourseCard = ({course}: Props) => {
  return (
    <Tilt>

        <div className="bg-white rounded-lg overflow-hidden cursor-pointer">
            {/* Image Grid */}
            <div>
                <Image src={course.image} 
                alt={course.title} 
                width={400}
                height={400} 
                className="w-full h-full"
                />
            </div>
            {/* Price */}
            <div className="p-4">
               <h1 className="ml-auto relative z-[10] h-20 w-20 flex items-center text-lg font-bold justify-center
               flex-col  mt-[-4rem] rounded-full bg-rose-700 text-white">${course.price}</h1> 
            </div>
        </div>
    </Tilt>
  )
};

export default CourseCard