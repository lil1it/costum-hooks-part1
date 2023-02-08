import React from "react";
import CounterCard from "./components/CounterCard";
import InputValidate from "./components/InputValidate";
import { Timer } from "./components/Timer";
import styled from "styled-components";
import Count from "./autoCounter/Count";
import CountDown from "./autoCounter/CountDown";

function App() {
  return (
    <React.Fragment>
      <CounterCard />
      <LineStyle />
      <InputValidate />
      <LineStyle />
      <Timer />
      <LineStyle />
      <Count/>
      <CountDown/>
    </React.Fragment>
  );
}

export default App;

const LineStyle = styled.hr`
  width: 40rem;
  height: 0.1rem;
  background-color: blueviolet;
  margin: 5rem 5rem;
  box-shadow: 5px 2px 8px blueviolet;
`;
