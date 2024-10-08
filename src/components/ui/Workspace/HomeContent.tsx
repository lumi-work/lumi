import React from "react";

import CompleteProfile from "@/components/ui/Profile/CompleteProfile";
import RecentlyVisited from "@/components/ui/Workspace/RecentlyVisited";
import MyWorkspaces from "@/components/ui/Workspace/MyWorkspaces";

function HomeContent() {
  return (
    <div className="flex h-full w-full bg-white rounded-xl">
      <div className="flex flex-col mx-8 mt-8 w-full">
        <div className="flex items-center justify-start w-full">
          <div>
            <h2 className="text-gray-700 text-xl font-medium">Good afternoon, Berke!</h2>
            <p className="pt-1 text-sm text-gray-500">Quickly access your recent boards, Inbox and workspaces</p>
          </div>
        </div>

        <CompleteProfile />

        <div className="mt-8">
          <RecentlyVisited />
        </div>

        <div className="mt-8">
          <MyWorkspaces />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
