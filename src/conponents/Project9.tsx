import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/preview/staiker-equity1.webp";
import preview2 from "../assets/preview/staiker-equity2.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project9 = () => {
  const context = useContext(LanguageContext);
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
          {context?.language === "de"
            ? `Dies ist eine Trainings-App zum Lernen von Gewinnwahrscheinlichkeiten
          im Texas Hold'em Poker. Im Poker ist es eine wichtige Fähigkeit zu
          wissen, wie wahrscheinlich es ist, unter bestimmten Bedingungen zu
          gewinnen. Alle weiterführenden Entscheidungen basieren auf dieser
          Schätzung. Bei der Gegenüberstellung mit einem Mitspieler kann die
          Gewinnwahrscheinlichkeit in Prozent ausgedrückt werden. Die
          Gewinnwahrscheinlichkeit in Kombination mit anderen Faktoren fließt in
          die Entscheidung ein, welche Aktion der Spieler als nächstes trifft.
          Die Entscheidungen sind hierbei Call, Raise, Bet oder Fold.`
            : `This is a training app for learning winning probabilities
in Texas Hold'em poker. In poker, it is an important skill to
know how likely it is to win under certain conditions.
All subsequent decisions are based on this
estimate. When compared with another player, the
probability of winning can be expressed as a percentage. The
probability of winning, in combination with other factors, influences
the decision about the player's next action.
The decisions here are call, raise, bet, or fold.`}
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          {context?.language === "de"
            ? `Es gibt viele Faktoren, die eine Entscheidung beeinflussen, bei dieser
          App liegt der Fokus auf dem Schätzen der Gewinnwahrscheinlichkeit in
          Prozent, welches das Fundament sein kann für weitere Erlernbare
          Fähigkeiten. Die Handkarten und Tischkarten werden zufällig generiert
          und der Spieler muss dann schätzen wie wahrscheinlich es ist, in
          dieser Situation zu gewinnen. Es können Szenarios gewählt werden aus
          dem Prefolp (keine Karten auf dem Tisch), Flop (drei Karten auf dem
          Tisch) und Turn (vier Karten auf dem Tisch).`
            : `There are many factors that influence a decision. This app focuses on estimating the probability of winning in percent, which can be the foundation for further skills. The hand and table cards are randomly generated, and the player must then estimate the probability of winning in that situation. Scenarios can be chosen from the preflop (no cards on the table), the flop (three cards on the table), and the turn (four cards on the table).`}
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
