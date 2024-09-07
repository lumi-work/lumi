"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { BsStars } from "react-icons/bs";

function Plans() {
  const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="w-full h-full flex items-end px-7" onClick={openModal}>
        <div className="gap-2 flex items-center justify-start text-blue-500 py-1.5 w-full transition-all hover:bg-gray-100 rounded-lg cursor-pointer pl-2">
          <BsStars /> See Plans
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="lg">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Premium</ModalHeader>
            <ModalBody></ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Plans;
