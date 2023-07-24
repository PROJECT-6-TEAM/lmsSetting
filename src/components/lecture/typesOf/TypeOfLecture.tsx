import React, { FC } from "react";
import VideoLecture from "./VideoLecture";
import NoteLecture from "./NoteLecture";
import LinkLecture from "./LinkLecture";

interface TypeOfLectureProps {
  type: string;
  content: string;
}

const TypeOfLecture: FC<TypeOfLectureProps> = ({ type, content }) => {
  switch (type) {
    case "video":
      return <VideoLecture content={content} />;
    case "document":
      return <NoteLecture content={content} />;
    case "link":
      return <LinkLecture content={content} />;
    default:
      return <div>Invalid lecture type</div>;
  }
};

export default TypeOfLecture;
