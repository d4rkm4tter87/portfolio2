import { Center, Text, Image, Link, SimpleGrid } from "@chakra-ui/react";
import preview1 from "../assets/preview/petersen1.webp";
import preview2 from "../assets/preview/petersen2.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project4 = () => {
  const context = useContext(LanguageContext);
  return (
    <div>
      <Center fontSize="2xl" className="mirror2" paddingBottom="10px">
        Petersen Hardraht Pruggmayer
      </Center>
      <Center>
        <Link href="https://www.petersenhardrahtpruggmayer.de/" isExternal>
          petersenhardrahtpruggmayer.de
        </Link>
      </Center>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Text
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
          textAlign="justify"
        >
          {context?.language === "de"
            ? `Petersen-Hardraht-Pruggmayer ist eine Anwaltskanzlei mit Standorten in
          Chemnitz, Dresden und Leipzig. Sie ist damit die größte
          Wirtschaftskanzlei Sachsens. Petersen-Hardraht-Pruggmayer hat ein
          Beratungsspektrum von Mittelstand über Freiberufler, bis hin zu und
          Kommunen. In meiner Zeit bei der Webagentur KonVis war dies eine von
          vielen Webseiten die ich in Wordpress umgesetzt habe. Auf einer großen
          Anzahl an Seiten können Inhalte über eine Administrationsumgebung vom
          Kunden selbständig geändert werden. Während man in Wordpress mit einer
          Auswahl an Themes eine Webseite schnell erstellen kann haben wir für
          diesen Kunden Design und Struktur nach den spezifischen Wünschen des
          Kunden entworfen.`
            : `Petersen-Hardraht-Pruggmayer is a law firm with offices in
Chemnitz, Dresden, and Leipzig. It is the largest
commercial law firm in Saxony. Petersen-Hardraht-Pruggmayer offers a range of consulting services, from small and medium-sized businesses to freelancers and municipalities. During my time at the web agency KonVis, this was one of
many websites I implemented in WordPress. On a large
number of pages, content can be edited independently by the
client via an administration environment. While WordPress allows you to quickly create a website with a
selection of themes, we designed the design and structure for this client according to the client's specific requirements.`}
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          {context?.language === "de"
            ? `Auf der Webseite befinden sich detaillierte Darstellungen des Teams
          und der Schwerpunkte auf über 100 Seiten. Außerdem gibt es einen
          Newsticker, Seiten über Karrieremöglichkeiten und Beschreibungen über
          die Standorte. Während die Mehrheit meiner anderen Projekte durch mich
          als Full Stack Entwickler erstellt wurden war dies eine Team-Arbeit in
          der ich für die Überführung der Inhalt- und Designkonzepte in
          Wordpress zuständig war.`
            : `The website features detailed descriptions of the team
and its key areas of focus on over 100 pages. There's also a
news ticker, pages about career opportunities, and descriptions of
the locations. While the majority of my other projects were created by me
as a full-stack developer, this was a team effort
in which I was responsible for transferring the content and design concepts to
WordPress.`}
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

export default Project4;
