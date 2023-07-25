import { useSelector, useDispatch } from "react-redux";
import { setInputContent } from "@/redux/contentSlice";
import { setInputTitle } from "@/redux/titleSlice";
import Layout from "./common/Layout";
import Image from "next/image";
import ModalTitle from "./common/ModalTitle";
import { ModalSubmitButton } from "./common/ModalSubmitButton";

interface ModalProps {
  modalTitle: string[];
  handleLinkModalBtn: () => void;
  handleDurationModalBtn: () => void;
  handleMakeModalBtn: () => void;
  handleCloseModal: () => void;
}

const LinkModal: React.FC<ModalProps> = ({
  handleLinkModalBtn,
  handleDurationModalBtn,
  handleMakeModalBtn,
}) => {
  const inputTitle = useSelector((state: any) => state.title.inputTitle);
  const inputContent = useSelector((state: any) => state.content.inputContent);
  const dispatch = useDispatch();

  const onDurationModalOpen = () => {
    dispatch(setInputTitle(inputTitle));
    dispatch(setInputContent(inputContent));
    handleLinkModalBtn();
    handleDurationModalBtn();
  };
  const onLinkModalClose = () => {
    handleLinkModalBtn();
    handleMakeModalBtn();
  };
  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputTitle(e.target.value));
  };
  const handleInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(
      setInputContent(value.startsWith("http://") ? value : "http://" + value),
    );
  };
  const modalTitle: string[] = ["강의 만들기", "링크 만들기"];
  return (
    <Layout handleBtn={onLinkModalClose}>
      <div className="text-left">
        <ModalTitle modalTitle={modalTitle} />
        <div className="flex items-center py-[20px]">
          <input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요.(선택)"
            className="justify-left text-[20px]"
            value={inputTitle}
            onChange={handleInputTitle}
          />
        </div>
        <input
          type="text"
          name="link"
          placeholder="http://..."
          className="justify-center text-[16px] w-[707px] h-[42px] flex-shrink-0 border-[1px] border-gray-300 bg-white rounded-md pl-[14px]"
          value={inputContent}
          onChange={handleInputContent}
        />
        <button
          onClick={onDurationModalOpen}
          className="rounded-md py-[15.5] px-[18.3] ml-[599px] mt-[20px] text-white bg-blue-500 w-[107px] h-[45px] "
        >
          다음
        </button>
        {/* <ModalSubmitButton
          handleCloseModal={onDurationModalOpen}
          contents="다음"
        /> */}
      </div>
    </Layout>
  );
};

export default LinkModal;
