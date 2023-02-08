import { useTimer } from "../costumHooks/UseTimer";
import Button from "./UI/Button";
import styled from "styled-components";

export const Timer = () => {
  const {
    timer,
    timerContinueHandler,
    timerRestartHandler,
    timerStopHandler,
    control,
    isRunning,

    timerStartHandler,
  } = useTimer(1);

  return (
    <TimerStyle className="App">
      <h1
        style={{
          color: "blueviolet",
          fontWeight: "bolder",
          fontFamily: "fantasy",
        }}
      >
        {" "}
        Seconds: {timer}{" "}
      </h1>
      {!control && !isRunning ? (
        <Button onClick={timerStartHandler}> start</Button>
      ) : (
        <Button onClick={timerRestartHandler}> restart</Button>
      )}
      {isRunning ? (
        <Button onClick={timerStopHandler}> stop</Button>
      ) : (
        <Button onClick={timerContinueHandler}> continue</Button>
      )}
      {/* {!control && (<Button onClick={timerContinueHandler}> continue</Button>)} */}

      {/* <Button onClick={timerRestartHandler}> restart</Button> */}
    </TimerStyle>
  );
};
const TimerStyle = styled.div`
  margin-left: 5rem;
`;
