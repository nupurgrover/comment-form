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
    console.log("formState :>> ", formState);
    addNewComment(formState);
  };

  const isFormDisabled = false;

  return (
    <InputForm onSubmit={handleSubmit}>
      <TextInput
        placeholder="Name"
        name="name"
        type="text"
        value={formState.name}
        onChange={onInputChange}
      />
      <TextInput
        placeholder="Email"
        name="email"
        type="email"
        value={formState.email}
        onChange={onInputChange}
      />
      <TextInput
        placeholder="Rating"
        name="rating"
        type="number"
        value={formState.rating || null}
        onChange={onInputChange}
      />
      <TextAreaInput
        placeholder="Comment"
        name="commentText"
        value={formState.commentText}
        onChange={onInputChange}
      />

      <button type="submit" disabled={isFormDisabled}>
        Submit Comment
      </button>
    </InputForm>
  );
};

export default CommentForm;
