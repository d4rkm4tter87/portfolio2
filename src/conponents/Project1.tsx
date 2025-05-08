import preview1 from "../assets/preview/th1.webp";
import preview2 from "../assets/preview/th2.webp";
import { Text, Image, Center, Link, SimpleGrid } from "@chakra-ui/react";
const Project1 = () => {
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
          In dem Brettspiel Go sind Tsumegos Probleme, bei denen es durch eine
          gute Zugfolge möglich ist, den Status einer Gruppe auf lebendig oder
          tot zu verändern. Tsumego Hero ist die meistbesuchte Webseite Europas
          in diesem Gebiet. Über einen Zeitraum von inzwischen 6 Jahren habe ich
          zusammen mit einer großen Community diese Webseite stetig um Inhalte
          und Funktionen erweitert. Tsumego Hero bietet inzwischen über 11.000
          dieser Probleme an.
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          Der Ansatz, Go Rätsel mit Gaming-Komponenten zu kombinieren war ein
          weltweiter Vorreiter in diesem Gebiet und meine hier umgesetzten Ideen
          wurden oft kopiert. Das Lösen der Probleme vermittelt dadurch den
          Nutzern eine unvergessliche Erfahrung durch ein Level-System welches
          Fähigkeiten freischaltet (Hero Powers), ein Rating System zum
          vergleich der Spielstärke mit anderen Nutzern, Lösen auf Zeit,
          Erfolgssystem (Achievements), die Möglichkeit eigene Probleme zu
          veröffentlichen und ein Diskussionsforum.
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
