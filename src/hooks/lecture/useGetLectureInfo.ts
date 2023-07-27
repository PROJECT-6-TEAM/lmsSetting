import type { Lecture, User } from "@/types/firebase.Types";
import { db } from '@/utils/firebase';
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";

const fetchLectureInfo = async (docId: string) => {
  const docRef = doc(db, "lectures", docId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const userSnap = await getDoc(docSnap.data().userId);
    const user = userSnap.data() as User;
    return { ...docSnap.data(), user } as Lecture;
  }
  return docSnap.data() as Lecture;
};

const useGetLectureInfo = (docId: string) => {
  return useQuery<Lecture>(
    ["lecture", docId],
    async () => await fetchLectureInfo(docId),
    { refetchOnWindowFocus: false },
  );
};

export default useGetLectureInfo;