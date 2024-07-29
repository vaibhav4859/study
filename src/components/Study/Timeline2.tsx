import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function Timeline2(props: any) {
  const isNonMobileScreens = useMediaQuery("(min-width:1301px)");
  return (
    <Box
      sx={{
        height: "700px", // Set a fixed height for the timeline container
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center the content vertically
        mt:"2rem"
      }}
    >
      <Typography sx={{ fontSize: "1.8rem", fontWeight: "bold", textAlign: "center" }}>
        {props.heading}
      </Typography>
      <Timeline position="alternate-reverse">
        {props.data.map((item: string, index: number) => {
          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== props.data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box>
                  <Typography sx={{fontSize:isNonMobileScreens?"":"0.8rem"}}>
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
