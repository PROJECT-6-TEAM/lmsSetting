"use client";

import React, { FC } from "react";

import LectureHeader from "@/components/lecture/LectureHeader";
import TypeOfLecture from "@/components/lecture/typesOf/TypeOfLecture";
import LectureComment from "@/components/lecture/LectureComment";
import LectureFooter from "@/components/lecture/LectureNavigation";

const LectureHome: FC = () => {
  return (
    <main className="lectuerContainer flex flex-col w-full h-full">
      <LectureHeader />
      <div className="mainContainer flex w-full h-screen">
        <div className="Container flex flex-col w-3/4">
          <TypeOfLecture type="link" content="3vhA8njtoQg" />
          <LectureFooter />
        </div>
        <LectureComment />
      </div>
    </main>
  );
};

export default LectureHome;
