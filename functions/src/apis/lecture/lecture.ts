import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

admin.initializeApp();

const corsHandler = cors({ origin: true });

export const getLecture = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    const lectureId = request.query.lectureId as string;
    try {
      const lectureRef = admin.firestore().collection("lecture").doc(lectureId);
      const lectureDoc = await lectureRef.get();
      if (!lectureDoc.exists) {
        console.log(`No document exists for lectureId: ${lectureId}`);
        response.status(404).send("Lecture not found");
        return;
      }
      const lectureData = lectureDoc.data();
      const title = lectureData?.title;
      const lectureType = lectureData?.lectureType;
      const videoLink = lectureData?.lectureContent.videoLink;
      const startDate = new Date(lectureData?.startDate._seconds * 1000);
      const endDate = new Date(lectureData?.endDate._seconds * 1000);
      response.send({ title, lectureType, videoLink, startDate, endDate });
    } catch (error) {
      response.status(500).send("DB 에러");
    }
  });
});
