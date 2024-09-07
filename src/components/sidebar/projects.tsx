import React from "react";

import CreateWorkspace from "@/components/ui/CreateWorkspace";
import { MdOutlineFolderCopy } from "react-icons/md";

function SidebarProjects() {
  const projectsDemo = [
    {
      title: "Personal",
    },
    {
      title: "Business",
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
                <p className="text-[15px] text-gray-700 flex items-center gap-2 hover:bg-gray-100 py-1 w-full rounded-lg hover:cursor-pointer">
                  <MdOutlineFolderCopy className="text-lg ml-2" />
                  {item.title}
                </p>
              </div>
            ))
          : null}
        <CreateWorkspace />
      </div>
    </div>
  );
}

export default SidebarProjects;
