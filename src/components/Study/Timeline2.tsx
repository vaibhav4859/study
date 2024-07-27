import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography } from "@mui/material";

export default function Timeline2(props: any) {
  return (
    <Box>
      <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        {props.heading}
      </Typography>
      <Timeline position="alternate-reverse">
        {props.data.map((item: string, index: number) => {
          return (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                {index !== props.data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box>
                  <Typography>
                  <div
              dangerouslySetInnerHTML={{
                __html: item,
              }}
            ></div>
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}
