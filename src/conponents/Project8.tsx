import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/preview/airlift1.webp";
import preview2 from "../assets/preview/airlift2.webp";

const Project8 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Auswerteroutine für Airlift-Reaktoren
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
          marginTop="7px"
        >
          Im Rahmen meiner Bachelor-Thesis wurde eine Webanwendung zur
          Datenverwaltung in der Verfahrenstechnik für das IUV-Bremen
          entwickelt. Es handelt dabei um Vorgänge in Airlift-Reaktoren die
          gemessen und ausgewertet werden. Airlift-Reaktoren untersuchen das
          Verhalten von Stoffen unter bestimmten Bedingungen, wie zum Beispiel
          Mischverhältnisse und Temperaturen. Die Erkenntnisse können in
          Korrelationsgleichungen ausgedrückt werden, sodass Ergebnisse in
          zukünftigen Experimenten vorhergesehen werden können.
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          Es wurde untersucht, welche Probleme in den zur Zeit verwendeten
          Programmen auftreten und wie durch eine neue Entwicklung ein Ausgleich
          geschaffen werden kann. Dabei lag der Schwerpunkt auf der Verbesserung
          von Übersichtlichkeit und Funktionalität. Durch neue Visualisierungen
          haben die Benutzer eine Möglichkeit erhalten, neue Erkenntnisse zu
          gewinnen.
        </Text>
      </SimpleGrid>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Center>
          <Image src={preview1} padding="10px" width="75%" />
        </Center>
        <Center>
          <Image src={preview2} padding="10px" width="75%" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project8;
