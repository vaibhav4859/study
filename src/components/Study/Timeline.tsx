import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";

export default function AlternateTimeline() {
  return (
    <Timeline
      position="alternate"
      sx={{
        transform: "rotate(90deg)",
        width: "100%",
        height: "50% !important",
        mt:"-21rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            mt: "-5rem",
            transform: "rotate(270deg)",
            fontWeight: "bold",
            fontSize: "1.1rem",
            mr: "25rem",
            pr: "12rem",
          }}
        >
          1-2 Weeks <br />
          in Germany
        </Typography>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex" }}>
            <Box
              sx={{
                maxWidth: "4.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-90deg)",
                mt: "-1.5rem",
                ml: "0.2rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Work hard and steadily
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "4.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-90deg)",
                mt: "-1.5rem",
                ml: "1rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Don't exaggerate Oktoberfest!
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                transform: "rotate(-90deg)",
                mt: "-3.5rem",
                mr: "1.5rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Attend your orientation and make some friends also Non-Indians
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Box>

      <Box>
        <Typography
          sx={{
            mt: "-5rem",
            transform: "rotate(270deg)",
            fontWeight: "bold",
            fontSize: "1.1rem",
            mr: "26rem",
            pr: "16rem",
          }}
        >
          1-2 Weeks <br />
          before you go <br />
          to Germany
        </Typography>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-90deg)",
                mt: "-5.5rem",
                ml: "2.8rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Arrange accomodation for your first nights in Germany, if your
                do not yet have permanent housing
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                transform: "rotate(-90deg)",
                mt: "-3rem",
                mr: "1rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Make sure you have all the neccessary documents.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Box>

      <Box>
        <Typography
          sx={{
            mt: "-4rem",
            transform: "rotate(270deg)",
            fontWeight: "bold",
            fontSize: "1.1rem",
            mr: "25rem",
            pr: "28rem",
          }}
        >
          When you recieve your <br />
          acceptance letter
        </Typography>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-90deg)",
                mt: "-5rem",
                ml: "2.2rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Begin searching for your accomodation, if you will not live in a
                student residence hall
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                maxWidth: "4.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                transform: "rotate(-90deg)",
                mt: "-1.5rem",
                mr: "0rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Apply for your visa
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                maxWidth: "6rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                transform: "rotate(-90deg)",
                mt: "-4rem",
                ml: "1.4rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                Get confirmation of health insurance, if your policy is
                recognized in Germany.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                transform: "rotate(-90deg)",
                mt: "-3rem",
                mr: "1rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Create a Blocked Account with 11.208 Euros.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-90deg)",
                mt: "-3.5rem",
                ml: "1.2rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Apply for a room, if you want to live in a student residence
                hall.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Box>

      <TimelineItem>
        <TimelineContent
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            mr: "45.5rem",
          }}
        >
          <Typography
            sx={{
              mt: "-4rem",
              transform: "rotate(270deg)",
              fontWeight: "bold",
              fontSize: ".99rem",
              mr: "1rem",
              pr: "2rem",
              textAlign: "center",
            }}
          >
            4-5 Months <br />
            before you <br />
            go to <br />
            Germany
          </Typography>

          <Box
            sx={{
              maxWidth: "5.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              transform: "rotate(-90deg)",
              mt: "-2.5rem",
              mr: "0.5rem",
              border: "1px solid black",
              borderRadius: "10px",
              height: "fit-content",
            }}
          >
            <Typography
              sx={{
                padding: "1rem 0.7rem",
                fontSize: "0.7rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              Submit your applications (be aware of deadlines).
            </Typography>
          </Box>
          <TimelineDot sx={{ mr: "-1.9rem", ml: "1rem" }} />
        </TimelineContent>
      </TimelineItem>

      <Box>
        <Typography
          sx={{
            mt: "-6rem",
            transform: "rotate(270deg)",
            fontWeight: "bold",
            fontSize: "1.08rem",
            mr: "25rem",
            pr: "16rem",
          }}
        >
          6 Months <br />
          before you go <br />
          to Germany
        </Typography>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                transform: "rotate(-90deg)",
                mt: "-3rem",
                ml: "0.7rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                Contact the international office at the university you choose
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                transform: "rotate(-90deg)",
                mt: "-2.5rem",
                mr: "0.5rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Decide on a degree program and university
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Box>

      <Box>
        <Typography
          sx={{
            mt: "-4rem",
            transform: "rotate(270deg)",
            fontWeight: "bold",
            fontSize: "1.1rem",
            mr: "25rem",
            pr: "24rem",
          }}
        >
          12 Months <br />
          before you go to Germany
        </Typography>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex" }}>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-90deg)",
                mt: "-2rem",
                ml: "0.2rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Get your documents checked via APS
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: "rotate(-90deg)",
                mt: "-3.1rem",
                ml: "2.4rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Is your secondary school diploma / certificate sufficient?
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                transform: "rotate(-90deg)",
                mt: "-2.5rem",
                mr: "0.5rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                Learn how you can finance your studies.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex" }}>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                transform: "rotate(-90deg)",
                mt: "-2.5rem",
                ml: "0.2rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                Learn about program admission requirements
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                transform: "rotate(-90deg)",
                mt: "-2.5rem",
                ml: "1.8rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                Do you need to pass a language test?
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Box
              sx={{
                maxWidth: "5.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                transform: "rotate(-90deg)",
                mt: "-3rem",
                mr: "1rem",
                border: "1px solid black",
                borderRadius: "10px",
                height: "fit-content",
              }}
            >
              <Typography
                sx={{
                  padding: "1rem 0.7rem",
                  fontSize: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  pr: 0,
                }}
              >
                Research universities <br />
                and degrees programs in Germany
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Box>
    </Timeline>
  );
}
