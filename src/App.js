import React, { useState } from "react";
import styled from "styled-components";

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

const Header = styled.header`
  background-color: #041d4f;
  height: 30px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  text-align: center;
`;

const getGraphData = (comments) => {
  if (comments.length) {
    return comments.map((comment, index) => ({
      x: index + 1,
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
      <Header>Sentiment Analysis Tool</Header>
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
