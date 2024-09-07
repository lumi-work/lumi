"use client";

import React, { useEffect, useState } from "react";

import CreateWorkspace from "@/components/ui/Workspace/CreateWorkspace";
import { MdOutlineFolderCopy } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkspaces } from "@/lib/features/workspacesSlice";
import { AppDispatch } from "@/lib/store";

import Skeletons from "@/components/common/Skeleton";

function SidebarProjects() {
  const [error, setError] = useState();
  const state = useSelector((item: any) => item.workspaces);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchWorkspaces());
    setError(state.error);
  }, []);

  console.log(state);

  return (
    <div className="mt-4">
      <div>
        <h2 className="text-gray-500 text-sm font-medium">Projects</h2>
      </div>

      {error != null ? <div className="text-red-500 text-[15px] pt-4">error</div> : null}

      {state.loading === true ? (
        <div className="flex items-center">
          <Skeletons />
        </div>
      ) : null}
      <div className="pt-4">
        {state.data && state.data.length > 0
          ? state.data.map((item: any, index: any) => (
              <div key={index} className="flex items-center gap-3">
                <p className="text-[15px] text-gray-700 flex items-center gap-2 hover:bg-gray-100 py-1 w-full rounded-lg hover:cursor-pointer">
                  <MdOutlineFolderCopy className="text-lg ml-2" />
                  {item.name}
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
