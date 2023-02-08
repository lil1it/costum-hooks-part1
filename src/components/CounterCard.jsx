import useCounter from "../costumHooks/UseCounter";
import Button from "./UI/Button";
import styled from "styled-components";


const CounterCard = () => {
  const {counter , decrement , increment , resetHandler } = useCounter(0,3,2);

  return (
    <CounterStyle >
    <h1 style={{color:"blueviolet", fontWeight:"bolder" ,fontFamily:"fantasy"}}>{counter}</h1>
      <Button onClick={decrement}> decrement </Button>
      <Button onClick={increment}> increment </Button>
      <Button onClick={resetHandler} > reset </Button>
    </CounterStyle >
  );
};

export default CounterCard;
const CounterStyle = styled.div`
  margin-left: 5rem;
`
