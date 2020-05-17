import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CommentForm from "./CommentForm";

const mockAddComment = jest.fn();

describe("CommentForm ", () => {
  const mockValues = {
    name: "Test User",
    email: "testuser@gmail.com",
    rating: 4,
    commentText: "Great service!",
  };

  it("should render disabled button by default", () => {
    render(<CommentForm addNewComment={mockAddComment} />);
    const buttonInput = screen.getByText(/submit/i);
    expect(buttonInput.closest("button")).toBeDisabled();
  });

  it("should set value of name input on change", () => {
    render(<CommentForm addNewComment={mockAddComment} />);
    const nameInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(nameInput, { target: { value: mockValues.name } });
    expect(nameInput.value).toEqual(mockValues.name);
  });

  it("should set value of email input on change", () => {
    render(<CommentForm addNewComment={mockAddComment} />);
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: mockValues.email } });
    expect(emailInput.value).toEqual(mockValues.email);
  });

  it("should set value of input name on change", () => {
    render(<CommentForm addNewComment={mockAddComment} />);
    const ratingInput = screen.getByPlaceholderText(/rating/i);
    fireEvent.change(ratingInput, { target: { value: mockValues.rating } });
    expect(ratingInput.value).toEqual(mockValues.rating.toString());
  });

  it("should set value of comment text on change", () => {
    render(<CommentForm addNewComment={mockAddComment} />);
    const textInput = screen.getByPlaceholderText(/comment/i);
    fireEvent.change(textInput, { target: { value: mockValues.commentText } });
    expect(textInput.value).toEqual(mockValues.commentText);
  });

  it("should call submit handler on click of submit button", () => {
    render(<CommentForm addNewComment={mockAddComment} />);
    fireEvent.change(screen.getByPlaceholderText(/name/i), {
      target: { value: mockValues.name },
    });
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: mockValues.email },
    });
    fireEvent.change(screen.getByPlaceholderText(/rating/i), {
      target: { value: mockValues.rating },
    });
    fireEvent.change(screen.getByPlaceholderText(/comment/i), {
      target: { value: mockValues.commentText },
    });
    const submitButton = screen.getByText(/submit/i);
    expect(submitButton.closest("button")).toBeEnabled();
    fireEvent.click(submitButton);
    expect(mockAddComment).toHaveBeenCalled();
  });
});
