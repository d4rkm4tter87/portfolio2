import preview1 from "../assets/preview/th1.webp";
import preview2 from "../assets/preview/th2.webp";
import { Text, Image, Center, Link, SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project1 = () => {
  const context = useContext(LanguageContext);
  return (
    <div>
      <Center fontSize="2xl" className="mirror2" paddingBottom="10px">
        Tsumego Hero
      </Center>
      <Center>
        <Link href="https://tsumego-hero.com/" isExternal>
          tsumego-hero.com
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
            ? `In dem Brettspiel Go sind Tsumegos Probleme, bei denen es durch eine
          gute Zugfolge möglich ist, den Status einer Gruppe auf lebendig oder
          tot zu verändern. Tsumego Hero ist die meistbesuchte Webseite Europas
          in diesem Gebiet. Über einen Zeitraum von inzwischen 6 Jahren habe ich
          zusammen mit einer großen Community diese Webseite stetig um Inhalte
          und Funktionen erweitert. Tsumego Hero bietet inzwischen über 12.000
          dieser Probleme an. `
            : `In the board game Go, Tsumegos are problems in
          which, through a good sequence of moves, it is possible to change the
          status of a group to alive or dead. Tsumego Hero is Europe's most
          visited website in this area. Over a period of six years, I, together
          with a large community, have continuously expanded this website with
          content and features. Tsumego Hero now offers over 11,000 of these
          problems.`}
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          {context?.language === "de"
            ? `Der Ansatz, Go Rätsel mit Gaming-Komponenten zu kombinieren war ein
          weltweiter Vorreiter in diesem Gebiet und meine hier umgesetzten Ideen
          wurden oft kopiert. Das Lösen der Probleme vermittelt dadurch den
          Nutzern eine unvergessliche Erfahrung durch ein Level-System welches
          Fähigkeiten freischaltet (Hero Powers), ein Rating System zum
          vergleich der Spielstärke mit anderen Nutzern, Lösen auf Zeit,
          Erfolgssystem (Achievements), die Möglichkeit eigene Probleme zu
          veröffentlichen und ein Diskussionsforum.`
            : `The approach of combining Go puzzles with gaming components was a global pioneer in this field, and my ideas implemented here have been widely copied. Solving the problems provides users with an unforgettable experience through a level system that unlocks skills (Hero Powers), a rating system for comparing playing strength with other users, timed solving, an achievement system, the ability to publish their own problems, and a discussion forum.`}
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

export default Project1;
