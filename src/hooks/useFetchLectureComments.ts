import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface LectureCommentsData {
  content: string;
  createAt: Date;
}

const useFetchLectureComments = (): {
  commentsData: LectureCommentsData[] | null;
  loading: boolean;
  error: string | null;
} => {
  const params = useParams();
  const { lectureId } = params;
  const [commentsData, setCommentsData] = useState<LectureCommentsData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://us-central1-lms-team-6.cloudfunctions.net/getComments?lectureId=${lectureId}`,
        );
        const data: LectureCommentsData[] = await response.json();
        setCommentsData(data);
      } catch (error) {
        setError("Fetch 에러가 나타났습니다.");
      } finally {
        setLoading(false);
      }
    };
    if (lectureId) {
      fetchData();
    }
  }, [lectureId]);

  return { commentsData, loading, error };
};

export default useFetchLectureComments;
