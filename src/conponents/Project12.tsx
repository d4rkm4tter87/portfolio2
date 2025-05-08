import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/preview/mine-pusher-preview.webp";

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
          Mine Pusher is a game where the player has to grow a mine to beat the
          highscore. With every action, the probability to trigger an explosion
          increases. There are six different actions that can be done. Five of
          them have different highscore point increase rates and also different
          probabilities of explosion. The last action is to take the points over
          into the highscore. Thus, the user has to make a decision at every
          step if he wants to save the points to the highscore or take a risk to
          increase the points but maybe trigger an explosion.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project12;
