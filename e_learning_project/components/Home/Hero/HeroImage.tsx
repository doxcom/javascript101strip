"use client" //this is to make this a client component
import React from 'react'
import Tilt from "react-parallax-tilt";
import Image from 'next/image';

//hidden lg:black will hide our img in small devices
const HeroImage = () => {
  return (
     <Tilt>      
      <div className="hidden lg:block">
        <Image src="/images/hero.png" width={800} height={600} alt="Hero" />
      </div>
     </Tilt>
  )
}

export default HeroImage