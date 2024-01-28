import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const formatTime = (timeInSeconds: number) => {
  // DESC : 3,700 sec = 1 hr 1 min 40 sec

  /** DESC : Time in seconds
   *    - 1 hr = 3600 seconds (60 minutes * 60 seconds)
   *    - 1 min = 60 seconds
   */
  const hours = Math.floor(timeInSeconds / 3600); // 3700/ 3600 = 1
  const minutes = Math.floor((timeInSeconds % 3600) / 60); // 3700 % 3600 = 100 / 60 = 1
  const seconds = timeInSeconds % 60; // 3700 % 60 = 40

  const hoursInString = hours.toString().padStart(2, "0");
  const minutesInString = minutes.toString().padStart(2, "0");
  const secondsInString = seconds.toString().padStart(2, "0");

  return `${hoursInString}:${minutesInString}:${secondsInString}`;
};

function Stopwatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Stopwatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Stopwatch;
