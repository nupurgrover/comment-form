import React, { useState } from "react";
import styled from "styled-components";

import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  padding: 0 15px;
  height: 40px;
  border-radius: 5px;
  background: #242121;
  color: white;
  outline: none;

  &:hover {
    box-shadow: inset 0 0 0 2px rgb(36, 33, 33, 0.2);
    background: linear-gradient(-185deg, #242121, #605c5c);
  }
`;

const CommentForm = ({ addNewComment }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    rating: 0,
    commentText: "",
  });

  const onInputChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addNewComment(formState);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <TextInput
        placeholder="Name"
        name="name"
        type="text"
        value={formState.name}
        onChange={onInputChange}
        required
      />
      <TextInput
        placeholder="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={onInputChange}
        required
      />
      <TextInput
        placeholder="Rating"
        name="rating"
        type="number"
        min="1"
        max="5"
        value={formState.rating || null}
        onChange={onInputChange}
        required
      />
      <TextAreaInput
        placeholder="Comment"
        name="commentText"
        value={formState.commentText}
        onChange={onInputChange}
        required
      />

      <StyledButton type="submit">Submit</StyledButton>
    </InputForm>
  );
};

export default CommentForm;
