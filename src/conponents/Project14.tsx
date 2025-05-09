import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/preview/tagster-preview.webp";

const Project14 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Tagster
      </Center>
      <Center>
        <Link href="https://d4rk-tagster.netlify.app/" isExternal>
          d4rk-tagster.netlify.app
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
          Auf dieser Website erhalten Sie einen Überblick über die Tags
          verschiedener Websites. Verschiedene Websites veröffentlichen ihre
          Tags mit Eigenschaften wie Beschreibung, Vorkommen, Upvotes,
          Abzeichen, Datum und Unternehmen. Die Tags werden mit Statistiken
          angezeigt, wo und wie oft sie auf der jeweiligen Website verwendet
          werden. Außerdem können Sie Tags mit anderen Websites vergleichen und
          untersuchen.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project14;
