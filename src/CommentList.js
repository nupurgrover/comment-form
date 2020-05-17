import React from "react";
import styled from "styled-components";

import Comment from "./Comment";

const Header = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 0;
  margin-bottom: 30px;
  font-size: 20px;
`;

const ListContainer = styled.div`
  outline: none;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentList = ({ comments }) => {
  return (
    <ListContainer>
      <Header>{comments.length} comments</Header>
      <List>
        {comments.map((comment, index) => {
          return (
            <li key={`comment-${index}`}>
              <Comment comment={comment} />
            </li>
          );
        })}
      </List>
    </ListContainer>
  );
};

export default CommentList;
