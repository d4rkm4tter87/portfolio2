import { Center, Text, Image, HStack, Link } from "@chakra-ui/react";
import preview1 from "../assets/staiker-reviews1.png";
import preview2 from "../assets/staiker-reviews2.png";

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
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Dies ist eine Webseite zur Dokumentation und Analyse von Partien in
          dem Brettspiel Go. Spieler die lange Zeit auf der selben Spielstärke
          stecken bleiben haben oft das Problem, dass sie aus den Fehlern die
          sie gemacht haben entweder keine Schlussfolgerungen ziehen können oder
          sie nicht bemerken. Diese Anwendung ist konzipiert, um in eine tiefe
          Einblicke und Erkenntnisse zu gewinnen und bietet dafür alle nötigen
          Werkzeuge. Es können Partien hochgeladen und kommentiert werden.
          Dadurch kann der Spieler seine eigenen Erkenntnisse gewinnen und
          außerdem durch die Kommentare anderer Spieler die Erkenntnisse
          vertiefen.
        </Text>
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Des Weiteren können aus den dokumentierten Partien
          Multiple-Choice-Probleme erstellt und automatisch generiert werden.
          Somit können alle Spieler das gelernte Wissen abfragen und
          verfestigen. <br />
          <br />
          Dies war der Vorgänger von Tsumego Hero. Durch das Verwalten dieser
          Webseite hat sich für mich herauskristallisiert was wirklich wichtig
          ist in dem Präsentieren von Go-relevanten Inhalten, sodass ich diese
          Tätigkeit viele Jahre zur Nebentätigkeit und mindestens ein Jahr zum
          Hauptberuf gemacht habe.
        </Text>
      </HStack>
      <HStack>
        <Center>
          <Image src={preview1} padding="10px" width="75%" />
        </Center>
        <Center>
          <Image src={preview2} padding="10px" width="75%" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project10;
