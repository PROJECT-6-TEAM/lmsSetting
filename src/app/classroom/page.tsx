"use client";
import MakeModal from "@/components/modal/MakeLectureModal";
import LinkModal from "@/components/modal/AddLinkModal";
import DurationModal from "@/components/modal/LectureDurationModal";
import { useState } from "react";

const Contents: React.FC = () => {
  /*  const [isModal, setIsModal] = useState<boolean>(false); */
  const [isMakeModalOpen, setIsMakeModalOpen] = useState<boolean>(false);
  const [isLinkModalOpen, setIsLinkModalOpen] = useState<boolean>(false);
  const [isDurationModalOpen, setIsDurationModalOpen] =
    useState<boolean>(false);
  /* 
  const handleBtn = () => {
    setIsModal(!isModal);
  }; */
  const handleMakeModalBtn = () => {
    setIsMakeModalOpen(!isMakeModalOpen);
  };
  const handleLinkModalBtn = () => {
    setIsLinkModalOpen(!isLinkModalOpen);
  };
  const handleDurationModalBtn = () => {
    setIsDurationModalOpen(!isDurationModalOpen);
  };

  return (
    <div>
      <button
        type="button"
        className="w-44 h-16 border border-solid border-black p-3 m-7 box-border active:border-2 active:bg-slate-300"
        onClick={handleMakeModalBtn}
      >
        영상강의 만들기
      </button>

      {/* 버튼 클릭시 해당하는 모달창을 띄워서 확인하시면 됩니다 */}
      {/* 예시 */}
      {/* {isModal && <MakeModal handleBtn={handleBtn} />} */}
      {isMakeModalOpen && (
        <MakeModal
          handleMakeModalBtn={handleMakeModalBtn}
          handleLinkModalBtn={handleLinkModalBtn}
        />
      )}

      {isLinkModalOpen && (
        <LinkModal
          handleMakeModalBtn={handleMakeModalBtn}
          handleLinkModalBtn={handleLinkModalBtn}
          handleDurationModalBtn={handleDurationModalBtn}
        />
      )}

      {isDurationModalOpen && (
        <DurationModal
          handleLinkModalBtn={handleLinkModalBtn}
          handleDurationModalBtn={handleDurationModalBtn}
        />
      )}
    </div>
  );
};

export default Contents;
