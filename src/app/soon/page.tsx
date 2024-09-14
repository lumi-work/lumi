import React from "react";

import thumbs from "../../../public/thumbs up.png";
import logo from "../../../public/logo.svg";
import Image from "next/image";

function page() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="absolute w-64 h-64 bg-[#4B4EE7] blur-[200px] top-1/2 left-3/4"></div>
      <div className="absolute w-64 h-64 bg-[#8276FF] blur-[200px] top-1/3 right-3/4"></div>
      <div className="pt-72 flex flex-col items-center justify-center w-full h-full relative z-0">
        <div className="mt-2">
          <Image src={logo} width={120} height={120} alt="lumilogo" />
        </div>
        <div className="font-extrabold text-[64px] max-sm:text-[48px] text-[#4B4EE7] my-4 mt-10 text-center">Cooking Our Website.</div>
        <div className="text-gray-500 font-medium">We are going to launch our website Very Soon.</div>
        <div className="mt-2 text-gray-500 font-medium">Stay Tune.</div>
        <div className="mt-7">
          <Image src={thumbs} width={50} height={50} alt="thumbs" />
        </div>
        <div className="flex items-end h-full mb-5">
          <h2 className="text-gray-500 font-medium">
            Powered by{" "}
            <a target="_blank" href="https://github.com/lumi-work" className="text-gray-600 underline decoration-wavy decoration-[#4B4EE7]">
              lumi.work
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default page;
