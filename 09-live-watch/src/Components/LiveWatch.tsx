import { useEffect, useState } from "react";

type Props = {};

function LiveWatch({}: Props) {
  const [pause, setPause] = useState(false);
  const [time, setTime] = useState(new Date());

  console.log(time);

  useEffect(() => {
    if (pause) return;

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("intervalo limpiado");
    };
  }, [pause]);

  return (
    <div>
      <h1> Reloj en vivo</h1>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={() => setPause((prev) => !prev)}>
        {pause ? "▶️ Reanudar" : "⏸️ Pausar"}
      </button>
    </div>
  );
}

export default LiveWatch;
