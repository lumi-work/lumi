import Onboarding from "@/components/ui/Onboarding/Onboarding";
import Tabs from "@/components/layout/Tabs";
import ProjectsTabs from "@/components/projects/ProjectsTabs";

export default async function PrivatePage() {
  return (
    <div className="w-full h-screen py-12">
      <Onboarding />
      <div className="w-full h-full pr-12">
        <Tabs />
        <ProjectsTabs />
      </div>
    </div>
  );
}
