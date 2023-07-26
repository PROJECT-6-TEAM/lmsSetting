"use client";

import React, { FC } from "react";

import LectureHeader from "@/components/lecture/LectureHeader";
import TypeOfLecture from "@/components/lecture/typesOf/TypeOfLecture";
import LectureComment from "@/components/lecture/LectureComment";
import LectureFooter from "@/components/lecture/LectureNavigation";
import { useFetchLectureList } from "@/hooks/reactQuery/useFetchLecture";

const LectureHome: FC = () => {
  const { data, isLoading, error } = useFetchLectureList('MCnZE6LP0CmST4hmaHkO');
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <main className="lectuerContainer flex flex-col w-full h-full">
      <LectureHeader title={data?.title} startDate={data?.startDate} endDate={data?.endDate} />
      <div className="mainContainer flex w-full h-screen">
        <div className="Container flex flex-col w-3/4">
          {data && <TypeOfLecture type={data.lectureType} content={data.videoLink} />}
          <LectureFooter />
        </div>
        <LectureComment />
      </div>
    </main>
  );
};

export default LectureHome;
