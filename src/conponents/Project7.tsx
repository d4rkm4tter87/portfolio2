import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/preview/cityDating2.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project7 = () => {
  const context = useContext(LanguageContext);
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        City Dating
      </Center>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="40px"
        >
          {context?.language === "de"
            ? `Auf City Dating (Name geändert) können Paare, Solodamen und Herren
          Treffen vereinbaren. Außerdem ist dies ein Zentrum für die
          Organisation von Events in mehreren Locations.`
            : `City Dating (name changed) allows couples, single women, and men to arrange meetings. It's also a hub for organizing events at multiple locations.`}
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project7;
