import Button from "../components/Button";

export default function QuestionCard({ question, onAnswer }) {
  return (
    <div className="p-4 shadow rounded bg-white">
      <h2 className="text-lg font-bold mb-3">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((opt, i) => (
          <Button key={i} onClick={() => onAnswer(opt.isCorrect)}>
            {opt.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
