import { useEffect, useState } from "react";

export const useTimer = (initialState) => {
  const [timer, setTimer] = useState(initialState * 60);
  const [control, setControl] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const timerRestartHandler = (e) => {
    e.preventDefault();
    setControl(false);
    setIsRunning(false);
    return setTimer(initialState * 60);
  };
  const timerStopHandler = (e) => {
    e.preventDefault();
    setControl(true);
    setIsRunning(false);
  };

  const timerContinueHandler = (e) => {
    e.preventDefault();
    setControl(false);
    setIsRunning(true);
  };

  const timerStartHandler = (e) => {
    e.preventDefault();
    setIsRunning(true);
    return setTimer(initialState * 60);
  };

  useEffect(() => {
    if (isRunning === true) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      if (timer === 0) {
        timerRestartHandler();
      }
      return () => clearInterval(interval);
    }
  });
  return {
    timer,
    timerContinueHandler,
    timerRestartHandler,
    timerStopHandler,
    control,
    timerStartHandler,
    isRunning,
    setIsRunning,
  };
};
