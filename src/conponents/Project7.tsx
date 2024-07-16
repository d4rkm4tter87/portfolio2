import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/cityDating2.png";

const Project7 = () => {
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
          Auf City Dating (Name geändert) können Paare, Solodamen und Herren
          Treffen vereinbaren. Außerdem ist dies ein Zentrum für die
          Organisation von Events in mehreren Locations.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project7;
