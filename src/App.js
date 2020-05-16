import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const BodyContainer = styled.div`
  margin: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [comments, setComments] = useState([]);

  const addNewComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Comment Form</p>
      </header>
      <BodyContainer>
        <CommentForm addNewComment={addNewComment} />
        <CommentList comments={comments} />
      </BodyContainer>
    </div>
  );
}

export default App;
