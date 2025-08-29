import { collection, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../api/firebase";

const leaderboardRef = collection(db, "leaderboard");

export async function addScore(username, score) {
  await addDoc(leaderboardRef, { username, score, createdAt: new Date() });
}

export async function getTopScores() {
  const q = query(leaderboardRef, orderBy("score", "desc"), limit(10));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data());
}
