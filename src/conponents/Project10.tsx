import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/preview/staiker-reviews1.webp";
import preview2 from "../assets/preview/staiker-reviews2.webp";

const Project10 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2" paddingBottom="10px">
        Staiker Go Reviews
      </Center>
      <Center>
        <Link href="http://staiker.de" isExternal>
          staiker.de
        </Link>
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
          Dies ist eine Webseite zur Dokumentation und Analyse von Partien in
          dem Brettspiel Go. Spieler die lange Zeit auf der selben Spielstärke
          stecken bleiben haben oft das Problem, dass sie aus den Fehlern die
          sie gemacht haben entweder keine Schlussfolgerungen ziehen können oder
          sie nicht bemerken. Diese Anwendung ist konzipiert, um Einblicke und
          Erkenntnisse zu gewinnen und bietet dafür alle nötigen Werkzeuge. Es
          können Partien hochgeladen und kommentiert werden. Dadurch kann der
          Spieler seine Wissen erweitern und außerdem durch die Kommentare
          anderer Spieler die Erkenntnisse vertiefen.
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          Des Weiteren können aus den dokumentierten Partien Multiple-Choice
          Probleme erstellt und automatisch generiert werden. Somit können alle
          Spieler das gelernte Wissen abfragen und verfestigen. Dies war der
          Vorgänger von Tsumego Hero. Durch das Verwalten dieser Webseite wurde
          mir klar was wirklich wichtig ist in dem Präsentieren von
          Go-relevanten Inhalten, sodass ich diese Tätigkeit viele Jahre als
          Nebentätigkeit ausgeübt habe.
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

export default Project10;
