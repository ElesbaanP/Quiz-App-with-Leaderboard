import useQuizLogic from "../features/quiz/hooks/useQuizLogic";
import QuestionCard from "../features/quiz/components/QuestionCard";
import Timer from "../components/Timer";

const sampleQuestions = [
  {
    text: "What is the capital of France?",
    options: [
      { text: "Berlin", isCorrect: false },
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
    ],
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: [
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Venus", isCorrect: false },
    ],
  },
];

export default function QuizPage() {
  const { question, index, score, isFinished, handleAnswer } =
    useQuizLogic(sampleQuestions);

  if (isFinished) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">🎉 Quiz Finished!</h2>
        <p>Your Score: {score}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Timer duration={30} onTimeUp={() => alert("Time’s up!")} />
      <p className="mb-2">Question {index + 1}</p>
      <QuestionCard question={question} onAnswer={handleAnswer} />
    </div>
  );
}
