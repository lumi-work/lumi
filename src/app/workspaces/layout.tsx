import Sidebar from "@/containers/Sidebar";
import "@/styles/globals.css";

import { createClient } from "@/utils/server";
import { redirect } from "next/navigation";

export default async function WorkspacesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex bg-gray-100 overflow-hidden">
      <div className="basis-[25%] max-w-[25%]">
        <Sidebar user={data?.user.email} />
      </div>
      <div className="basis-[75%] max-w-[75%]">{children}</div>
    </div>
  );
}
