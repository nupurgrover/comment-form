import { getGraphData } from "./App";

describe("getGraphData", () => {
  it("should convert comments data into the correct format", () => {
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
    const mockResult = [
      { x: 1, y: 4 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
    ];
    expect(getGraphData(mockComments)).toEqual(mockResult);
  });

  it("should return default value when no comments are available", () => {
    expect(getGraphData([])).toEqual([{ x: 0, y: 0 }]);
  });
});
