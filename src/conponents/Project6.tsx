import { Center, Heading, Text, Image, HStack } from "@chakra-ui/react";
import preview from "../assets/betaville-bremen.png";

const Project6 = () => {
  return (
    <div>
      <Center>
        <Heading size="lg" padding="2px">
          Betaville Bremen
        </Heading>
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Betaville in Bremen verfolgt das gleiche Ziel, wie das Projekt in New
          York. Hierbei lag der Fokus im Gegensatz zu der New York University in
          der Augmented Reality. Das bedeutet, dass der Benutzer mit einem
          Smartphone zu dem realen Ort des Bauvorha- bens gehen kann und den
          virtuellen Vorschlag über ein Smartphone betrachten kann.
          <br />
          <br />
          Die hierfür programmierte Website umfässt Usermanagement, Einbindung
          von Google Maps und diverse Flash-Applets. Es wurde außerdem die
          Server-Client-Kommunikation für Smartphones zur Darstellung der
          Augmented Reality in JSON programmiert.
        </Text>
        <Center width="50%">
          <Image src={preview} padding="10px" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project6;
