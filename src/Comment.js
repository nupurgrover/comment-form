import React from "react";
import styled from "styled-components";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as StarEmpty } from "./star-empty.svg";

const Container = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Avatar = styled.div`
  background-color: grey;
  vertical-align: middle;
  margin-right: 12px;
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Name = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  flex-basis: 70%;
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const getStars = (rating) => {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    index <= rating ? stars.push(<StarFilled />) : stars.push(<StarEmpty />);
  }
  return stars;
};

const Comment = ({ comment }) => {
  const avatarLetter = comment.name.charAt(0).toUpperCase();

  return (
    <Container>
      <Avatar>{avatarLetter}</Avatar>

      <Content>
        <InnerContainer>
          <Name>{comment.name}</Name>
          <div>{getStars(comment.rating)}</div>
        </InnerContainer>
        <Text>{comment.commentText}</Text>
      </Content>
    </Container>
  );
};

export default Comment;
