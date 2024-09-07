import React from "react";
import ActivityBox from "./ActivityBox";

function ActivityContent() {
  return (
    <div className="flex h-full w-full bg-white rounded-xl">
      <div className="flex flex-col mx-8 mt-8 w-full">
        <div className="w-full">
          <h2 className="font-medium text-2xl">Activity</h2>
          <p className="text-gray-500 text-[14px] pt-1">Your notifications...</p>
        </div>
        <div className="w-full">
          <ActivityBox />
        </div>
      </div>
    </div>
  );
}

export default ActivityContent;
