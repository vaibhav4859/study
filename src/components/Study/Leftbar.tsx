import {
    Box,
    Drawer,
    IconButton,
    Link,
    Typography,
    useMediaQuery,
  } from "@mui/material";
  import { useState } from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  
  const contentList = [
    "Plan your trip on Germany",
    "The Higher Education system",
    "What factors should you consider when applying to germany?",
    "What factors should you consider beyond university ranking?",
    "What are three types of German national visa?",
    "What Are German Student Visa Requirements?",
    "How to enroll in Your desired Academic Program?",
    "What are requirements to Apply for a Student Residence Permit in Germany?",
    "Activities Eligible for a German Student Visa",
    "Which Language Certificates Are Recognized for Studying in Germany?",
    "What Is the APS Certificate?",
    "What Does the Equivalent of a Bachelor’s/Master’s Degree in Germany Mean?",
  ];
  
  const linkStyle = {
    fontSize: "1.1rem",
    lineHeight: 1.5,
    fontWeight: 600,
    fontStyle: "normal",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "14px",
    paddingRight: "16px",
    textAlign: "start",
    textDecoration: "none",
  };
  
  type Props = {
    currentSection: string | number;
  };
  
  function Leftbar({ currentSection }: Props) {
    const isNonMobileScreens = useMediaQuery("(min-width:1001px)");
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    return (
      <>
        {isNonMobileScreens ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              width: "20%",
              height: "calc(100vh - 120px)",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgb(238,238,238)",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgb(254,213,3)",
                borderRadius: "4px",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "1.8rem", fontWeight: "600", pb: 1.5, pl: 3 }}
            >
              Contents
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {contentList.map((item, index) => (
                <Link
                  key={index}
                  href={"#section" + (index + 1)}
                  variant="body1"
                  sx={{
                    ...linkStyle,
                    color:
                      currentSection === `section${index + 1}`
                        ? "rgb(32,33,36)"
                        : "rgb(129,130,135)",
                    borderLeft:
                      currentSection === `section${index + 1}`
                        ? "2px solid rgb(254, 213, 3)"
                        : "",
                    borderBottom: "0.5px solid #105d9cd8",
                    p: "20px",
                    pr:"10px !important",
                    pl:"40px !important",
                    boxSizing: "border-box",
                    width: "100%",
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        ) : (
          <>
            <IconButton
              onClick={toggleDrawer}
              sx={{ ml: 1 }}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
              <Typography sx={{ fontSize: "1rem", paddingLeft: 1 }}>
                Contents
              </Typography>
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  padding: "20px",
                }}
              >
                <Typography variant="h3" sx={{ pb: 2 }}>
                  Contents
                </Typography>
                {contentList.map((item, index) => (
                  <Link
                    key={index}
                    href={"#section" + (index + 1)}
                    variant="body1"
                    sx={{
                      ...linkStyle,
                      color:
                        currentSection === `section${index + 1}`
                          ? "rgb(32,33,36)"
                          : "rgb(129,130,135)",
                      borderLeft:
                        currentSection === `section${index + 1}`
                          ? "2px solid rgb(254, 213, 3)"
                          : "",
                      borderBottom: "0.5px solid #105d9cd8",
                      p: "20px",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
            </Drawer>
          </>
        )}
      </>
    );
  }
  
  export default Leftbar;
  