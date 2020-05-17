import React, { useState } from "react";
import styled from "styled-components";

import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 30%;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const StyledButton = styled.button`
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;
  padding: 0 15px;
  height: 40px;
  border-radius: 5px;
  background: #041d4f;
  color: white;
  outline: none;

  &:disabled {
    background-color: #041d4f;
    opacity: 0.5;
  }

  &:hover {
    background: linear-gradient(-185deg, #041d4f, #163a81);
  }
`;

const CommentForm = ({ addNewComment }) => {
  const emptyFormState = {
    name: "",
    email: "",
    rating: 0,
    commentText: "",
  };
  const [formState, setFormState] = useState(emptyFormState);

  const onInputChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addNewComment(formState);
    setFormState(emptyFormState);
  };

  const isFormDisabled =
    formState.name === emptyFormState.name ||
    formState.email === emptyFormState.email ||
    formState.rating === emptyFormState.rating ||
    formState.commentText === emptyFormState.commentText;

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
        value={formState.rating || ""}
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

      <StyledButton type="submit" disabled={isFormDisabled}>
        Submit
      </StyledButton>
    </InputForm>
  );
};

export default CommentForm;
