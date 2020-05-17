import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import CommentTrends from "./CommentTrends";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
`;

const FormAndGraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const getGraphData = (comments) => {
  if (comments.length) {
    return comments.map((comment, index) => ({
      x: index,
      y: comment.rating,
    }));
  }
  return [{ x: 0, y: 0 }];
};

function App() {
  const [comments, setComments] = useState([]);

  const addNewComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const graphData = getGraphData(comments);

  return (
    <div>
      <header className="App-header">
        <p>Comment Form</p>
      </header>
      <BodyContainer>
        <FormAndGraphContainer>
          <CommentForm addNewComment={addNewComment} />
          <CommentTrends graphData={graphData} />
        </FormAndGraphContainer>
        <CommentList comments={comments} />
      </BodyContainer>
    </div>
  );
}

export default App;
