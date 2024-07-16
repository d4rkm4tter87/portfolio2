import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/golv1.png";
import preview2 from "../assets/golv2.png";

const Project3 = () => {
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
          Der Go Landesverband Bremen ist der Zusammenschluss aller Bremer
          Go-Spieler mit dem Ziel, das Go Spiel in der Stadt zu organisieren, zu
          fördern und zu verbreiten. Auf dieser Webseite werden alle Tätigkeiten
          um Go in Bremen durchgeführt. Die Webseite vermittelt das aktuelle
          Geschehen und vernetzt sich mit der deutschlandweiten Go-Szene. Es
          wurden Seiten für Turniere und Spieleabende umgesetzt. Außerdem gibt
          es einen Newsticker, mehrere Seiten zu Erklärung des Spiels Go und
          Seiten über die Geschichte des Vereins.
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          Hierfür habe ich das Framework CakePHP verwendet, da Inhalte dynamisch
          geändert werden können und das Grundgerüst eine schnelle Entwicklung
          ermöglichte. Da die Administrationsumgebung nur einen geringen Umfang
          benötigte, war CakePHP die richtige wahl. Für umfangreichere
          Administrationsumgebungen sind häufig Wordpress oder Joomla besser
          geeignet.
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
