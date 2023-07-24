import React, { FC } from "react";
import Layout from "../Layout";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

interface Comment {
  text: string;
  replies: string[];
}

interface ReplySectionProps {
  role: string;
  activeComment: Comment | null;
  handleReply: (reply: string) => void;
  handleBtn: () => void;
}

const ReplySection: FC<ReplySectionProps> = ({
  role,
  activeComment,
  handleReply,
  handleBtn,
}) => {
  return (
    activeComment && (
      <Layout handleBtn={handleBtn}>
        <h2 className="text-2xl font-bold">상세보기</h2>
        <Comment
          admin={role}
          username="예시"
          role="수강생"
          comment={activeComment.text}
          showFullComment={true}
        />
        <ul>
          {activeComment.replies.map((reply, index) => (
            <li key={index} className="mt-2">
              <Comment
                admin={role}
                username="예시"
                role="수강생"
                comment={reply}
                showFullComment={true}
              />
            </li>
          ))}
        </ul>
        <CommentForm
          handleComment={reply => {
            handleReply(reply);
          }}
          handleClose={handleBtn}
        />
      </Layout>
    )
  );
};

export default ReplySection;
