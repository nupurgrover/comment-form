import React from "react";
import { Comment, List, Avatar } from "antd";

const CommentList = ({ comments }) => {
  return (
    <div>
      <List
        header={`${comments.length} comments`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => {
          const firstLetter = item.name.charAt(0).toUpperCase();

          return (
            <li>
              <Comment
                style={{ textAlign: "left" }}
                author={item.name}
                content={item.commentText}
                avatar={
                  <Avatar
                    style={{ backgroundColor: "grey", verticalAlign: "middle" }}
                    size="large"
                  >
                    {firstLetter}
                  </Avatar>
                }
              />
            </li>
          );
        }}
      />
    </div>
  );
};

export default CommentList;
