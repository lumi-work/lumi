import Onboarding from "@/components/ui/Onboarding/Onboarding";
import Tabs from "@/components/layout/Tabs";

export default async function PrivatePage() {
  return (
    <div className="w-full h-screen py-12">
      <Onboarding />
      <Tabs />
    </div>
  );
}
