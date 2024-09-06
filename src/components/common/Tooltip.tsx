import React from "react";
import { Tooltip } from "@nextui-org/react";
import { RiInformation2Line } from "react-icons/ri";

export default function Tooltips({ content }: any) {
  return (
    <Tooltip showArrow={true} content={<span style={{ maxWidth: "200px", wordWrap: "break-word" }}>{content}</span>}>
      <button>
        <RiInformation2Line className="text-xl" />
      </button>
    </Tooltip>
  );
}
