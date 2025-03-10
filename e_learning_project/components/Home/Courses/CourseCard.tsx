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
            <div>
                <Image src={course.image} 
                alt={course.title} 
                width={400}
                height={400} 
                className="w-full h-full"
                />
            </div>
        </div>
    </Tilt>
  )
};

export default CourseCard