import { Center, Text, Image, HStack, Link } from "@chakra-ui/react";
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
      <HStack marginTop="15px">
        <Text
          paddingX="20px"
          width="50%"
          marginBottom="auto"
          marginTop="7px"
          textAlign="justify"
        >
          Der Go Landesverband Bremen ist der Zusammenschluss aller Bremer
          Go-Spieler mit dem Ziel, das Go-Spiel in der Stadt zu organisieren, zu
          fördern und zu verbreiten. Auf dieser Website werden alle Tätigkeiten
          um Go in Bremen durchgeführt. Die Website vermittelt das aktuelle
          Geschehen und vernetzt sich mit der deutschlandweiten Go-Szene. Es
          wurden Seiten für Turniere und Spieleabende umgesetzt. Außerdem gibt
          es einen Newsticker, mehrere Seiten zu Erklärung des Spiels Go und
          Seiten über die
        </Text>
        <Text
          paddingX="20px"
          width="50%"
          marginBottom="auto"
          marginTop="7px"
          textAlign="justify"
        >
          Geschichte des Vereins. Für diese Webseite eignete sich CakePHP am
          besten, da Inhalte dynamisch geändert werden können und das
          Grundgerüst des Frameworks eine schnelle Entwicklung ermöglichte. Da
          die Administrationsumgebung nur einen geringen Umfang benötigte, war
          CakePHP die richtige wahl. Für umfangreichere
          Administrationsumgebungen sind häufig Wordpress und Joomla
          angemessener.
        </Text>
      </HStack>
      <HStack padding="15px">
        <Center>
          <Image src={preview1} padding="10px" width="90%" />
        </Center>
        <Center>
          <Image src={preview2} padding="10px" width="90%" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project3;
