import React, { FC } from 'react';

interface LinkLectureProps {
  content: string;
}

const LinkLecture: FC<LinkLectureProps> = ({ content }) => {
  const src = `https://www.youtube.com/embed/${content}`;

  return (
    <div className="linkContainer h-full w-full">
      <iframe
        src={src}
        title="video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default LinkLecture;
