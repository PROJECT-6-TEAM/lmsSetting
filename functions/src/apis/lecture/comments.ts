import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

const corsHandler = cors({origin: true});

export const getComments = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    const lectureId = request.query.lectureId as string;
    try {
      const commentsRef = admin
        .firestore()
        .collection("lectureComment")
        .where("lectureId", "==", lectureId);
      const commentsSnap = await commentsRef.get();
      if (commentsSnap.empty) {
        console.log(`No comments exist for lectureId: ${lectureId}`);
        response.send([]);
        return;
      }
      const comments = commentsSnap.docs.map((doc) => {
        const data = doc.data();
        data.createdAt = new Date(data.createdAt._seconds * 1000);
        data.updatedAt = new Date(data.updatedAt._seconds * 1000);
        return data;
      });
      response.send(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      response.status(500).send("DB 에러");
    }
  });
});
