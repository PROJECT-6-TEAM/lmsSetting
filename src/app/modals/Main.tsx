"use client";
import React, { useState } from "react";
import MakeModal from "./MakeModal";

export default function Main() {
  const [openModal, setOpenModal] = useState(false);
  const onModalOpen = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {openModal && <MakeModal onOpenModal={onModalOpen} />}
      <button
        onClick={onModalOpen}
        className="rounded-md p-2 text-white bg-blue-500  className= w-auto align-middle"
      >
        강의 만들기
      </button>
    </div>
  );
}
