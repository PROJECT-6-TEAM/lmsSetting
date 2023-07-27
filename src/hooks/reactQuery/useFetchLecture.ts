import { useQuery } from "@tanstack/react-query";
import { getLectureList } from "@/api/lecture";
import { QUERY_KEY } from "@/constants/queryKey";

export function useFetchLectureList(lectureId: any) {
  return useQuery({
    queryKey: [QUERY_KEY.LECTURE_LIST],
    queryFn: () => getLectureList(lectureId),
  });
}
