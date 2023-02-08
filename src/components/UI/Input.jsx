import React from 'react';
import styled from "styled-components";


const Input = ({...rest}) => {
    return (
        <>
            <InputStyle {...rest}/>
        </>
    );
};

export default Input;

const InputStyle = styled.input`
    border: 2px blueviolet solid;
    border-radius: 5px;
    height: 2rem;
    margin-top: 1rem;
    color: blue;
    font-family: fantasy;
    font-size: large;

`