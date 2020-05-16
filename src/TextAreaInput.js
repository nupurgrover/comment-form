import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 4px;
  height: 100px;
  margin-bottom: 20px;
`;

const TextAreaInput = ({ placeholder }) => {
  return <StyledInput type="textarea" placeholder={placeholder} />;
};

export default TextAreaInput;
