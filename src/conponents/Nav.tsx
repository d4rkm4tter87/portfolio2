import { HStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <HStack className="nav">
      <NavLink to="/projects">
        <p className="mirror2 font3">Projekte</p>
      </NavLink>
      {/* <NavLink to="/code">
        <p className="mirror2 font3">Code</p>
      </NavLink> */}
      <NavLink to="/aktuelles">
        <p className="mirror2 font3">Aktuelles</p>
      </NavLink>
      <NavLink to="/">
        <p className="mirror2 font3">Über mich</p>
      </NavLink>
    </HStack>
  );
};

export default Nav;
