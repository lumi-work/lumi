import React from "react";
import Image from "next/image";
import banner from "../../../public/banner123.png";

function Futures() {
  return (
    <div className="flex mt-[7rem] justify-center items-center">
      <div className="w-[1100px] h-[800px] bg-[#F3F2F5] rounded-xl shadow-md border-gray-200 border-8 flex flex-col justify-center items-center p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl relative">
        <h1 className="text-black text-center mb-5 text-3xl font-semibold">User Experience</h1>
        <div className="relative w-full h-full flex items-center justify-center">
          <Image src={banner} width={900} height={600} alt="banner" className="rounded-xl object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Futures;
