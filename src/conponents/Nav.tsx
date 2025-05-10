import { HStack } from "@chakra-ui/react";

import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";

const Nav = () => {
  const location = useLocation();
  const context = useContext(LanguageContext);
  return (
    <HStack className="nav">
      <NavLink to="/">
        <p
          className={
            location.pathname === "/" ||
            location.pathname === "/projects/tsumego-hero" ||
            location.pathname === "/projects/trailers4u" ||
            location.pathname === "/projects/go-bremen" ||
            location.pathname === "/projects/petersen-hardraht-pruggmayer" ||
            location.pathname === "/projects/airlift" ||
            location.pathname === "/projects/city-dating" ||
            location.pathname === "/projects/betaville-ny" ||
            location.pathname === "/projects/betaville-bremen" ||
            location.pathname === "/projects/staiker-equity" ||
            location.pathname === "/projects/staiker-reviews"
              ? "mirror-active"
              : "mirror"
          }
        >
          {context?.language === "de" ? "Projekte" : "Projects"}
        </p>
      </NavLink>
      <NavLink to="/recently">
        <p
          className={
            location.pathname === "/recently" ? "mirror-active" : "mirror"
          }
        >
          {context?.language === "de" ? "Aktuelles" : "Recent work"}
        </p>
      </NavLink>
      <NavLink to="/about">
        <p
          className={
            location.pathname === "/about" ? "mirror-active" : "mirror"
          }
        >
          {context?.language === "de" ? "Über mich" : "About"}
        </p>
      </NavLink>
    </HStack>
  );
};

export default Nav;
