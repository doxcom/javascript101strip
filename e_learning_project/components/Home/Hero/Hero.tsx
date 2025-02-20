import React from 'react'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-[100vh] bg-indigo-950">
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
           {/* Text content */}
           <HeroContent/>

          {/*  Imagecontent */}
          <HeroImage/>



        </div>
        </div>
    </div>
  )
}

export default Hero