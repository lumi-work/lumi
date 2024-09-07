import React from "react";
import Image from "next/image";
import grid1 from "../../../public/grid1.png";
import grid2 from "../../../public/grid2.png";
import grid3 from "../../../public/grid3.png";

function Grid() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 gap-4">
      <div className="w-full bg-[#F3F2F5] h-[400px] mt-64 rounded-3xl shadow-md flex border-gray-200 border-2">
        <div className="flex flex-col">
          <h1 className="text-black  text-3xl font-semibold ml-20 mt-10">
            Fast & delightful <br />
            user experience
          </h1>
          <p className="ml-20 text-gray-500 mt-5 text-xl">
            Lumi helps you to manage your tasks and achieve your
            <br /> goals in intuitive and delightful way. We wanted
            <br /> to build an app you will enjoy using every day.
          </p>
        </div>
        <Image src={grid1} width={480} height={250} alt="grid1" className="ml-10 rounded-lg" />
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="bg-[#F3F2F5] shadow-md rounded-3xl h-[400px] border-gray-200 border-2">
          <div className="flex flex-col">
            <h1 className="text-black text-3xl font-semibold ml-20 mt-10">Light, dark & black UI theme</h1>
            <p className="ml-20 text-gray-500 mt-5 text-xl">
              Lumi offers lot of customizations, <br />
              one of them allowing you to choose
              <br /> from light, dark and black UI theme.
            </p>
          </div>
          <div className="flex justify-center items-end">
            <Image src={grid2} width={250} height={100} alt="grid2" className="rounded-lg mt-5" />
          </div>
        </div>
        <div className="bg-[#F3F2F5] shadow-md h-[400px] rounded-3xl border-gray-200 border-2">
          <div className="flex flex-col">
            <h1 className="text-black  text-3xl font-semibold ml-20 mt-10">Details matter</h1>
            <p className="ml-20 text-gray-500 mt-5 text-xl">
              We want to bring satisfation to <br />
              every interaction.
            </p>
            <div className="flex justify-start ml-20 items-center mt-10">
              <Image src={grid3} width={350} height={100} alt="grid3" className="rounded-lg mt-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
