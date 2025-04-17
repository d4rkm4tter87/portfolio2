import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/code-analytics-preview.png";

const Project13 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Code Analytics
      </Center>
      <Center>
        <Link href="https://code-analytics.netlify.app/" isExternal>
          code-analytics.netlify.app
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
          This is a tool to inspect code. The output are several statistics
          about the uploaded code that can be used to make further conclusions.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project13;
