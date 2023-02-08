import useAutoCount from "../costumHooks/useAutoCount";
import styled from "styled-components";

const Count = () => {
  const count = useAutoCount();

  return <Card>{count}</Card>;
};

export default Count;

const Card = styled.div`
  max-width: 40rem;
  margin:  2.5rem 5rem;
  background: linear-gradient(blueviolet ,violet , pink);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(160, 39, 247, 0.777);
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;
