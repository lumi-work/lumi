"use client";

import React, { useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { Kbd } from "@nextui-org/kbd";
import { FiPlus } from "react-icons/fi";
import Checkboxs from "@/components/common/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { userData } from "@/lib/features/usersSlice";
import { createClient } from "@/utils/client";
import Spin from "@/components/common/Spinner";
import { fetchWorkspaces } from "@/lib/features/workspacesSlice";

function CreateWorkspace() {
  const [isOpen, setIsOpen] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("");
  const [isDefaultColumnSelected, setIsDefaultColumnSelected] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const supabase = createClient();

  const openModal = () => {
    setIsOpen(true);
    setWorkspaceName("");
    setError("");
  };

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

  useEffect(() => {
    dispatch(userData());
  }, [dispatch]);

  const state = useSelector((item: any) => item.user);
  const workspaceState = useSelector((item: any) => item.workspaces);

  async function handleCreateWorkspace() {
    if (workspaceName.trim() === "") {
      setError("You cannot leave the workspace name empty.");
      return;
    }

    if (state.error !== null || state.loading === true || loading) {
      return;
    }

    if (workspaceState.data.length === 2) {
      setError("You cannot create workspace more 2.");
      return;
    }

    setLoading(true);

    const date = new Date();
    const request = {
      id: Math.floor(Math.random() * 10000),
      userId: state.userId,
      workspaceId: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
      name: workspaceName,
      isSelected: isDefaultColumnSelected,
      created_at: date,
    };

    const columns = ["To Do", "In Progress", "Done"];

    const columnRequest = columns.map((item: any) => ({
      id: Date.now().toString() + Math.floor(Math.random() * 1000).toString(),
      workspaceId: request.workspaceId,
      itemId: null,
      title: item,
    }));

    const { error: columnError } = await supabase.from("column").insert(columnRequest);
    const { error } = await supabase.from("workspaces").insert(request);

    if (error || columnError) {
      setError("An error occurred while creating the workspace.");
      setLoading(false);
      return;
    }

    dispatch(fetchWorkspaces());
    closeModal();
    setError("");
    setLoading(false);
  }

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
                <input
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  maxLength={15}
                  type="text"
                  className="mt-2 w-full border border-gray-300 bg-gray-100 shadow rounded-md px-3 py-1 focus:outline-[#4B4EE7]"
                />
              </div>
              <div className="pt-3">
                <Checkboxs value={isDefaultColumnSelected} onChange={setIsDefaultColumnSelected} />
              </div>
              {error && <div className="text-red-500 text-[15px]">{error}</div>}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={closeModal}>
                Close
              </Button>
              <Button className="bg-blue-500 text-white" onClick={handleCreateWorkspace} disabled={loading}>
                {loading ? <Spin /> : "Create"}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateWorkspace;
