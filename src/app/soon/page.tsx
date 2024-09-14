import Image from "next/image";
import React from "react";

import logo from "../../../public/logo.svg";
import thumbs from "../../../public/thumbs up.png";

function Page() {
  return (
    <>
      <div className="w-64 h-64 bg-[#4B4EE7] blur-[200px] absolute top-1/4 left-3/4 z-0"></div>
      <div className="w-64 h-64 bg-[#4B4EE7] blur-[200px] absolute top-1/2 right-3/4 z-0"></div>
      <div className="flex flex-col justify-between w-full min-h-screen relative z-10">
        <div className="flex items-center justify-center flex-grow">
          <div className="flex flex-col items-center justify-center">
            <Image src={logo} width={130} height={130} alt="logo" />
            <div className="font-black text-[64px] pt-8 text-[#4B4EE7]">Cooking Our Website.</div>
            <div className="text-gray-500 font-medium pt-3">We are going to launch our website Very Soon.</div>
            <div className="text-gray-500 font-medium pt-2">Stay Tune.</div>
            <div className="mt-7">
              <Image src={thumbs} width={50} height={50} alt="thumbs" />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <h2 className="text-gray-500 font-medium">
            Powered by{" "}
            <a target="_blank" href="https://github.com/lumi-work" className="text-gray-600 underline decoration-wavy decoration-[#4B4EE7]">
              lumi.work
            </a>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Page;
