"use client";

import React, { useState } from "react";
import Image from "next/image";

import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

import workspacesPlaceHolder from "../../../public/workspaces_place_holder.png";
import Tooltips from "../common/Tooltip";

function MyWorkspaces() {
  const workspacesDemo = [
    {
      id: 1,
      name: "Devlances",
    },
  ];

  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <div>
      <div>
        <h2 className="text-md font-medium flex items-center gap-2">
          {" "}
          {isOpen ? (
            <RiArrowDownSLine className="text-2xl hover:cursor-pointer" onClick={handleClose} />
          ) : (
            <RiArrowRightSLine className="text-2xl hover:cursor-pointer" onClick={handleClose} />
          )}
          My Workspaces
          <Tooltips content={"There are only 4 listed in the 'My Workspaces' section."} />
        </h2>
      </div>
      <div className="flex gap-6 items-center mt-4">
        {isOpen ? (
          workspacesDemo.length > 0 ? (
            workspacesDemo.slice(0, 4).map((item: any) => (
              <div key={item.id} className="w-[16rem] h-[11rem] border border-gray-200 rounded-md">
                <div className="flex flex-col items-start justify-center w-full h-full">
                  <div className="w-full flex items-center justify-center">
                    <Image src={workspacesPlaceHolder} width={220} height={220} alt="workspaces_place_holder" />
                  </div>
                  <h2 className="font-medium text-gray-800 text-[15px] pt-3 px-4">{item.name}</h2>
                </div>
              </div>
            ))
          ) : (
            <div>No recently visited.</div>
          )
        ) : null}
      </div>
    </div>
  );
}

export default MyWorkspaces;
