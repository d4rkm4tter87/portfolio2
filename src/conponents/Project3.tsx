import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/preview/golv1.webp";
import preview2 from "../assets/preview/golv2.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project3 = () => {
  const context = useContext(LanguageContext);
  return (
    <div>
      <Center fontSize="2xl" className="mirror2" paddingBottom="10px">
        Go in Bremen
      </Center>
      <Center>
        <Link href="https://go-lv-bremen.de/" isExternal>
          go-lv-bremen.de
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
          marginTop="7px"
        >
          {context?.language === "de"
            ? `Der Go Landesverband Bremen ist der Zusammenschluss aller Bremer
          Go-Spieler mit dem Ziel, das Go Spiel in der Stadt zu organisieren, zu
          fördern und zu verbreiten. Auf dieser Webseite werden alle Tätigkeiten
          um Go in Bremen durchgeführt. Die Webseite vermittelt das aktuelle
          Geschehen und vernetzt sich mit der landesweiten Go-Szene. Es wurden
          Seiten für Turniere und Spieleabende umgesetzt. Außerdem gibt es einen
          Newsticker, mehrere Seiten zu Erklärung des Spiels Go und Seiten über
          die Geschichte des Vereins.`
            : `The Bremen Go Association is the association of all Bremen Go players with the goal of organizing, promoting, and spreading the game of Go in the city. All activities related to Go in Bremen are carried out on this website. The website provides current events and connects with the nationwide Go scene. Pages for tournaments and game nights have been created. There is also a news ticker, several pages explaining the game of Go, and pages about the association's history.`}
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          {context?.language === "de"
            ? `Hierfür habe ich das Framework CakePHP verwendet, da Inhalte dynamisch
          geändert werden können und das Grundgerüst eine schnelle Entwicklung
          ermöglichte. Da die Administrationsumgebung nur einen geringen Umfang
          benötigte, war CakePHP die richtige wahl. Für umfangreichere
          Administrationsumgebungen sind häufig Wordpress oder Joomla besser
          geeignet.`
            : `For this, I used the CakePHP framework because content can be changed dynamically and the basic framework enabled rapid development. Since the administration environment required only a small amount of space, CakePHP was the right choice. For more extensive administration environments, WordPress or Joomla are often better suited.`}
        </Text>
      </SimpleGrid>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Center>
          <Image src={preview1} padding="10px" width="75%" />
        </Center>
        <Center>
          <Image src={preview2} padding="10px" width="75%" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project3;
