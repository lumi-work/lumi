import React from "react";
import { Kbd } from "@nextui-org/kbd";
import { AiOutlinePlusSquare } from "react-icons/ai";

function SidebarProjects() {
  const projectsDemo = [
    {
      title: "Personal",
      color: "bg-green-200",
      border: "border-green-600",
    },
    {
      title: "Business",
      color: "bg-yellow-200",
      border: "border-yellow-600",
    },
    {
      title: "Travel",
      color: "bg-pink-200",
      border: "border-pink-600",
    },
  ];

  return (
    <div className="mt-4">
      <div>
        <h2 className="text-gray-500 text-sm font-medium">Projects</h2>
      </div>

      <div className="pt-4">
        {projectsDemo && projectsDemo.length > 0
          ? projectsDemo.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-md border ${item.border} ${item.color}`}></div>
                <p className="text-[16px]">{item.title}</p>
              </div>
            ))
          : null}
        <div className="flex items-center justify-between mt-3 w-full">
          <div className="flex items-center gap-2">
            {/* <CiSquarePlus className="text-[22px] text-gray-500" /> */}
            <AiOutlinePlusSquare className="text-gray-500" />
            <p className="text-[14px] text-gray-500">Add New Project</p>
          </div>
          <Kbd keys={["command"]}>K</Kbd>
        </div>
      </div>
    </div>
  );
}

export default SidebarProjects;
