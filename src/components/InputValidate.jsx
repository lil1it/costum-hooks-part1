import React from "react";
import { useInput } from "../costumHooks/UseInput";
import Input from "./UI/Input";
import styled from "styled-components";

const InputValidate = () => {
  const textInput = useInput("", "text", true);
  const emailInput = useInput("", "email", true);
  const passwordInput = useInput("", "password", true);

  return (
    <FormStyle>
      <InputType>
        <label style={{color:"blueviolet", fontSize:"1.5rem" , fontWeight:"bolder" ,fontFamily:"fantasy"}}>UserName</label>
        <Input {...textInput} placeholder="Enter..."  />
        {textInput.required && <span style={{color:"blueviolet", fontWeight:"initial"}}>{textInput.required}</span>}
      </InputType> 
       <InputType>
        <label style={{color:"blueviolet", fontSize:"1.5rem" , fontWeight:"bolder",fontFamily:"fantasy" }} >EMAIL</label>
        <Input {...emailInput} placeholder="Enter..." required />
        {emailInput.required && <span style={{color:"blueviolet", fontWeight:"initial"}}>{emailInput.required}</span>}
      </InputType>
      <InputType>
        <label style={{color:"blueviolet", fontSize:"1.5rem" , fontWeight:"bolder",fontFamily:"fantasy" }}>PASSWORD</label>
        <Input {...passwordInput} placeholder="Enter..." />
        {passwordInput.required && <span style={{color:"blueviolet", fontWeight:"initial"}}>{passwordInput.required}</span>}
      </InputType>
    
    </FormStyle>
  );
};

export default InputValidate;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5rem;
  width: 20rem;
  
`;

const InputType = styled.div`
    display:flex;
    flex-direction: column;
    margin: 1rem;
`

// import useCounter from "../costumHooks/UseCounter";
// import Button from "./UI/Button";

// const ForwardCounter = () => {
//   const {increment} = useCounter();

//   return <Button onClick={increment}> increment </Button>;
// };

// export default ForwardCounter;

// import React, { useState } from "react";

// const Practice = () => {
//   const [count, setCount] = useState(0);

//   console.log("render");
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(1)}>add</button>
//     </div>
//   );
// };

// export default Practice;
