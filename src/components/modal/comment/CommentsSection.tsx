import React, { FC } from "react";
import Layout from "../Layout";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

interface Comment {
  text: string;
  replies: string[];
}

interface CommentsSectionProps {
  role: string;
  comments: Comment[];
  handleComment: (comment: string) => void;
  setActiveCommentIndex: (index: number) => void;
  isWriteModalOpen: boolean;
  handleBtn: () => void;
}

const CommentsSection: FC<CommentsSectionProps> = ({
  role,
  comments,
  handleComment,
  setActiveCommentIndex,
  isWriteModalOpen,
  handleBtn,
}) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div
          key={index}
          className="cursor-pointer rounded-md m-3"
          onClick={() => setActiveCommentIndex(index)}
        >
          <Comment
            admin={role}
            username="예시"
            role="수강생"
            comment={comment.text}
          />
        </div>
      ))}

      {isWriteModalOpen && (
        <Layout handleBtn={handleBtn}>
          <h2 className="text-xl font-bold">댓글 달기</h2>
          <CommentForm handleComment={handleComment} handleClose={handleBtn} />
        </Layout>
      )}
    </div>
  );
};

export default CommentsSection;
