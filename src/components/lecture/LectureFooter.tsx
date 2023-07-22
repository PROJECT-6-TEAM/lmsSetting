import Image from "next/image";

const LectureFooter = () => {
  return (
    <footer className="flex justify-between items-center p-10 h-1/6 text-gray-500">
      <div className="flex items-center ">
      <Image
          src="/backwardStep.svg"
          alt="이전강의"
          width={20}
          height={20}
          className="cursor-pointer m-2"
        />
        <h1 className="text-sm m-2 ">이전강의</h1>
      </div>
      <div className="flex items-center ">
        <Image
          src="/forwardStep.svg"
          alt="다음강의"
          width={20}
          height={20}
          className="cursor-pointer m-2"
        />
        <h1 className="text-sm m-2">다음강의</h1>
      </div>
    </footer>
  );
};

export default LectureFooter;
