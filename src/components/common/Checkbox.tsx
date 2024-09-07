import React from "react";
import { Checkbox } from "@nextui-org/react";
import Tooltips from "@/components/common/Tooltip";

export default function Checkboxs({ value, onChange }: any) {
  return (
    <Checkbox defaultSelected size="md" isSelected={value} onValueChange={onChange}>
      <p className="text-[15px] text-gray-600 flex items-center gap-2">
        Add default columns (recommended) <Tooltips content={"Selecting this option will automatically add default columns when you create a new workspace."} />
      </p>
    </Checkbox>
  );
}
