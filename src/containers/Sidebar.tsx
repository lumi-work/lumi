import Image from "next/image";
import React from "react";

import Input from "@/components/common/Input";
import UserProfile from "@/components/ui/UserProfile";
import SidebarItems from "@/components/sidebar/items";

import LumiLogo from "../../public/logo.svg";
import SidebarProjects from "@/components/sidebar/projects";
import Settings from "@/components/ui/Settings";

function Sidebar({ user }: any) {
  const index = user.indexOf("@");
  const username = user.slice(0, index);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-12">
      <div className="bg-white flex flex-col rounded-xl w-[320px] h-full">
        <div>
          <div className="flex items-center justify-center mt-8">
            <Image src={LumiLogo} width={90} height={90} alt="lumilogo" />
          </div>
          <div className="px-8 pt-8">
            <div>
              <Input />
            </div>
            <div>
              <SidebarItems />
            </div>
            <div>
              <SidebarProjects />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-end p-4">
          <div className="h-[4rem] flex items-center justify-between w-full px-4 pt-3 border-t border-gray-200">
            <UserProfile username={username} useremail={user} />
            <Settings username={username} useremail={user} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
