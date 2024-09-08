"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const params = searchParams.get("projects");

  const state = useSelector((state: any) => state.workspaces);

  const filteredItems = state.data.filter((item: any) => item.workspaceId.toString() === params?.toString());

  return (
    <>
      {filteredItems.length > 0
        ? filteredItems.map((item: any) => (
            <div key={item.workspaceId} className="flex h-full w-full bg-white rounded-xl">
              <div className="flex flex-col mx-8 mt-8 w-full">
                <div>{item.name}</div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}

export default ProjectsContent;
