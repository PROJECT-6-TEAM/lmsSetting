interface ModalSubmitButtonProps {
  handleCloseModal: () => void;
  contents: string;
}

export const ModalSubmitButton: React.FC<ModalSubmitButtonProps> = ({
  handleCloseModal,
  contents,
}) => {
  const handleModalMove = () => {
    // 이 위치에 다음 모달로 넘기는 코드 추가 예정
  };

  return (
    <div className="flex mb-[-20px]">
      <button
        type="button"
        className="w-[107px] h-[45px] font-bold text-base bg-primary-80 text-white rounded-[10px] ml-auto"
        onClick={handleModalMove}
      >
        {contents}
      </button>
    </div>
  );
};
