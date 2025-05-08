import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/preview/betaville-ny.webp";

const Project5 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Betaville New York
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
          Betaville ist ein Open Source Projekt, in dem neue Ideen in den
          Bereichen Städteplanung, Architektur und öffentlicher Kunst in einer
          gemeinsamen Platform umgesetzt werden können. Dies geschieht über eine
          virtuelle Welt, in der Städte nachgebaut werden und anschließend um
          Ideen der Benutzer erweitert werden können.
          <br />
          <br />
          Die Darstellung verschafft einen ungefähren Eindruck von der
          Anwendung. Hier ist das gelb Markierte ein Vorschlag, den ein Benutzer
          hochgeladen hat. Die Idee ist, eine Art Hafenanlage in dem unteren
          Bereich Manhattans zu bauen. Der Vorschlag kann neben den
          dargestellten real existieren Gebäuden betrachtet werden. Zur Zeit
          sieht der Vorgang so aus, dass der Benutzer ein 3D Modell in Maya oder
          einer anderen Entwicklungsumgebung erstellt und es anschließend in
          Betaville hochlädt.
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project5;
