import React from "react";
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";

const GraphContainer = styled.div`
  height: 400px;
  width: 600px;
`;

const CommentTrends = ({ graphData }) => {
  console.log("graphData :>> ", graphData);
  return (
    <GraphContainer>
      <ResponsiveLine
        curve="monotoneX"
        height={400}
        data={[{ id: "Comment Rating", data: graphData }]}
        margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
        xScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: 5,
          tickValues: 5,
        }}
        gridYValues={[0, 1, 2, 3, 4, 5]}
        axisLeft={{
          legend: "Rating",
          legendOffset: -40,
          legendPosition: "middle",
          format: (e) => Math.floor(e) === e && e,
        }}
        axisBottom={{
          legend: "Number Of Comments",
          legendOffset: 36,
          legendPosition: "middle",
          format: (e) => Math.floor(e) === e && e,
        }}
        axisTop={null}
        axisRight={null}
      />
    </GraphContainer>
  );
};

export default CommentTrends;
