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
  padding: 50px;
  @media (min-width: 960px) {
    width: 1220px;
  }
`;

const FormAndGraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const getGraphData = (comments) => {
  if (comments.length) {
    return comments.map((comment, index) => ({
      x: index,
      y: comment.rating,
    }));
  }
  return [{ x: 1, y: 1 }];
};

function App() {
  const [comments, setComments] = useState([]);

  const addNewComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const graphData = getGraphData(comments);
  // const graphData = [
  //   { x: 1, y: 5 },
  //   { x: 2, y: 4 },
  //   { x: 3, y: 0 },
  //   { x: 4, y: 1 },
  //   { x: 5, y: 2 },
  //   { x: 6, y: 3 },
  // ];

  return (
    <div>
      <header className="App-header">
        <p>Comment Form</p>
      </header>
      <BodyContainer>
        <FormAndGraphContainer>
          <CommentForm addNewComment={addNewComment} />
          <div style={{ height: "400px" }}>
            <CommentTrends graphData={graphData} />
          </div>
        </FormAndGraphContainer>
        <CommentList comments={comments} />
      </BodyContainer>
    </div>
  );
}

export default App;
