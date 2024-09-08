import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { BsThreeDots } from "react-icons/bs";

export default function Dropdowns() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <p className="opacity-0 group-hover:opacity-100 mr-4">
          <BsThreeDots className="text-gray-500" />
        </p>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit">Rename</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
