"use client";

import React, { FC } from "react";

import LectureHeader from "@/components/lecture/LectureHeader";
import TypeOfLecture from "@/components/lecture/typesOf/TypeOfLecture";
import LectureComment from "@/components/lecture/LectureComment";
import LectureFooter from "@/components/lecture/LectureNavigation";
import { useFetchLectureList } from "@/hooks/reactQuery/useFetchLecture";

const LectureHome: FC = () => {
  const { data, loading, error } = useFetchLecture();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="lectuerContainer flex flex-col w-full h-full">
      <LectureHeader
        title={data?.title}
        startDate={data?.startDate}
        endDate={data?.endDate}
      />
      <div className="mainContainer flex w-full h-screen">
        <div className="Container flex flex-col w-3/4">
          {data && (
            <TypeOfLecture type={data.lectureType} content={data.videoLink} />
          )}
          <LectureFooter />
        </div>
        <LectureComment />
      </div>
    </main>
  );
};

export default LectureHome;
