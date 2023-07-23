"use client";

import React, { FC } from "react";

import LectureHeader from "@/components/lecture/LectureHeader";
import LectureVideo from "@/components/lecture/LectureVideo";
import LectureComment from "@/components/lecture/LectureComment";
import LectureFooter from "@/components/lecture/LectureFooter";

const LectureHome: FC = () => {
  return (
    <div className="lectuerContainer flex flex-col w-full h-full">
      <LectureHeader />
      <div className="mainContainer flex w-full h-screen">
        <div className="Container flex flex-col w-3/4">
          <LectureVideo />
          <LectureFooter />
        </div>
        <LectureComment />
      </div>
    </div>
  );
};

export default LectureHome;
