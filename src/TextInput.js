import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 4px;
  height: 20px;
  margin-bottom: 20px;
`;

const TextInput = ({ placeholder, name, type, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
