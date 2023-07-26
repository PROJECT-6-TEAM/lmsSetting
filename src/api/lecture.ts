import { fetchClient } from ".";

export const getLectureList = async (lectureId: any) => {
  try {
    const response = await fetchClient(`/getLecture?lectureId=${lectureId}`, {
      method: "get",
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
