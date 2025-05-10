import { Center, Text, Image, SimpleGrid } from "@chakra-ui/react";
import preview from "../assets/preview/betaville-ny.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project5 = () => {
  const context = useContext(LanguageContext);
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
          {context?.language === "de"
            ? `Betaville ist ein Open Source Projekt, in dem neue Ideen in den
          Bereichen Städteplanung, Architektur und öffentlicher Kunst in einer
          gemeinsamen Platform umgesetzt werden können. Dies geschieht über eine
          virtuelle Welt, in der Städte nachgebaut werden und anschließend um
          Ideen der Benutzer erweitert werden können.`
            : `Betaville is an open-source project in which new ideas in urban planning, architecture, and public art can be implemented on a shared platform. This is done via a virtual world in which cities are recreated and can then be expanded with user ideas.`}
          <br />
          <br />
          {context?.language === "de"
            ? `Die Darstellung verschafft einen ungefähren Eindruck von der
          Anwendung. Hier ist das gelb Markierte ein Vorschlag, den ein Benutzer
          hochgeladen hat. Die Idee ist, eine Art Hafenanlage in dem unteren
          Bereich Manhattans zu bauen. Der Vorschlag kann neben den
          dargestellten real existieren Gebäuden betrachtet werden. Zur Zeit
          sieht der Vorgang so aus, dass der Benutzer ein 3D Modell in Maya oder
          einer anderen Entwicklungsumgebung erstellt und es anschließend in
          Betaville hochlädt.`
            : `The illustration gives a rough impression of the application. Here, the yellow highlight is a proposal that a user uploaded. The idea is to build a kind of port facility in the lower Manhattan area. The proposal can be viewed alongside the actual buildings depicted. Currently, the process involves the user creating a 3D model in Maya or another development environment and then uploading it to Betaville.`}
        </Text>
        <Center>
          <Image src={preview} padding="10px" />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Project5;
