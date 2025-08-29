import { useState } from "react";
import shuffleArray from "../../../utils/shuffleArray";

export default function useQuizLogic(questions) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const randomizedQuestions = shuffleArray(questions);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setIndex(index + 1);
  };

  return {
    question: randomizedQuestions[index],
    index,
    score,
    isFinished: index >= randomizedQuestions.length,
    handleAnswer,
  };
}
