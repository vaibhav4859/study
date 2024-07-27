import { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header8 from "./components/Study/Header";
import Leftbar8 from "./components/Study/Leftbar";
import Rightbar8 from "./components/Study/Rightbar";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  const [currentSection9, setCurrentSection9] = useState("");
  const isNonMobileScreens = useMediaQuery("(min-width:1001px)");
  return (
    <div className="App">
      <Navbar />
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
                <div
                  style={{
                    marginTop: "4rem",
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
