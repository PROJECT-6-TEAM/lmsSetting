"use client";
import React, { FC, useState } from "react";
import CommentsSection from "@/components/modal/comment/CommentsSection";
import ReplySection from "@/components/modal/comment/ReplySection";

interface Comment {
  text: string;
  replies: string[];
}

const Home: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeCommentIndex, setActiveCommentIndex] = useState<number | null>(
    null,
  );
  const [isWriteModalOpen, setWriteModalOpen] = useState(false);

  const handleComment = (text: string) => {
    setComments([...comments, { text, replies: [] }]);
    setWriteModalOpen(false);
  };

  const handleReply = (text: string) => {
    if (activeCommentIndex !== null) {
      const newComments = [...comments];
      newComments[activeCommentIndex].replies.push(text);
      setComments(newComments);
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-1/4 float-right">
      <div className=" m-3 flex content-center justify-between">
        <h1 className="text-center text-2xl font-bold pt-5 ml-3">
          강의 커뮤니티
        </h1>
        <button
          className=" m-5 h-8 w-32 text-white rounded-md bg-blue-600"
          onClick={() => setWriteModalOpen(true)}
        >
          작성
        </button>
      </div>
      <div>
        <CommentsSection
          role={"수강생"}
          comments={comments}
          setActiveCommentIndex={setActiveCommentIndex}
          isWriteModalOpen={isWriteModalOpen}
          handleComment={handleComment}
          handleBtn={() => setWriteModalOpen(false)}
        />

        {activeCommentIndex !== null && (
          <ReplySection
            role={"관리자"}
            activeComment={comments[activeCommentIndex]}
            handleReply={handleReply}
            handleBtn={() => setActiveCommentIndex(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
