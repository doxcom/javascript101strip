import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="fixed w-full transition-all duration-200 h-[12vh] z-[1000] bg-blue-700">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/*Logo*/}
        <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
      </div>
    </div>
  );
};

export default Nav;
