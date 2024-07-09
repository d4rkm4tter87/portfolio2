import { Center, Text, Image, HStack } from "@chakra-ui/react";
import preview from "../assets/cityDating2.png";

const Project7 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        City Dating
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="40px">
          Auf City Dating (Name geändert) können Paare, Solodamen und Herren
          Treffen vereinbaren. Außerdem ist dies ein Zentrum für die
          Organisation von Events in mehreren Locations.
        </Text>
        <Center width="50%">
          <Image src={preview} padding="10px" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project7;
