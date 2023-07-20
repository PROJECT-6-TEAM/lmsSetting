"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DurationModal from "./DurationModal";
import { useSelector } from "react-redux";
import { setInputContent } from "@/redux/contentSlice";
import { useDispatch } from "react-redux";

interface LinkModalProps {
  onClose: () => void;
}

export default function LinkModal({ onClose }: LinkModalProps) {
  const [openDurationModal, setOpenDurationModal] = useState(false);
  const inputValue = useSelector((state: any) => state.title);
  const [inputContent, setInputContentLocal] = useState("");
  const dispatch = useDispatch();

  const onDurationModalOpen = () => {
    dispatch(setInputContent(inputContent));
    setOpenDurationModal(true);
  };
  const handleInputChange = (e: any) => {
    setInputContentLocal(e.target.value);
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center text-center">
      <div className="bg-white rounded w-10/12 md:w-1/3 p-5">
        <div>
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faXmark} onClick={onClose} />
          </div>
          <div className="text-left">
            <h3 text-left>교육과정 &gt; 링크 만들기</h3>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="제목을 입력해주세요.(선택)"
                  value={inputValue}
                  className="justify-left font-bold text-[12px] w-auto"
                />
              </div>
              <input
                type="text"
                name="link"
                placeholder="내용을 입력해주세요."
                className="justify-left text-[5px] w-auto border-2 border-inherit rounded-md p-1"
                value={inputContent}
                onChange={handleInputChange}
              />
            </form>
          </div>
          <button
            onClick={onDurationModalOpen}
            className="rounded-md mt-3 p-2 text-white bg-blue-500 align-right"
          >
            다음
          </button>
        </div>
      </div>
      {openDurationModal && <DurationModal onClose={onClose} />}
    </div>
  );
}
