import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/preview/betaville-bremen.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project6 = () => {
  const context = useContext(LanguageContext);
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
          {context?.language === "de"
            ? `Betaville in Bremen verfolgt das gleiche Ziel, wie das Projekt in New
          York. Hierbei lag der Fokus allerdings in der Augmented Reality. Das
          bedeutet, dass der Benutzer mit einem Smartphone zu dem realen Ort des
          Bauvorhabens gehen kann und den virtuellen Vorschlag über die Kamera
          im Smartphone betrachten kann.`
            : `Betaville in Bremen pursues the same goal as the project in New York. However, the focus here was on augmented reality. This means that users can go to the real site of the construction project with a smartphone and view the virtual proposal via the smartphone's camera.`}

          <br />
          <br />
          {context?.language === "de"
            ? `Die hierfür programmierte Website beinhaltet Usermanagement, Google
          Maps und diverse Flash-Applets. Es wurde außerdem die Server-Client
          Kommunikation für Smartphones zur Darstellung der Augmented Reality in
          JSON entwickelt.`
            : `The website programmed for this purpose includes user management, Google Maps, and various Flash applets. Server-client communication for smartphones was also developed to display augmented reality in JSON.`}
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project6;
