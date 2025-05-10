import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview from "../assets/preview/code-analytics-preview.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project13 = () => {
  const context = useContext(LanguageContext);
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
          {context?.language === "de"
            ? ` Dies ist ein Werkzeug zur Code-Inspektion. Der Benutzer gibt Text ein
          oder lädt eine Datei hoch. Die Eingabe wird dann nach verschiedenen
          Kriterien überprüft. Geprüft werden Wort- und Zeichenlänge, Anzahl der
          Funktionen und verbleibende Zeichen für bestimmte Plattformen. Aus den
          Ergebnissen kann der Benutzer weitere Rückschlüsse ziehen.`
            : `This is a code inspection tool. The user enters text
or uploads a file. The input is then checked according to various
criteria. Word and character length, number of
functions, and remaining characters for specific platforms are checked. The user can draw further conclusions from the
results.`}
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project13;
