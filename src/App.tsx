import { Grid, GridItem } from "@chakra-ui/react";
import ProjectGrid from "./conponents/ProjectGrid";
import Nav from "./conponents/Nav";
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
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <div id="magic"></div>
      <div id="magic2">Joschka Zimdars - Web Developer</div>
      <div className="bg"></div>
      <div className="background">
        <div className="wrapper">
          <Grid
            templateAreas={{
              base: `"nav" "main"`,
            }}
          >
            <GridItem area="nav">
              <Nav setPage={setPage} page={page} />
            </GridItem>
            <GridItem area="main">
              {page === "home" && <ProjectGrid setPage={setPage} />}
              {page === "aktuelles" && <Aktuelles />}
              {page === "about" && <Home />}
              {page === "tsumego-hero" && <Project1 />}
              {page === "trailers4u" && <Project2 />}
              {page === "go-bremen" && <Project3 />}
              {page === "petersen-hardraht-pruggmayer" && <Project4 />}
              {page === "airlift" && <Project8 />}
              {page === "betaville-ny" && <Project5 />}
              {page === "betaville-bremen" && <Project6 />}
              {page === "staiker-equity" && <Project9 />}
              {page === "staiker-reviews" && <Project10 />}
              {page === "city-dating" && <Project7 />}
              {page === "task-tracker" && <Project11 />}
              {page === "mine-pusher" && <Project12 />}
              {page === "code-analytics" && <Project13 />}
              {page === "tagster" && <Project14 />}
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
