import React from 'react'

const HeroContent = () => {
  return (
    <div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem]
    lg:leading-[3.5rem] xl:leading-[4rem] text-white">
        Best Online platform for education.
        </h1>
        <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deleniti, nam quam officia animi maxime rerum odio nostrum ipsum obcaecati!
        </p>
        <div className="mt-8 flex items-center space-x-4">
            
            <button className="button__cls bg-green-700 hover:bg-green-900">Get Started</button>


            <button className="button__cls bg-yellow-700 hover:bg-yellow-900">Learn More</button>
        
        </div>
        </div>
  );
};

export default HeroContent;