import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/mine-pusher-preview.png";

const Project12 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Mine Pusher
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
          Mine Pusher is a game where the player has to click a mine to collect
          coins. While collection coins he has to be carful not to trigger an
          explosion.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project12;
