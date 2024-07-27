import {
  Accordion,
  AccordionSummary,
  Typography,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const data = [
  { text: "Plan your trip on Germany", id: "section1" },
  { text: "Structure of higher education in germany", id: "section2" },
  {
    text: "Factors to consider when applying to germany / beyond univeristy ranking",
    id: "section3",
  },
  { text: "3 types of German national visa", id: "section5" },
  { text: "German Student Visa Requirements", id: "section6" },
  { text: "Enroll in desired Academic Program", id: "section7" },
  {
    text: "Requirements to Apply for a Student Residence Permit and FAQs",
    id: "section8",
  },
];

function Header() {
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:1001px)");
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fontFamily =
    "Source Sans 3, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";

  return (
    <Box
      sx={{
        display: "flex",
        mt: 3,
        flexDirection: isNonMobileScreens ? "" : "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: isNonMobileScreens ? "50%" : "100%" }}>
        <Container
          style={{
            marginTop: "1rem",
            padding: 0,
            width: "70%",
          }}
        >
          {data.map((item, index) => (
            <Accordion
              key={index}
              style={{ marginBottom: "1rem" }}
              onClick={() => handleClick(item.id)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "start", fontSize: "20px" }}
                >
                  {item.text}
                </Typography>
              </AccordionSummary>
            </Accordion>
          ))}
        </Container>
      </Box>
      <Box sx={{ width: isNonMobileScreens ? "50%" : "100%" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "700",
            fontFamily: fontFamily,
            textAlign: isNonMobileScreens ? "left" : "center",
            color: "#212529",
            mb: 7,
          }}
        >
          Study in Germany
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            ml: isNonMobileScreens ? "" : 5,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                backgroundColor: "#CDE6DB",
                width: "40%",
                p: "3.7rem 2rem",
                borderRadius: "10px",
                alignItems: "flex-start",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/study")}
            >
              <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
                Blocked
              </p>
              <p style={{ fontSize: "1.9rem", fontWeight: "bold", margin: 0 }}>
                Account
              </p>
            </Box>
            {isNonMobileScreens && (
              <Box
                sx={{
                  width: "40%",
                  p: "2.8rem 1rem",
                  borderRadius: "10px",
                  alignItems: "flex-start",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/study")}
              >
                <p
                  style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}
                >
                  Find your
                </p>
                <p
                  style={{ fontSize: "1.9rem", fontWeight: "bold", margin: 0 }}
                >
                  Program
                </p>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            {isNonMobileScreens && (
              <Box
                sx={{
                  width: "40%",
                  p: "4rem 0rem",
                  borderRadius: "10px",
                  ml: "1rem",
                  mt: "-2rem",
                  pb: "2.5rem",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/study")}
              >
                <p
                  style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}
                >
                  Health
                </p>
                <p
                  style={{ fontSize: "1.9rem", fontWeight: "bold", margin: 0 }}
                >
                  Insurance
                </p>
              </Box>
            )}
            <Box
              sx={{
                backgroundColor: "#D9CCF4",
                width: "40%",
                p: "4rem 2rem",
                borderRadius: "10px",
                mr: "4.5rem",
                mt: "-2.5rem",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => navigate("/study")}
            >
              <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
                Open Student
              </p>
              <p style={{ fontSize: "1.9rem", fontWeight: "bold", margin: 0 }}>
                Account
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
