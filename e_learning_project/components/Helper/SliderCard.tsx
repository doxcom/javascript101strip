import React from 'react'
import Image from 'next/image'

//define type

type Props ={
    name: string;
    image: string;
    role: string;
};

const SliderCard = ({image,name,role}: Props) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
        <div className="h-50 w-50">
            <Image
            src={image}
            alt="image"
            width={350}
            height={350}
            className="w-full h-full"
            />
        </div>
    </div>
  )
}

export default SliderCard