"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { BsStars } from "react-icons/bs";

function Plans() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="w-full h-full flex items-end px-7">
        <div onClick={openModal} className="gap-2 flex items-center justify-start text-blue-500 py-1.5 w-full transition-all hover:bg-gray-100 rounded-lg cursor-pointer pl-2">
          <BsStars /> See Plans
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="5xl">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 text-center mt-8">
              <h1 className="text-3xl">Select Plans</h1>
              <p className="text-[15px] text-gray-400 font-normal mx-48">
                Choose the plan that fits your needs and start your journey today. Enjoy flexibility, great features, and support tailored to help you succeed.
              </p>
            </ModalHeader>
            <ModalBody className="mb-4">
              <div className="flex justify-center space-x-8">
                <div className="bg-white shadow-md border border-gray-300 rounded-lg p-8 w-72 my-12 py-16 text-center flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-700">Personal</h3>
                    <p className="text-xl font-bold text-blue-500 mb-4">Free</p>
                    <p className="text-gray-500 mb-4">Ideal for managing tasks and projects with ease.</p>
                    <ul className="text-left mb-4">
                      <li>✔️ Create unlimited boards and tasks</li>
                      <li>✔️ Collaborate with your team</li>
                      <li>✔️ Task prioritization and tracking</li>
                      <li>✔️ Real-time updates and notifications</li>
                    </ul>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-auto hover:opacity-80">Start Using for Free</button>
                </div>

                <div className="bg-blue-500 text-white shadow-md rounded-lg w-72 p-8 my-12 py-16 text-center flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                    <p className="text-xl font-bold mb-4">$5</p>
                    <p className="mb-4">per user, per month. Ideal for businesses and teams.</p>
                    <ul className="text-left mb-4">
                      <li>✔️ Everything in Free Plan</li>
                      <li>✔️ Manage up to 200 tasks at once</li>
                      <li>✔️ Priority support and advanced features</li>
                      <li>✔️ Task and project data exports</li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-blue-500 py-3 rounded-lg mt-auto font-medium hover:opacity-80">Started with Premium</button>
                </div>

                <div className="bg-gray-800 text-white shadow-md rounded-lg p-8 w-72 my-12 py-16 text-center flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Business</h3>
                    <p className="text-xl font-bold mb-4">$15</p>
                    <p className="mb-4">per user, per month. Best for large enterprises.</p>
                    <ul className="text-left mb-4">
                      <li>✔️ Everything in Premium Plan</li>
                      <li>✔️ Manage up to 500 tasks at once</li>
                      <li>✔️ Advanced reporting and custom analytics</li>
                      <li>✔️ Enterprise-level security and compliance</li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-gray-800 py-3 rounded-lg mt-auto font-medium hover:opacity-80">Started with Business</button>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Plans;
