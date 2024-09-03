import Onboarding from "@/components/ui/Onboarding";
import Tabs from "@/containers/Tabs";

export default async function PrivatePage() {
  return (
    <div className="w-full h-screen py-12">
      <Onboarding />
      <Tabs />
    </div>
  );
}
