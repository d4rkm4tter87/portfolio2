import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/tagster-preview.png";

const Project14 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Tagster
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
          This is a website to get an overview of tags from several websites.
          The tags can be seen with its statistics, such as its description,
          where and how often are the used on the targeted website.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project14;
