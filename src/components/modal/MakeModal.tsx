import { useState } from "react";
import Layout from "./Layout";
import Image from "next/image";

interface ModalProps {
  handleMakeModalBtn: () => void;
  handleLinkModalBtn: () => void;
}

const MakeModal: React.FC<ModalProps> = ({
  handleMakeModalBtn,
  handleLinkModalBtn,
}) => {
  const onLinkModalOpen = () => {
    handleMakeModalBtn();
    handleLinkModalBtn();
  };
  const isSelectModal = (modal: string) => {
    setSelectedModal(modal);
  };
  const [selectedModal, setSelectedModal] = useState<string | null>(null);

  const onNextButtonClick = () => {
    if (selectedModal === "note") {
      // 노트 모달 선택 시 처리할 로직
    } else if (selectedModal === "video") {
      // 영상 모달 선택 시 처리할 로직
    } else if (selectedModal === "link") {
      onLinkModalOpen();
    }
  };
  return (
    <Layout handleBtn={handleMakeModalBtn}>
      <div>
        <span className="flex text-[20px] font-semibold top-[40px] left-[34px]">
          강의 만들기
        </span>
        <div className="flex justify-between items-center mt-[26px] gap-[19.6px]">
          <div
            id="note"
            className={`flex flex-col items-center justify-center border-2 border-inherit rounded-md w-[222px] h-[153px] text-[18px] ${
              selectedModal === "note" ? "bg-gray-100 border-blue-500" : ""
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
              selectedModal === "video" ? "bg-gray-100 border-blue-500" : ""
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
              selectedModal === "link" ? "bg-gray-100 border-blue-500" : ""
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
      </div>
    </Layout>
  );
};

export default MakeModal;
