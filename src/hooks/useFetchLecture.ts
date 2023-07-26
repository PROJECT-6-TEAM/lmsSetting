import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchClient } from '@/api';
interface LectureData {
  title: string;
  lectureType: string;
  videoLink: string;
  startDate: Date;
  endDate: Date;
}

const useFetchLecture = (): { data: LectureData | null, loading: boolean, error: string | null } => {
  const params = useParams();
  const { lectureId } = params;
  const [data, setData] = useState<LectureData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await useFetchLecture('MCnZE6LP0CmST4hmaHkO');

        setData(response);
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

  return { data, loading, error };
};

export default useFetchLecture;
