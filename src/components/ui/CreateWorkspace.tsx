"use client";

import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Kbd } from "@nextui-org/kbd";
import { FiPlus } from "react-icons/fi";
import Checkboxs from "../common/Checkbox";

function CreateWorkspace() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button onClick={openModal} className="flex items-center justify-between mt-3 w-full hover:bg-gray-100 py-1.5 px-2 rounded-lg hover:cursor-pointer">
        <div className="flex items-center gap-2">
          <FiPlus className="text-gray-500" />
          <p className="text-[14px] text-gray-500">Add New Project</p>
        </div>
        <Kbd keys={["command"]}>K</Kbd>
      </button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create workspace <p className="text-gray-500 text-sm font-normal">Manage your workspace now!</p>
            </ModalHeader>
            <ModalBody>
              <div className="w-full">
                <label>Workspace name</label>
                <input type="text" className="mt-2 w-full border border-gray-300 bg-gray-100 shadow rounded-md px-3 py-1 focus:outline-[#4B4EE7]" placeholder="*" />
              </div>
              <div className="pt-3">
                <Checkboxs />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={closeModal}>
                Close
              </Button>
              <Button className="bg-blue-500 text-white" onClick={closeModal}>
                Create
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateWorkspace;
