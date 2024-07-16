import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/betaville-bremen.png";

const Project6 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Betaville Bremen
      </Center>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Text
          paddingX="20px"
          textAlign="justify"
          marginBottom="auto"
          marginTop="7px"
        >
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
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project6;
