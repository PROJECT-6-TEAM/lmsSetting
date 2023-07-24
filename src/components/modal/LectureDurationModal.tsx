import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Layout from "./Layout";
import { resetInputContent } from "@/redux/contentSlice";
import { resetInputTitle } from "@/redux/titleSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "@/components/modal/DurationStyle.module.css";

interface ModalProps {
  handleDurationModalBtn: (startDate: Date, endDate: Date) => void;
  handleLinkModalBtn: () => void;
}

const DurationModal: React.FC<ModalProps> = ({
  handleDurationModalBtn,
  handleLinkModalBtn,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();

  const onModalLinkOpen = () => {
    handleDurationModalBtn(startDate, endDate);
    handleLinkModalBtn();
  };

  const onDurationModalClose = () => {
    dispatch(resetInputTitle());
    dispatch(resetInputContent());
    handleDurationModalBtn(startDate, endDate);
  };

  return (
    <Layout handleBtn={onModalLinkOpen}>
      <div className="text-left gap-[26px]">
        <span className="flex text-[20px] font-semibold  top-[32px] left-[34px] gap-[10px]">
          강의 만들기
          <Image src="/next-mark.svg" alt="next" width={7} height={10} />
          링크 만들기
          <Image src="/next-mark.svg" alt="next" width={7} height={10} />
          세부 설정
        </span>
        <div className="flex items-center ">
          <div className="relative pt-[20px] pb-[29px]">
            <DatePicker
              locale={ko}
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 cursor-pointer"
              dateFormat="yyyy.MM.dd"
            />
          </div>
          <span className="mx-2 text-gray-500 leading-5">~</span>
          <div className="relative pt-[20px] pb-[29px]">
            <DatePicker
              locale={ko}
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              className="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 cursor-pointer"
              dateFormat="yyyy.MM.dd"
            />
          </div>
        </div>
        <div>
          <div className="flex gap-[10px] items-center">
            강의 공개
            <label className={styles.toggle}>
              <input type="checkbox" className="hidden" />
              <div className={styles.slider}></div>
              <div className={styles.sliderBefore}></div>
            </label>
            <button
              onClick={() => {
                onDurationModalClose();
              }}
              className="rounded-md text-white bg-blue-500 w-[107px] h-[45px] ml-auto"
            >
              업로드
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DurationModal;
