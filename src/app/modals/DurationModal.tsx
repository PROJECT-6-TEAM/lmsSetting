"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import LinkModal from "./LinkModal";
import { ko } from "date-fns/esm/locale";

interface DurationModalProps {
  onClose: () => void;
}

export default function DurationModal({ onClose }: DurationModalProps) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openLinkModal, setOpenLinkModal] = useState(false);

  const onModalLinkOpen = () => {
    setOpenLinkModal(true);
  };
  const onModalLinkClose = () => {
    setOpenLinkModal(false);
  };
  const handleClose = () => {
    onClose();
    onModalLinkOpen();
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center text-center">
      <div className="bg-white rounded w-10/12 md:w-1/3 p-5">
        <div>
          <div className="flex justify-end">
            <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
          </div>
          <div className="text-left">
            <h3>교육과정 &gt; 기간 설정</h3>
            <div className="flex">
              <DatePicker
                showIcon
                locale={ko}
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="w-3/4"
              />
              ~
              <DatePicker
                showIcon
                locale={ko}
                dateFormat="yyyy.MM.dd"
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                className="w-3/4"
              />
            </div>
          </div>
          <button className="rounded-md mt-3 p-2 text-white bg-blue-500 align-right">
            업로드
          </button>
        </div>
      </div>
      {openLinkModal && <LinkModal onClose={onModalLinkClose} />}
    </div>
  );
}
