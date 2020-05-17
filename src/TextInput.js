import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 4px;
  height: 50px;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  font-size: 16px;
  color: #333333;
  line-height: 1.2;
  padding: 0 15px;
  background: transparent;
  outline: none;
`;

const TextInput = (props) => {
  return <StyledInput {...props} />;
};

export default TextInput;
