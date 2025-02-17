import React from "react";
import Image from "next/image";
import { navLinks } from "@/constant/constant";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed w-full transition-all duration-200 h-[12vh] z-[1000] bg-blue-700">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/*Logo*/}
        <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
