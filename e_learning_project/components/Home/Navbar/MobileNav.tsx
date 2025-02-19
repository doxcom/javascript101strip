import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
  
  <div>
 {/* Overlay*/}
 <div className="fixed top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black
 opacity-70 w-full h-[100vh]" />

 <div className="text-white fixed justify-center flex flex-col h-full transform transition-al duration-500
 delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 z-[100006]">
  {/* Navlinks*/}
  {navLinks.map((link)=>{
     return <Link key={link.id} href={link.url}>
     <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] ">{link.label}</p>
     </Link>
  })}
    
    </div>
  </div>
  );
};

export default MobileNav;
