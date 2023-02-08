import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <ButtonStyle {...rest} >{children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
 
  max-width: 15rem;
  margin: 1rem ;
  background-color: white;
  padding: 1rem;
  border: solid 2px blueviolet;
  border-radius: 12px ;
  box-shadow: 5px 2px 8px blueviolet;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: fantasy;
  :active{
    background-color: aliceblue;
  }
`;
