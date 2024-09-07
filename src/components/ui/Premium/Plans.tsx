"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { BsStars } from "react-icons/bs";

function Plans() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="w-full h-full flex items-end px-7" onClick={openModal}>
        <div className="gap-2 flex items-center justify-start text-blue-500 py-1.5 w-full transition-all hover:bg-gray-100 rounded-lg cursor-pointer pl-2">
          <BsStars /> See Plans
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="5xl">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              <h1 className="text-3xl">Select Plans</h1>
              <p className="text-sm text-gray-400 font-normal ml-16 mr-16">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, a iure necessitatibus et ipsum vitae, maxime eos facere,
                est perferendis optio cum vero dignissimos eligendi distinctio
                labore architecto commodi veniam.
              </p>
            </ModalHeader>
            <ModalBody className="mb-4">
              <div className="flex justify-center space-x-8">
                <div className="bg-white shadow-md border border-gray-300 rounded-lg p-6 w-64 text-center flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                      Personal
                    </h3>
                    <p className="text-xl font-bold text-blue-500">Free</p>
                    <p className="text-gray-500 mb-4">
                      For people hosting small, ad hoc social gatherings.
                    </p>
                    <ul className="text-left mb-4">
                      <li>✔️ Up to 10 participants at once</li>
                      <li>✔️ Unlimited events</li>
                      <li>✔️ Unlimited organizers</li>
                      <li>✔️ Standard and advanced matching</li>
                    </ul>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-5 rounded-lg mt-auto">
                    Get Started for Free
                  </button>
                </div>
                <div className="bg-blue-500 text-white shadow-md rounded-lg p-6 w-64 text-center flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                    <p className="text-xl font-bold">$5</p>
                    <p className="mb-4">
                      per participant, per month. For Company
                    </p>
                    <ul className="text-left mb-4">
                      <li>✔️ Everything in Personal</li>
                      <li>✔️ Up to 200 participants at once</li>
                      <li>✔️ Unlimited events</li>
                      <li>✔️ Event data exports</li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-blue-500 py-2 rounded-lg mt-auto">
                    Get Started with
                    <br /> Premium
                  </button>
                </div>
                <div className="bg-gray-800 text-white shadow-md rounded-lg p-6 w-64 text-center flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Business</h3>
                    <p className="text-xl font-bold">$15</p>
                    <p className="mb-4">
                      per participant, per month. For enterprises
                    </p>
                    <ul className="text-left mb-4">
                      <li>✔️ Everything in Premium</li>
                      <li>✔️ Up to 500 participants at once</li>
                      <li>✔️ Dedicated support</li>
                      <li>✔️ Custom reporting and analytics</li>
                      <li>✔️ Enterprise-level security</li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-gray-800 py-2 rounded-lg mt-auto">
                    Get Started with
                    <br /> Business
                  </button>
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="justify-center">
              <button
                className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-500"
                onClick={closeModal}
              >
                Close
              </button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Plans;
