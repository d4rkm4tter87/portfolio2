import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import ProjectGrid from "./conponents/ProjectGrid";
import { useEffect, useRef, useState } from "react";
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
import gerImg from "./assets/german_flag.png";
import gerImg2 from "./assets/german_flag_active.png";
import usImg from "./assets/american_flag.png";
import usImg2 from "./assets/american_flag_active.png";

function App() {
  const videoRef = useRef();
  const [gerFlag, setGerFlag] = useState(false);
  const [usFlag, setUsFlag] = useState(false);
  useEffect(() => {
    videoRef.current.playbackRate = 0.3;
  }, [videoRef]);
  return (
    <>
      <div id="magic"></div>
      <div className="bg">
        <video
          ref={videoRef}
          src="http://joschkazimdars.com/videos/4K_2(1).mp4"
          autoPlay={true}
          muted={true}
          loop
        />
      </div>
      <div className="background">
        <div className="language">
          <HStack>
            <img
              className="flag"
              src={!gerFlag ? gerImg : gerImg2}
              width="35px"
              onMouseOver={() => setGerFlag(true)}
              onMouseOut={() => setGerFlag(false)}
            />
            <img
              className="flag"
              src={!usFlag ? usImg : usImg2}
              width="35px"
              onMouseOver={() => setUsFlag(true)}
              onMouseOut={() => setUsFlag(false)}
            />
          </HStack>
        </div>
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
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<ProjectGrid />} />
                <Route path="code" element={<Aktuelles />} />
                <Route path="aktuelles" element={<Aktuelles />} />
                <Route path="projects/tsumego-hero" element={<Project1 />} />
                <Route path="projects/trailers4u" element={<Project2 />} />
                <Route path="projects/go-bremen" element={<Project3 />} />
                <Route
                  path="projects/petersen-hardraht-pruggmayer"
                  element={<Project4 />}
                />
                <Route path="projects/betaville-ny" element={<Project5 />} />
                <Route
                  path="projects/betaville-bremen"
                  element={<Project6 />}
                />
                <Route path="projects/city-dating" element={<Project7 />} />
                <Route path="projects/airlift" element={<Project8 />} />
                <Route path="projects/staiker-equity" element={<Project9 />} />
                <Route
                  path="projects/staiker-reviews"
                  element={<Project10 />}
                />

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
          Joschka Zimdars © 2024
          <br />
          joschka.zimdars@googlemail.com
        </div>
      </div>
    </>
  );
}

export default App;
