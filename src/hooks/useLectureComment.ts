import { useState } from "react";

interface Comment {
  text: string;
  replies: string[];
}

export const useLectureComment = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeCommentIndex, setActiveCommentIndex] = useState<number | null>(null);
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

  const closeReplySection = () => {
    setActiveCommentIndex(null);
  };

  const openCommentModal = () => {
    setWriteModalOpen(true);
  };

  const closeCommentModal = () => {
    setWriteModalOpen(false);
  };

  return {
    comments,
    activeCommentIndex,
    isWriteModalOpen,
    handleComment,
    handleReply,
    setActiveCommentIndex,
    closeReplySection,
    openCommentModal,
    closeCommentModal,
  };
};