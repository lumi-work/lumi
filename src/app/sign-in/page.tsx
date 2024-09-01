import Logo from "@/components/Logo";
import React from "react";

function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 overflow-y-hidden">
      <div className="mb-12">
        <Logo />
      </div>
      <div className="relative flex flex-col items-center justify-center z-10 bg-white border border-white/50 rounded-2xl shadow-md max-w-[450px] w-[90%] h-[500px]">
        <div>
          <h2 className="text-2xl font-medium">Login</h2>
        </div>
        <div>
          <p className="text-gray-500 pt-1">to get started</p>
        </div>
        <div className="pt-6">
          <form action="#">
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-100 border border-gray-300 rounded-md px-2 w-full h-[2.2rem] focus:outline-gray-400"
            />
            <input
              type="text"
              placeholder="Password"
              className="bg-gray-100 border border-gray-300 rounded-md px-2 w-full h-[2.2rem] focus:outline-gray-400"
            />
          </form>
        </div>
      </div>
      <div className="relative z-0">
        <div className="w-64 h-64 bg-gradient-to-r from-[#8276FF] to-[#4B4EE7] blur-[200px] absolute inset-0"></div>
      </div>
    </div>
  );
}

export default Page;
