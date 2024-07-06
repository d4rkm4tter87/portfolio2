import preview1 from "../assets/th1.png";
import preview2 from "../assets/th2.png";
import {
  Text,
  Image,
  Heading,
  Center,
  HStack,
  Spinner,
  Link,
} from "@chakra-ui/react";
const Project1 = () => {
  return (
    <div>
      <Center>
        <Heading size="lg" padding="10px">
          Tsumego Hero
        </Heading>
      </Center>
      <Center>
        <Link href="https://tsumego-hero.com/" isExternal>
          tsumego-hero.com
        </Link>
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          In dem Brettspiel Go sind Tsumegos Probleme, bei denen es durch eine
          gute Zugfolge möglich ist, den Status einer Gruppe auf lebendig oder
          tot zu verändern. Tsumego Hero ist die meistbesuchte Webseite Europas
          in diesem Gebiet. Über einen Zeitraum von inzwischen 6 Jahren habe ich
          zusammen mit einer großen Community diese Webseite stetig um Inhalte
          und Funktionen erweitert. Tsumego Hero bietet inzwischen über
          elftausend dieser Probleme an.
        </Text>
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Der Ansatz, Go Rätsel mit Gaming Komponenten zu kombinieren war ein
          weltweiter Vorreiter in diesem Gebiet und die Ideen der Webseite
          wurden oft kopiert. Das Lösen der Probleme vermittelt den Nutzern eine
          unvergessliche Erfahrung durch ein Level-System welches Fähigkeiten
          freischaltet (Hero Powers), ein Rating System zum vergleich der
          Spielstärke mit anderen Nutzern, Lösen auf Zeit, Erfolgssystem
          (Achievements), Möglichkeit eigene Probleme zu veröffentlichen und ein
          Diskussionsforum.
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

export default Project1;
