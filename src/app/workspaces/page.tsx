import { redirect } from "next/navigation";

import { createClient } from "@/utils/server";
import Onboarding from "@/components/Onboarding";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-in");
  }

  return (
    <>
      <div>
        Hello {data.user.email}
        <Onboarding />
      </div>
    </>
  );
}
