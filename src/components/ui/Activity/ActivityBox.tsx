import Image from "next/image";
import React from "react";

import LumiLogo from "../../../../public/logo_vanilla.svg";

function ActivityBox() {
  const activityDemo = [
    {
      from: "Lumi",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia molestiae velit magnam delectus consectetur beatae",
      image: "",
      date: "20.11.2024",
    },
    {
      from: "Lumi",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia molestiae velit magnam delectus consectetur beatae",
      image: "",
      date: "24.11.2024",
    },
    {
      from: "Lumi",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia molestiae velit magnam delectus consectetur beatae",
      image: "",
      date: "25.11.2024",
    },
  ];

  return (
    <div className="flex w-full h-full mt-4 flex-col">
      {activityDemo && activityDemo.length > 0
        ? activityDemo.map((item, index) => (
            <div key={index} className="w-full flex flex-col">
              <div className="flex flex-col bg-gray-100 h-[5rem] mt-4 rounded-xl w-full">
                <div className="flex items-center h-full w-full pl-6">
                  <div className="border-2 border-gray-300 rounded-full">
                    <Image src={LumiLogo} width={35} height={35} alt="lumilogo" />
                  </div>
                  <div className="flex flex-col pl-4">
                    <div className="flex gap-2">
                      <span className="font-medium text-md">{item.from}</span> <p className="text-gray-600">{item.date}</p>
                    </div>
                    <div className="text-[14px] text-gray-500">{item.message}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default ActivityBox;
