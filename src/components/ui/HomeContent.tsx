import React from "react";

import CompleteProfile from "./CompleteProfile";
import RecentlyVisited from "./RecentlyVisited";

import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import MyWorkspaces from "./MyWorkspaces";

function HomeContent() {
  return (
    <div className="flex h-full w-full bg-white rounded-xl">
      <div className="flex flex-col mx-8 mt-8 w-full">
        <div>
          <div>
            <h2 className="text-gray-700 text-xl font-medium">Good afternoon, Berke!</h2>
          </div>
          <div>
            <p className="pt-1 text-sm text-gray-500">Quickly access your recent boards, Inbox and workspaces</p>
          </div>
        </div>

        <CompleteProfile />

        <div className="mt-8">
          <div>
            <h2 className="text-md font-medium flex items-center gap-1">
              {" "}
              <RiArrowDownSLine className="text-2xl" />
              Recently Visited
            </h2>
          </div>
          <div className="pt-4 flex items-center gap-4">
            <RecentlyVisited />
          </div>
        </div>

        <div className="mt-8">
          <div>
            <h2 className="text-md font-medium flex items-center gap-1">
              <RiArrowDownSLine className="text-2xl" />
              My workspaces
            </h2>
          </div>
          <div className="pt-4 flex items-center gap-4">
            <MyWorkspaces />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
