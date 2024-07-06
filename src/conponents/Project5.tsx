import { Center, Heading, Text, Image, HStack } from "@chakra-ui/react";
import preview from "../assets/betaville-ny.png";

const Project5 = () => {
  return (
    <div>
      <Center>
        <Heading size="lg" padding="2px">
          Betaville New York
        </Heading>
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Betaville ist ein Open Source Projekt, in dem neue Ideen in den
          Bereichen Städtepla- nung, Architektur und öffentlicher Kunst in einer
          gemeinsamen Platform umgesetzt werden können. Dies geschieht über eine
          virtuelle Welt, in der Städte nachgebaut wer- den und anschließend um
          Ideen der Benutzer erweitert werden können.
          <br />
          <br />
          Die Darstellung verschafft einen ungefähren Eindruck von der
          Anwendung. Hier ist das gelb Markierte ein Vorschlag, den ein Benutzer
          hochgeladen hat. Die Idee ist, eine Art Hafenanlage in dem unteren
          Bereich Manhattans zu bauen. Der Vorschlag kann neben den
          dargestellten real existieren Gebäuden betrachtet werden. Zur Zeit
          sieht der Vorgang so aus, dass der Be- nutzer ein 3D Modell in Maya
          oder einer anderen Entwicklungsumgebung erstellt und es anschließend
          in Betaville hochlädt.
        </Text>
        <Center width="50%">
          <Image src={preview} padding="10px" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project5;
