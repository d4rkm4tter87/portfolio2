import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/task-tracker-preview.png";

const Project11 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Task Tracker
      </Center>
      <Center>
        <Link href="https://d4rk-task-tracker.netlify.app/" isExternal>
          d4rk-task-tracker.netlify.app
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
          This is a tool that can be used to track tasks and statuses. Tasks can
          have different statuses and can be ordered by different criteria.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project11;
