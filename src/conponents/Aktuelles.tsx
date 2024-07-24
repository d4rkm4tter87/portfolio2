import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "http://joschkazimdars.com/img/0.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb1.png",
  },
  {
    original: "http://joschkazimdars.com/img/1.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb2.png",
  },
  {
    original: "http://joschkazimdars.com/img/2.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb2.png",
  },
  {
    original: "http://joschkazimdars.com/img/3.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/4.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/5.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/6.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/7.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/8.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/9.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/10.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb1.png",
  },
  {
    original: "http://joschkazimdars.com/img/11.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/12.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/13.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb3.png",
  },
  {
    original: "http://joschkazimdars.com/img/14.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb1.png",
  },
  {
    original: "http://joschkazimdars.com/img/15.PNG",
    thumbnail: "http://joschkazimdars.com/img/thumb1.png",
  },
];

const Aktuelles = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Aktuelles: Weiterbildungen in 2024
      </Center>
      <br />
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
        marginTop="15px"
        spacing={6}
      >
        <Text
          paddingX="20px"
          maxWidth="670px"
          marginBottom="auto"
          marginTop="7px"
          textAlign="justify"
        >
          Ich hatte schon länger den Wunsch, mich mit der Welt der
          Single-Page-Applications von React, Angular und Vue vertraut zu
          machen. Im Studium und in den darauf folgenden Jahren habe ich mit
          JavaScript- PHP-Frameworks gearbeitet. Die Verwendung von
          Single-Page-Applications in React, Angular und Vue ist allerdings
          zeitgemäßer und kann in vielen Fällen hervorragend zum Einsatz kommen.
          Sodann bietet es den Vorteil einer deklarativen Entwicklung, in der
          viele Features schneller umgesetzt werden können und es eine Vielzahl
          an Bibliotheken gibt, die man verwenden kann. In der deklarativen
          Entwicklung beschreibt man im Gegensatz zur imperativen Entwicklung
          was ausgeführt werden soll, aber nicht wie es ausgeführt werden soll.
          Außerdem haben diese Technologien weitere Vorteile, wie zum Beispiel
          geringe Ladezeiten, das Aktualisieren von Inhalten ohne dass die Seite
          neu geladen werden muss und das automatische Verwenden von Best
          Practices und einem responsive Layout ohne dass man sich viel damit
          beschäftigen muss. Auch im Back-end geht der Zeitgeist von auf SQL
          basierenden relationalen Datenbanken hinüber zu Datenbanken wie
          Firebase/Firestore oder MongoDB, mit welchen ich mich in letzter Zeit
          auch viel beschäftigt habe.
          <br />
          <br />
          Dieses Jahr habe ich mir nun endlich die Zeit genommen neben der
          freiberuflichen Entwicklung von Webseiten mich in verschiedenen Kursen
          weiterzubilden. Ich habe Pläne Diese in Zukunft in eigenen Projekten
          und in Unternehmen zu verwenden. Die ersten beiden Projekte in React
          sind bereits in Angefangen und ich werde hier demnächst einen Update
          darüber schreiben. Auch meine Portfolio Webseite ist in React
          entwickelt.
          <br />
          <br />
          Wie bereits erwähnt habe ich viele weiterbildende Maßnahmen in diesem
          Jahr in Anspruch genommen. Einen Teil davon kann ich hier in Form von
          Zertifikaten präsentieren.
        </Text>
        <Center className="gallery-container">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={true}
          />
        </Center>
      </SimpleGrid>
    </div>
  );
};

export default Aktuelles;
