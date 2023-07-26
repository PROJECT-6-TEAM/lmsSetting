import { useState } from "react";
import Layout from "./common/Layout";
import Image from "next/image";
import { ModalSubmitButton } from "./common/ModalSubmitButton";
import useClassroomModal from "@/hooks/useClassroomModal";

const MakeModal: React.FC = ({}) => {
  const isSelectModal = (modal: string) => {
    setSelectedModal(modal);
  };
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const { handleModalMove } = useClassroomModal();

  const onNextButtonClick = () => {
    if (selectedModal === "note") {
      // 노트 모달 선택 시 처리할 로직
      handleModalMove("noteModalOpen", "lectureTypeModalOpen");
    } else if (selectedModal === "video") {
      // 영상 모달 선택 시 처리할 로직
      handleModalMove("videoFileModalOpen", "lectureTypeModalOpen");
    } else if (selectedModal === "link") {
      handleModalMove("linkModalOpen", "lectureTypeModalOpen");
    }
  };

  return (
    <Layout>
      <div>
        <button className="text-xl font-bold text-grayscale-100">
          강의 만들기
        </button>
        <span className="relative text-xl font-bold text-grayscale-100 pl-[17px] before:absolute before:top-[9px] before:left-0 before:w-[7px] before:h-[11px] before:bg-[url('/images/right-arrow.svg')]">
          링크 만들기
        </span>
        <div className="flex justify-between items-center mt-[26px] gap-[19.6px]  cursor-pointer">
          <div
            id="note"
            className={`flex flex-col items-center justify-center border-2 border-inherit rounded-md w-[222px] h-[153px] text-[18px] ${
              selectedModal === "note" ? "bg-gray-100 border-blue-300" : ""
            }`}
            onClick={() => isSelectModal("note")}
          >
            <Image
              src="/note.svg"
              alt="note"
              width={60}
              height={60}
              className="pb-[12px]"
            />
            노트 만들기
          </div>
          <div
            id="video"
            className={`flex flex-col items-center justify-center border-2 border-inherit rounded-md w-[222px] h-[153px] text-[18px] ${
              selectedModal === "video" ? "bg-gray-100 border-blue-300" : ""
            }`}
            onClick={() => isSelectModal("video")}
          >
            <Image
              src="/video.svg"
              alt="video"
              width={60}
              height={60}
              className="pb-[12px]"
            />
            영상 강의 만들기
          </div>
          <div
            id="link"
            className={`flex flex-col items-center justify-center border-2 border-inherit rounded-md w-[222px] h-[153px] text-[18px] ${
              selectedModal === "link" ? "bg-gray-100 border-blue-300" : ""
            }`}
            onClick={() => isSelectModal("link")}
          >
            <Image
              src="/link.svg"
              alt="link"
              width={60}
              height={60}
              className="pb-[12px]"
            />
            링크 만들기
          </div>
        </div>
        <button
          onClick={onNextButtonClick}
          className="rounded-md ml-[599px] mt-[26px] text-white bg-blue-500 w-[107px] h-[45px] "
        >
          다음
        </button>
        {/* <ModalSubmitButton
          handleCloseModal={
            (onclick = () => {
              onNextButtonClick();
            })
          }
          contents="다음"
        /> */}
      </div>
    </Layout>
  );
};

export default MakeModal;
