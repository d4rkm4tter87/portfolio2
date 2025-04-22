import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/mine-pusher-preview.png";

const Project12 = () => {
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
          Mine Pusher ist ein Spiel, bei dem der Spieler eine Mine ausbauen
          muss, um den Highscore zu knacken. Mit jeder Aktion steigt die
          Wahrscheinlichkeit, eine Explosion auszulösen. Es gibt sechs
          verschiedene Aktionen. Fünf davon haben unterschiedliche
          Highscore-Punktesteigerungsraten und unterschiedliche
          Explosionswahrscheinlichkeiten. Die letzte Aktion dient dazu, die
          Punkte in den Highscore zu übernehmen. Der Spieler muss sich also bei
          jedem Schritt entscheiden, ob er die Punkte im Highscore speichern
          oder das Risiko eingehen möchte, die Punkte zu erhöhen, aber
          möglicherweise eine Explosion auszulösen.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project12;
