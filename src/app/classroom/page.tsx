"use client";
import { useState } from "react";

const Contents: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const handleBtn = () => {
    setIsModal(!isModal);
  };

  return (
    <div>
      <button
        type="button"
        className="w-44 h-16 border border-solid border-black p-3 m-7 box-border active:border-2 active:bg-slate-300"
        onClick={handleBtn}
      >
        영상강의 만들기
      </button>

      {/* 버튼 클릭시 해당하는 모달창을 띄워서 확인하시면 됩니다 */}
      {/* 예시 */}
      {/* {isModal && <AddContents handleBtn={handleBtn} />} */}
    </div>
  );
};

export default Contents;
