import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
`;

const Name = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const Comment = ({ comment }) => {
  const avatarLetter = comment.name.charAt(0).toUpperCase();
  return (
    <Container>
      <Avatar>{avatarLetter}</Avatar>
      <Content>
        <Name>{comment.name}</Name>
        <Text>{comment.commentText}</Text>
      </Content>
    </Container>
  );
};

export default Comment;
