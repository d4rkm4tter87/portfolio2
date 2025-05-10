import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/preview/mine-pusher-preview.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project12 = () => {
  const context = useContext(LanguageContext);
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Mine Pusher
      </Center>
      <Center>
        <Link href="https://mine-pusher.netlify.app/" isExternal>
          mine-pusher.netlify.app
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
          marginTop="40px"
        >
          {context?.language === "de"
            ? `Mine Pusher ist ein Spiel, bei dem der Spieler eine Mine ausbauen
          muss, um den Highscore zu knacken. Mit jeder Aktion steigt die
          Wahrscheinlichkeit, eine Explosion auszulösen. Es gibt sechs
          verschiedene Aktionen. Fünf davon haben unterschiedliche
          Punktesteigerungsraten und unterschiedliche
          Explosionswahrscheinlichkeiten. Die letzte Aktion dient dazu, die
          Punkte in den Highscore zu übernehmen. Der Spieler muss sich also bei
          jedem Schritt entscheiden, ob er die Punkte im Highscore speichern
          oder das Risiko eingehen möchte, die Punkte zu erhöhen, aber
          möglicherweise eine Explosion auszulösen.`
            : `Mine Pusher is a game in which the player must expand a mine
to beat the high score. With each action, the
probability of triggering an explosion increases. There are six
different actions. Five of them have different
high score point increase rates and different
explosion probabilities. The last action is used to add the
points to the high score. Therefore, the player must decide at every step whether to save the points in the high score
or take the risk of increasing the points but
possibly triggering an explosion.`}
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project12;
