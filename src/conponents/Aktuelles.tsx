import { Center, HStack, Text } from "@chakra-ui/react";
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
      <HStack>
        <Text
          paddingX="20px"
          width="50%"
          maxWidth="670px"
          marginBottom="auto"
          marginTop="7px"
        >
          Ich hatte schon länger den Traum, mich mit der Welt der
          Single-Page-Applications von React, Angular und Vue vertraut zu
          machen. Diese Technologien sind in meinen Augen die besten und
          wichtigsten Technologien und können in den meisten Fällen verwendet
          werden. Die Responsiveness, die unzähligen Bibliotheken, die hohe
          Geschwindigkeit mit der man neue Features und Grundgerüste erstellen
          kann und nicht zuletzt das Aktualisieren von Inhalten ohne die Seite
          neu zu laden haben mich schon seit langer Zeit enorm gereizt.
          <br />
          <br />
          Dieses Jahr habe ich mir nun endlich die Zeit genommen neben der
          freiberuflichen entwicklung von Webseiten mich in verschiedenen Kursen
          weiterzubilden. Ich habe Pläne Diese in Zukunft in eigenen Projekten
          und in Unternehmen zu verwenden. Die ersten beiden Projekte in React
          sind bereits in Erstellung und ich werde hier demnächst einen Update
          darüber schreiben. Während ich im Studium imperative Programmierung
          mit JavaScript und PHP-Frameworks gelernt habe, geht seit ungefähr 8
          Jahren der Trend zur deklarativen Programmierung. Das heisst, man
          beschreibt was ausgeführt werden soll, aber wie es ausgeführt werden
          soll, entscheidet das System, nicht der Entwickler.
          <br />
          <br />
          Um einen kleinen Einblick über meine Weiterbildenden Maßnahmen in
          diesem Jahr zu geben sind hier Zertifikate aufgelistet.
        </Text>
        <Center width="50%" maxWidth="670px">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showIndex={true}
          />
        </Center>
      </HStack>
    </div>
  );
};

export default Aktuelles;
