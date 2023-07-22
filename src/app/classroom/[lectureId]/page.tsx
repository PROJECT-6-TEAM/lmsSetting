"use client";
import React, { FC, useState } from "react";

import LectureHeader from "@/components/lecture/LectureHeader";
import LectureVideo from "@/components/lecture/LectureVideo";
import LectureComment from "@/components/lecture/LectureComment";
import LectureFooter from "@/components/lecture/LectureFooter";

const Home: FC = () => {
  return (
    <div className="lectuerContainer flex flex-col w-full">
      <LectureHeader />
      <div className="mainContainer flex w-full">
        <div className="Container flex-col w-3/4">
          <LectureVideo />
          <LectureFooter />
        </div>
        <LectureComment />
      </div>
    </div>
  );
};

export default Home;
