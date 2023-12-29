import { useEffect, useState } from "react";
import { Progress } from "@material-tailwind/react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <p className="my-2 text-lg max-w-[38ch] text-[#cec6fd]">
        (It's automatically confirmed in {(remainingTime / 1000).toFixed(0)}{" "}
        seconds.)
      </p>
      <Progress
        className="my-8"
        value={(remainingTime / timer) * 100}
        color="indigo"
      />
    </>
  );
}
