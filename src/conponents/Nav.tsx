import { HStack } from "@chakra-ui/react";
import NavButton from "./NavButton";

type NavProps = {
  page: string;
  setPage: (page: string) => void;
};

const Nav = ({ setPage, page }: NavProps) => {
  return (
    <HStack className="nav">
      <NavButton
        setPage={setPage}
        page={page}
        pathName="home"
        name="Projekte"
      />
      <NavButton
        setPage={setPage}
        page={page}
        pathName="aktuelles"
        name="Aktuelles"
      />
      <NavButton
        setPage={setPage}
        page={page}
        pathName="about"
        name="Über mich"
      />
    </HStack>
  );
};

export default Nav;
