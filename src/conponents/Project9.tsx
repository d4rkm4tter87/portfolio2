import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/staiker-equity1.png";
import preview2 from "../assets/staiker-equity2.png";

const Project9 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2" paddingBottom="10px">
        Staiker Equity Trainer
      </Center>
      <Center>
        <Link href="http://staikerequity.com" isExternal>
          staikerequity.com
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
          Dies ist eine Trainings-App zum lernen von Gewinnwahrscheinlichkeiten
          im Texas Hold'em Poker. Im Poker ist es eine wichtige Fähigkeit zu
          wissen, wie wahrscheinlich es ist unter bestimmten Bedingeungen zu
          gewinnen. Alle weiterführenden Entscheidungen basieren auf dieser
          Schätzung. Bei der Gegenüberstellung mit einem Mitspieler kann die
          Gewinnwahrscheinlichkeit in Prozent ausgedrückt werden. Die
          Gewinnwahrscheinlichkeit in Kombination mit anderen Faktoren fließt in
          die Entscheidung ein, welche Aktion der Spieler als nächstes trifft.
          Die Entscheidungen sind hierbei Call, Raise, Bet oder Fold.
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          Es gibt viele Faktoren, die eine Entscheidung beeinflussen, bei dieser
          App liegt der Fokus auf dem Schätzen der Gewinnwahrscheinlichkeit in
          Prozent, welches das Fundament sein kann für weitere Erlernbare
          Fähigkeiten. Die Handkarten und Tischkarten werden zufällig generiert
          und der Spieler muss dann schätzen wie wahrscheinlich es ist, in
          dieser Situation zu gewinnen. Es können Szenarios gewählt werden aus
          dem Prefolp (keine Karten auf dem Tisch), Flop (drei Karten auf dem
          Tisch), Turn (vier Karten auf dem Tisch) und River (fünf Karten auf
          dem Tisch).
        </Text>
      </SimpleGrid>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Center>
          <Image src={preview2} padding="10px" width="75%" />
        </Center>
        <Center>
          <Image src={preview1} padding="10px" width="75%" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project9;
