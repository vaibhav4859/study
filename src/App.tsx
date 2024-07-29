import { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header8 from "./components/Study/Header";
import Leftbar8 from "./components/Study/Leftbar";
import Rightbar8 from "./components/Study/Rightbar";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar";
import AlternateTimeline from "./components/Study/Timeline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Timeline2 from "./components/Study/Timeline2";

const data = [
  `Research universities and degrees programs in Germany`,
  `Do you need to pass a language test? <br/>
Learn about program admission requirements`,
  `Learn how you can finance your studies`,
  `Is your secondary school diploma / certificate sufficient? <br/>
Get your documents checked via APS`,
];

const data2 = [
  `Decide on a degree program and university`,
  `Contact the international office at the university you choose`,
];

const data3 = [`Submit your applications (be aware of deadlines).`];

const data4 = [
  `Apply for a room, if you want to live in a student residence hall.`,
  `Create a Blocked Account with 11.208 Euros.`,
  `Get confirmation of health insurance, if your policy is recognized in Germany.`,
  `Apply for your visa`,
  `Begin searching for your accomodation, if you will not live in a student residence hall`,
];

const data5 = [
  `Make sure you have all the neccessary documents.`,
  `Arrange accomodation for your first nights in Germany, if your do not yet have permanent housing`,
];

const data6 = [
  `Attend your orientation`,
  `Work hard and steadily <br/>
  Don't exaggerate Oktoberfest!`,
  `Make some friends also Non-Indians`,
];

const dataSets = [
  { data: data, heading: "12 Months before you go to Germany" },
  { data: data2, heading: "6 Months before you go to Germany" },
  { data: data3, heading: "4-5 Months before you go to Germany" },
  { data: data4, heading: "When you recieve your acceptance letter" },
  { data: data5, heading: "1-2 Weeks before you go to Germany" },
  { data: data6, heading: "1-2 Weeks in Germany" },
];

function App() {
  const [currentSection9, setCurrentSection9] = useState("");
  const isNonMobileScreens = useMediaQuery("(min-width:1301px)");
  const [position, setPosition] = useState(0);

  const handleNext = () => {
    if (position < dataSets.length - 1) {
      setPosition(position + 1);
    }
  };

  const handlePrev = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <div className="App">
      {isNonMobileScreens &&<Navbar />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <a href="/study" style={{ fontSize: "2rem" }}>
                  Study
                </a>
                <br />
              </>
            }
          />
          <Route
            path="/study"
            element={
              <Fragment>
                <Header8 />
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "2.2rem",
                    fontWeight: "bold",
                    mt: "5rem",
                  }}
                >
                  Plan your trip on Germany
                </Typography>
                {isNonMobileScreens && <AlternateTimeline />}
                {!isNonMobileScreens && (
                  <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    mb: "4rem",
                    mt: "2rem",
                  }}
                >
                  <IconButton onClick={handlePrev} disabled={position === 0}>
                    <ArrowBackIosIcon />
                  </IconButton>
                  <Box flexGrow={1}>
                    <Timeline2
                      data={dataSets[position].data}
                      heading={dataSets[position].heading}
                    />
                  </Box>
                  <IconButton
                    onClick={handleNext}
                    disabled={position === dataSets.length - 1}
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Box>
                
                )}
                <div
                  style={{
                    marginTop: isNonMobileScreens ? "-20rem" : "4rem",
                    display: "flex",
                    justifyContent: "space-between",
                    // marginBottom:"7rem"
                    flexDirection: isNonMobileScreens ? "row" : "column",
                  }}
                >
                  <Leftbar8 currentSection={currentSection9} />
                  <Rightbar8 setCurrentSection={setCurrentSection9} />
                </div>
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
