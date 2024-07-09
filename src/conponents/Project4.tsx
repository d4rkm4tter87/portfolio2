import { Center, Text, Image, HStack, Link } from "@chakra-ui/react";
import preview1 from "../assets/petersen1.png";
import preview2 from "../assets/petersen2.png";

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
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Peterse-Hardraht-Pruggmayer eine Anwaltskanzlei mit Standorten in
          Chemnitz, Dresden und Leipzig. Sie ist damit die größte
          Wirtschaftskanzlei Sachsens mit einem Beratungsspektrum für
          Mittelstand, Freiberufler und Kommunen.
          <br />
          <br />
          In meiner Zeit bei der Webagentur KonVis war dies eine von vielen
          Webseiten die ich in Wordpress umgesetzt habe.
        </Text>
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Auf eine großen Anzahl an Seiten können Inhalte über eine
          Administrationsumgebung vom Kunden selbständig geändert werden.
          Während man in Wordpress mit einer Auswahl an Themes eine Webseite
          schnell erstellen kann haben wir für diesen Kunden Design und Struktur
          nach den Wünschen des Kunden entworfen. Auf der Webseite befinden sich
          detaillierte Darstellungen des Teams und der Schwerpunkte auf über 100
          Seiten. Außerdem gibt es einen Newsticker, Seiten über
          Karrieremöglichkeiten und Beschreibungen über die Standorte. Während
          die Mehrheit meiner Projekte durch mich als Full-Stack-Entwickler
          erstellt wurden war dies eine Team-Arbeit in der ich für die
          Überführung der Inhalt- und Designkonzepte in Wordpress zuständig war.
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

export default Project4;
