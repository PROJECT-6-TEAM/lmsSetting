import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LectureHeaderProps {
  title: string | undefined;
  startDate?: Date;
  endDate?: Date;
}

const formatDate = (date: string) => {
  let [year, month, day] = date.split("-");
  day = day.split("T")[0];

  return `${year}.${month}.${day}`;
};

const LectureHeader: FC<LectureHeaderProps> = ({
  title,
  startDate,
  endDate,
}) => {
  let startDateStr = "";
  let endDateStr = "";
  if (startDate) {
    startDateStr = formatDate(startDate.toString());
  }
  if (endDate) {
    endDateStr = formatDate(endDate.toString());
  }

  return (
    <header className="flex border-b border-gray-200 w-full h-40">
      <div className="w-1/12 h-full flex justify-center items-center">
        <Link href="/classroom" className="w-full pr-12 pb-14">
          <Image
            src="/images/arrow-left.svg"
            alt="뒤로가기"
            width={16}
            height={16}
            className="cursor-pointer float-right"
          />
        </Link>
      </div>
      <div className="w-11/12 h-full flex flex-col justify-center">
        <div className="flex flex-col mb-1">
          <h1 className="text-xl font-semibold mb-1.5">{title}</h1>
          <span className="text-gray-700 text-xs">
            [수강기간] {startDateStr} ~ {endDateStr}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <div className="w-7 h-7 bg-white border border-gray-300 rounded-full flex-shrink-0"></div>
          <div className="flex items-center ml-2">
            <span className=" text-sm font-semibold text-blue-500 ">이름</span>
            <span className="text-sm ml-1 text-gray-500">&#183; 역할</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LectureHeader;
