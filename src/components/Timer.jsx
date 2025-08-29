import { useEffect, useState } from "react";

export default function Timer({ duration, onTimeUp }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return <div className="text-xl font-bold">⏱ {time}s</div>;
}
