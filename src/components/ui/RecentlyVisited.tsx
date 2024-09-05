import React from "react";

import workspacesPlaceHolder from "../../../public/workspaces_place_holder.svg";
import Image from "next/image";

function RecentlyVisited() {
  const workspacesDemo = [
    {
      id: 1,
      name: "Devlances",
    },
    {
      id: 2,
      name: "Duckie Works",
    },
  ];

  return workspacesDemo.length > 0 ? (
    workspacesDemo.map((item: any) => (
      <div key={item.id} className="w-[16rem] h-[11rem] border border-gray-200 rounded-md">
        <div className="flex flex-col items-start justfiy-center w-full h-full">
          <div className="w-full flex items-center justify-center">
            <Image src={workspacesPlaceHolder} className="pt-2" width={230} height={230} alt="workspaces_place_holder" />
          </div>
          <h2 className="font-medium text-gray-600 pt-3 px-4">{item.name}</h2>
        </div>
      </div>
    ))
  ) : (
    <div>No recently visited.</div>
  );
}

export default RecentlyVisited;
