import { useState } from "react";

interface Comment {
  text: string;
  replies: string[];
}

export const useLectureComment = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeCommentIndex, setActiveCommentIndex] = useState<number | null>(null);
  const [isCommentModalOpen, setCommentModalOpen] = useState<boolean>(false);

  const handleComment = (text: string) => {
    setComments([...comments, { text, replies: [] }]);
    setCommentModalOpen(false);
  };

  const handleReply = (text: string) => {
    if (activeCommentIndex !== null) {
      const newComments = [...comments];
      newComments[activeCommentIndex].replies.push(text);
      setComments(newComments);
    }
  };

  const closeReplySection = () => {
    setActiveCommentIndex(null);
  };

  const openCommentModal = () => {
    setCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };

  return {
    comments,
    activeCommentIndex,
    isCommentModalOpen,
    handleComment,
    handleReply,
    setActiveCommentIndex,
    closeReplySection,
    openCommentModal,
    closeCommentModal,
  };
};