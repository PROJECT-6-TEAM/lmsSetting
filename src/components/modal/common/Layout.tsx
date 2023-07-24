import Image from "next/image";
import { ReactNode } from "react";

interface ModalProps {
  handleBtn: () => void;
  modalTitle: string[];
  children: ReactNode;
}

const Layout: React.FC<ModalProps> = ({ handleBtn, modalTitle, children }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/30 flex flex-col justify-center items-center"
      onClick={handleBtn}
    >
      <article
        className="relative w-[770px] shadow-2xl bg-white pt-10 px-8 pb-9 flex flex-col gap-5 box-border rounded-[10px]"
        onClick={e => e.stopPropagation()}
      >
        <p className="flex gap-[10px] text-xl font-bold text-grayscale-100">
          {modalTitle.map((val, idx) =>
            idx === 0 ? (
              <span key={idx}>{val}</span>
            ) : (
              <span
                key={idx}
                className="relative pl-[17px] before:absolute before:top-[9px] before:left-0 before:w-[7px] before:h-[11px] before:bg-[url('/images/right-arrow.svg')] before:bg-no-repeat"
              >
                {val}
              </span>
            ),
          )}
        </p>
        {children}
        <button type="button">
          <Image
            src="images/close.svg"
            alt="닫기 버튼"
            width={24}
            height={24}
            className="absolute top-10 right-8"
            onClick={handleBtn}
          />
        </button>
      </article>
    </div>
  );
};

export default Layout;
