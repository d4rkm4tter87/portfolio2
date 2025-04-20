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
          This is a website to create and track tasks. Task Tracker can be used
          to help with a project, such as a website in my case. It can also help
          with daily shores, purchase list and many other things. The tasks can
          be incomplete, completed and deleted. It is also possible to add
          tasks, mark all as complete, mark all as incomplete, reset to initial
          state and remove all items. The tasks can be sorted by default,
          alphabetically, by completed and by not complete.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project11;
