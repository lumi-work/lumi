import React from "react";

function UserProfile({ username, useremail }: any) {
  return (
    <div>
      <div className="flex gap-2 items-center justify-center">
        <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center text-[15px]">{username.slice(0, 2).toUpperCase()}</div>
        <div className="flex-col">
          <div className="text-[15px]">@{username}</div>
          <div className="text-gray-500 text-[13px]">{useremail}</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
