import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/preview/task-tracker-preview.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project11 = () => {
  const context = useContext(LanguageContext);
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
          {context?.language === "de"
            ? `Dies ist eine Website zum Erstellen und Verfolgen von Aufgaben. Der
          Task Tracker unterstützt Sie bei Projekten, wie in meinem Fall einer
          Website. Er unterstützt Sie auch bei täglichen Aufgaben,
          Einkaufslisten und vielem mehr. Die Aufgaben können unvollständig,
          abgeschlossen und gelöscht sein. Sie können Aufgaben hinzufügen, alle
          als abgeschlossen markieren, alle als unvollständig markieren, auf den
          Ausgangszustand zurücksetzen und alle Elemente entfernen. Die Aufgaben
          können standardmäßig, alphabetisch, nach abgeschlossen und nach nicht
          abgeschlossen sortiert werden.`
            : `This is a website for creating and tracking tasks. The Task Tracker supports you with projects, such as a website in my case. It also supports daily tasks, shopping lists, and much more. Tasks can be incomplete, completed, and deleted. You can add tasks, mark all as completed, mark all as incomplete, reset to their initial state, and remove all items. Tasks can be sorted by default, alphabetically, by completed, and by incomplete.`}
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project11;
