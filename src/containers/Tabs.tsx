"use client";

import Activity from "@/components/ui/Activity";
import { useSearchParams } from "next/navigation";
import React from "react";

function Tabs() {
  const searchParams = useSearchParams();
  const params = searchParams.get("page");
  return (
    <div className="w-full h-full pr-12">
      {params?.toString() === "home" ? <div>home content</div> : null}
      {params?.toString() === "activity" ? <Activity /> : null}
      {params?.toString() === "schedule" ? <div>schedule content</div> : null}
    </div>
  );
}

export default Tabs;
