import { Grid, GridItem } from "@chakra-ui/react";
import ProjectGrid from "./conponents/ProjectGrid";
// import { useState } from "react";
import Nav from "./conponents/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./conponents/Home";
import Aktuelles from "./conponents/Aktuelles";
import Project1 from "./conponents/Project1";
import Project10 from "./conponents/Project10";
import Project2 from "./conponents/Project2";
import Project3 from "./conponents/Project3";
import Project4 from "./conponents/Project4";
import Project5 from "./conponents/Project5";
import Project6 from "./conponents/Project6";
import Project7 from "./conponents/Project7";
import Project8 from "./conponents/Project8";
import Project9 from "./conponents/Project9";
import Project11 from "./conponents/Project11";
import Project12 from "./conponents/Project12";
import Project14 from "./conponents/Project14";
import Project13 from "./conponents/Project13";
// import gerImg from "./assets/german_flag.png";
// import gerImg2 from "./assets/german_flag_active.png";
// import usImg from "./assets/american_flag.png";
// import usImg2 from "./assets/american_flag_active.png";

export default function App() {
  // const [gerFlag, setGerFlag] = useState(false);
  // const [usFlag, setUsFlag] = useState(false);
  return (
    <>
      <div id="magic"></div>
      <div id="magic2">Joschka Zimdars - Web Developer</div>
      <div className="bg"></div>
      <div className="background">
        {/* <div className="language">
          <HStack>
            <img
              className="flag"
              src={!gerFlag ? gerImg : gerImg2}
              width="35px"
              onMouseOver={() => setGerFlag(true)}
              onMouseOut={() => setGerFlag(false)}
              onClick={() => console.log("ger")}
            />
            <img
              className="flag"
              src={!usFlag ? usImg : usImg2}
              width="35px"
              onMouseOver={() => setUsFlag(true)}
              onMouseOut={() => setUsFlag(false)}
              onClick={() => console.log("us")}
            />
          </HStack>
        </div> */}
        <div className="wrapper">
          <Grid
            templateAreas={{
              base: `"nav" "main"`,
            }}
          >
            <GridItem area="nav">
              <Nav />
            </GridItem>
            <GridItem area="main">
              <Routes>
                <Route path="/" element={<ProjectGrid />} />
                <Route path="/recently" element={<Aktuelles />} />
                <Route path="/about" element={<Home />} />
                <Route path="/projects/tsumego-hero" element={<Project1 />} />
                <Route path="/projects/trailers4u" element={<Project2 />} />
                <Route path="/projects/go-bremen" element={<Project3 />} />
                <Route
                  path="/projects/petersen-hardraht-pruggmayer"
                  element={<Project4 />}
                />
                <Route path="/projects/betaville-ny" element={<Project5 />} />
                <Route
                  path="/projects/betaville-bremen"
                  element={<Project6 />}
                />
                <Route path="/projects/city-dating" element={<Project7 />} />
                <Route path="/projects/airlift" element={<Project8 />} />
                <Route path="/projects/staiker-equity" element={<Project9 />} />
                <Route
                  path="/projects/staiker-reviews"
                  element={<Project10 />}
                />
                <Route path="/projects/task-tracker" element={<Project11 />} />
                <Route path="/projects/mine-pusher" element={<Project12 />} />
                <Route
                  path="/projects/code-analytics"
                  element={<Project13 />}
                />
                <Route path="/projects/tagster" element={<Project14 />} />
                <Route
                  path="*"
                  element={<h1 className="not-found">Page Not Found</h1>}
                />
              </Routes>
            </GridItem>
          </Grid>
        </div>
      </div>
      <div className="footer1">
        <div className="footer2">
          Joschka Zimdars © {new Date().getFullYear()}
          <br />
          joschka.zimdars@googlemail.com
        </div>
      </div>
    </>
  );
}
