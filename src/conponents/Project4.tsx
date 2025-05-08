import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/preview/petersen1.webp";
import preview2 from "../assets/preview/petersen2.webp";

const Project4 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2" paddingBottom="10px">
        Petersen Hardraht Pruggmayer
      </Center>
      <Center>
        <Link href="https://www.petersenhardrahtpruggmayer.de/" isExternal>
          petersenhardrahtpruggmayer.de
        </Link>
      </Center>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Text
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
          textAlign="justify"
        >
          Petersen-Hardraht-Pruggmayer ist eine Anwaltskanzlei mit Standorten in
          Chemnitz, Dresden und Leipzig. Sie ist damit die größte
          Wirtschaftskanzlei Sachsens. Petersen-Hardraht-Pruggmayer hat ein
          Beratungsspektrum von Mittelstand über Freiberufler, bis hin zu und
          Kommunen. In meiner Zeit bei der Webagentur KonVis war dies eine von
          vielen Webseiten die ich in Wordpress umgesetzt habe. Auf einer großen
          Anzahl an Seiten können Inhalte über eine Administrationsumgebung vom
          Kunden selbständig geändert werden. Während man in Wordpress mit einer
          Auswahl an Themes eine Webseite schnell erstellen kann haben wir für
          diesen Kunden Design und Struktur nach den spezifischen Wünschen des
          Kunden entworfen.
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          Auf der Webseite befinden sich detaillierte Darstellungen des Teams
          und der Schwerpunkte auf über 100 Seiten. Außerdem gibt es einen
          Newsticker, Seiten über Karrieremöglichkeiten und Beschreibungen über
          die Standorte. Während die Mehrheit meiner anderen Projekte durch mich
          als Full Stack Entwickler erstellt wurden war dies eine Team-Arbeit in
          der ich für die Überführung der Inhalt- und Designkonzepte in
          Wordpress zuständig war.
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

export default Project4;
