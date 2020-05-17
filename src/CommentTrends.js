import React from "react";
import { Line } from "@nivo/line";

const CommentTrends = ({ graphData }) => {
  console.log("graphData :>> ", graphData);
  return (
    <Line
      data={[{ id: "Comment Rating", data: graphData }]}
      width={900}
      height={400}
      margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
      axisLeft={{
        legend: "rating",
      }}
      axisBottom={{
        legend: "number of comments",
      }}
    />
  );
};

export default CommentTrends;
