import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  border-radius: 4px;
  height: 100px;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  font-size: 16px;
  color: #333333;
  line-height: 1.2;
  padding: 15px;
  background: transparent;
`;

const TextAreaInput = ({ placeholder, name, value, onChange }) => {
  return (
    <StyledTextArea
      type="textarea"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextAreaInput;
