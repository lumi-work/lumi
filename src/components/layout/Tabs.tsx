"use client";

import ActivityContent from "@/components/ui/Activity/ActivityContent";
import HomeContent from "@/components/ui/Workspace/HomeContent";
import ScheduleContent from "@/components/ui/Schedule/ScheduleContent";

import { useSearchParams } from "next/navigation";
import React from "react";

function Tabs() {
  const searchParams = useSearchParams();
  const params = searchParams.get("page");
  return (
    <>
      {params?.toString() === "home" ? <HomeContent /> : null}
      {params?.toString() === "activity" ? <ActivityContent /> : null}
      {params?.toString() === "schedule" ? <ScheduleContent /> : null}
    </>
  );
}

export default Tabs;
