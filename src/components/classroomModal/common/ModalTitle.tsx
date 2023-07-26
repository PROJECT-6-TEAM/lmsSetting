interface ModalTtileProps {
  modalTitle: string[];
}

const ModalTitle: React.FC<ModalTtileProps> = ({ modalTitle }) => {
  return (
    <p className="flex gap-[10px] text-xl font-bold text-grayscale-100">
      {modalTitle.map((val, idx) =>
        idx === 0 ? (
          <span key={idx}>{val}</span>
        ) : (
          <span
            key={idx}
            className="relative pl-[17px] before:absolute before:top-[9px] before:left-0 before:w-[7px] before:h-[11px] before:bg-[url('/images/right-arrow.svg')]"
          >
            {val}
          </span>
        ),
      )}
    </p>
  );
};

export default ModalTitle;
