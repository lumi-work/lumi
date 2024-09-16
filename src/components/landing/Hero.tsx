import React from "react";
import "@/styles/hero.css";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 mt-16">
      <h1 className="text-[86px] font-bold text-center">
        <span className="gradient-text">A more humane</span>
        <br />
        <span className="text-black">kanban board</span>
      </h1>
      <p className="text-[19px] font-normal text-gray-500 text-center mt-4">
        Lumi is a back to basic kanban board focused on fast and
        <br /> delightful user experience.
      </p>
      <div className="flex mt-8 gap-5">
        <button className="px-6 py-2 bg-[#4B4EE7] text-white rounded-xl hover:bg-[#4B4EE7]/90">Docs</button>
        <button className="border-2 border-[#4B4EE7] rounded-lg px-6 py-2 text-[#4B4EE7] hover:border-[#4B4EE7]/90">Get Started!</button>
      </div>
    </div>
  );
}

export default Hero;
