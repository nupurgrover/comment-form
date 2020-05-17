import React from "react";
import { render } from "@testing-library/react";
import CommentList from "./CommentList";

describe("CommentList", () => {
  it("should have heading 0 comments by default", () => {
    const { getByText } = render(<CommentList comments={[]} />);
    const heading = getByText(/0 comments/i);
    expect(heading).toBeInTheDocument();
  });

  it("should have heading 1 comment when there is only 1 comment", () => {
    const mockComments = [
      {
        name: "Test User",
        email: "testuser@gmail.com",
        rating: 4,
        commentText: "Great Service",
      },
    ];
    const { getByText } = render(<CommentList comments={mockComments} />);
    const heading = getByText(/1 comment/i);
    expect(heading).toBeInTheDocument();
  });

  it("should have heading corresponding to the numer of comments", () => {
    const mockComments = [
      {
        name: "Test User",
        email: "testuser@gmail.com",
        rating: 4,
        commentText: "Great Service",
      },
      {
        name: "Test Alpha",
        email: "testalpha@gmail.com",
        rating: 3,
        commentText: "Average Service",
      },
      {
        name: "Test Beta",
        email: "testbeta@gmail.com",
        rating: 5,
        commentText: "Excellent Service",
      },
    ];
    const { getByText } = render(<CommentList comments={mockComments} />);
    const heading = getByText(/3 comments/i);
    expect(heading).toBeInTheDocument();
  });
});
