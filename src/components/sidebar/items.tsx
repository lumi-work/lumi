"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { FaRegBell } from "react-icons/fa6";
import { LuBookMinus } from "react-icons/lu";
import { LuHome } from "react-icons/lu";

function SidebarItems() {
  const searchParams = useSearchParams();
  const router = useRouter();
  function handleRouting(item: any) {
    const params = new URLSearchParams(searchParams);
    params.set("page", item);

    const newUrl = `/workspaces?${params.toString()}`;
    router.push(newUrl);
  }

  return (
    <div className="mt-8 border-b pb-4">
      <div onClick={() => handleRouting("home")} className="flex items-center justify-between mt-1 hover:bg-gray-100 rounded-lg py-1.5 hover:cursor-pointer">
        <div className="flex items-center gap-2">
          <LuHome className="text-gray-500 text-lg ml-2" />
          <p className="text-md">Home</p>
        </div>
      </div>
      <div onClick={() => handleRouting("activity")} className="flex items-center justify-between mt-1 hover:bg-gray-100 rounded-lg py-1.5 hover:cursor-pointer">
        <div className="flex items-center gap-2">
          <FaRegBell className="text-gray-500 text-lg ml-2" />
          <p className="text-md">Activity</p>
        </div>
      </div>
      <div onClick={() => handleRouting("schedule")} className="flex items-center justify-between mt-1 hover:bg-gray-100 rounded-lg py-1.5 hover:cursor-pointer">
        <div className="flex items-center gap-2">
          <LuBookMinus className="text-gray-500 text-lg ml-2" />
          <p className="text-md">Schedule</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarItems;
