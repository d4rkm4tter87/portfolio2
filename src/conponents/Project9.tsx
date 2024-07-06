import { Center, Heading, Text, Image, HStack, Link } from "@chakra-ui/react";
import preview1 from "../assets/staiker-equity1.png";
import preview2 from "../assets/staiker-equity2.png";

const Project9 = () => {
  return (
    <div>
      <Center>
        <Heading size="lg" padding="2px">
          Staiker Equity Trainer
        </Heading>
      </Center>
      <Center>
        <Link href="http://staikerequity.com" isExternal>
          staikerequity.com
        </Link>
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Dies ist eine Trainings-App zum lernen von Gewinnwahrscheinlichkeiten
          im Texas Hold'em Poker. Im Poker ist es eine grundlegende Fähigkeit zu
          wissen, wie wahrscheinlich es für einen Spieler mit einer bestimmten
          Hand ist zu gewinnen. Alle weiterführenden Entscheidungen basieren auf
          dieser Schätzung. Bei der Gegenüberstellung mit einem Mitspieler kann
          die gewinnwahrscheinlichkeit in Prozent ausgedrückt werden. Die
          Gewinnwahrscheinlichkeit in Kombination mit anderen Faktoren, wie zum
          Beispiel die Größe des Pots, die Anzahl an Spielen die noch nicht
          gefoldet haben und weiteren fließen in die Entscheidung ein, welche
          Aktion der Spieler als nächstes trifft.
        </Text>
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Die Entscheidungen sind hierbei Call, Raise, Bet oder Fold. Es gibt
          somit viele Faktoren, die eine Entscheidung beeinflussen, diese App
          hat den Fokus jedoch auf dem Schätzen der Gewinnwahrscheinlichkeit in
          Prozent, welches das Fundament sein kann für weitere Erlernbare
          Fähigkeiten. Die Handkarten und Tischkarten werden zufällig generiert
          und der Spieler muss dann raten wie wahrscheinlich es ist, in dieser
          Situation zu gewinnen. Es können Szenarios gewählt werden aus dem
          Prefolp (keine offengelegten Karten), Flop (drei offengelegte Karten),
          Turn (vier offengeletgte Karten) und River (fünf offengelegte Karten).
        </Text>
      </HStack>
      <HStack>
        <Center>
          <Image src={preview2} padding="10px" width="75%" />
        </Center>
        <Center>
          <Image src={preview1} padding="10px" width="85%" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project9;
