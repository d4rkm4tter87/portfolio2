import { Center, Heading, Text, Image, HStack } from "@chakra-ui/react";
import preview1 from "../assets/airlift1.png";
import preview2 from "../assets/airlift2.png";

const Project8 = () => {
  return (
    <div>
      <Center>
        <Heading size="lg" padding="2px">
          Auswerteroutine für Airlift-Reaktoren
        </Heading>
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Im Rahmen meiner Bachelor-Thesis wurde eine Webanwendung zur
          Datenverwaltung in der Verfahrenstechnik für das IUV-Bremen
          entwickelt. Es handelt dabei um Vorgänge in Airlift-Reaktoren die
          gemessen und ausgewertet werden. Airlift-Reaktoren untersuchen das
          Verhalten von Stoffen unter bestimmten Bedingungen wie z.B.
          Mischverhältnisse und Temparaturen. Die Erkenntnisse können in
          Korrelationsgleichungen ausgedrückt werden, sodass Ergebnisse un
          zukünftigen Experimenten vorhergesehen werden können.
        </Text>
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Es wurde untersucht, welche Probleme in den zur Zeit verwendeten
          Programmen auftreten und wie durch eine neue Entwicklung ein Ausgleich
          geschaffen werden kann. Dabei lag der Schwerpunkt auf der Verbesserung
          von Übersichtlichkeit und Funktionalität. Durch neue Visualisierungen
          haben die Benutzer eine Möglichkeit erhalten, neue Erkenntnisse zu
          gewinnen.
        </Text>
      </HStack>
      <HStack padding="15px">
        <Center>
          <Image src={preview1} padding="10px" width="90%" />
        </Center>
        <Center>
          <Image src={preview2} padding="10px" width="90%" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project8;
