import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/preview/staiker-reviews1.webp";
import preview2 from "../assets/preview/staiker-reviews2.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project10 = () => {
  const context = useContext(LanguageContext);
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
          {context?.language === "de"
            ? `Dies ist eine Webseite zur Dokumentation und Analyse von Partien in
          dem Brettspiel Go. Spieler die lange Zeit auf der selben Spielstärke
          stecken bleiben haben oft das Problem, dass sie aus den Fehlern die
          sie gemacht haben entweder keine Schlussfolgerungen ziehen können oder
          sie nicht bemerken. Diese Anwendung ist konzipiert, um Einblicke und
          Erkenntnisse zu gewinnen und bietet dafür alle nötigen Werkzeuge. Es
          können Partien hochgeladen und kommentiert werden. Dadurch kann der
          Spieler seine Wissen erweitern und außerdem durch die Kommentare
          anderer Spieler die Erkenntnisse vertiefen.`
            : `This is a website for documenting and analyzing games in
the board game Go. Players who remain at the same level for a long time often have the problem that they either cannot draw conclusions from the mistakes they have made or
do not notice them. This application is designed to gain insights and
knowledge and provides all the necessary tools for this. Games can be
uploaded and commented on. This allows the player to expand their knowledge and also deepen their understanding through the comments of
other players.`}
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          {context?.language === "de"
            ? `Des Weiteren können aus den dokumentierten Partien Multiple-Choice
          Probleme erstellt und automatisch generiert werden. Somit können alle
          Spieler das gelernte Wissen abfragen und verfestigen. Dies war der
          Vorgänger von Tsumego Hero. Durch das Verwalten dieser Webseite wurde
          mir klar was wirklich wichtig ist in dem Präsentieren von
          Go-relevanten Inhalten, sodass ich diese Tätigkeit viele Jahre als
          Nebentätigkeit ausgeübt habe.`
            : `Furthermore, multiple-choice problems can be created and automatically generated from the documented games. This allows all players to test and reinforce their learned knowledge. This was the predecessor of Tsumego Hero. Managing this website made me realize what is truly important in presenting Go-related content, so I pursued this activity as a side job for many years.

`}
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
