import { Center, HStack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Über mich
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
          Dies ist die Portfolio Webseite von Joschka Zimdars, Web-Entwickler
          aus Hannover. In meinen 15 Jahren als Informatiker habe ich sowohl in
          verschiedenen Web Agenturen gearbeitet als auch als Freiberufler.
          Dementsprechend ist die Webseite sowohl dafür gedacht um mir eine
          Anfrage für die Entwicklung einer Webseite zu schicken alsauch für
          Arbeitgeber um sich ein Bild von mir zu verschaffen. Ich bin viel
          rumgekommen, mein Studium habe ich in Bremen abgeschlossen, ich habe
          in New York, Hamburg und jetzt Hannover gearbeitet. Diese Webseite
          beinhaltet eine Auswahl an Projekten die ich in den letzten 10 Jahren
          gemacht habe. Wie in der Projektauswahl zu erkennen ist, bin ich mit
          einer Vielzahl an Technologien vertraut.
        </Text>
        <Text
          paddingX="20px"
          width="50%"
          maxWidth="670px"
          marginBottom="auto"
          marginTop="7px"
        >
          In der Vergangenheit habe ich mit vielen Verschiedenen auf PHP
          basierenden Frameworks gearbeitet, wie CakePHP, Wordpress, Joomla,
          Drupal und Symfony. Diese Technologien sind aber für einige Bereiche
          nicht mehr zeitgemäß, sodass ich seit einem knappen Jahr hauptsächlich
          mit React, Angular und Vue arbeite. Auch im Back-end geht der
          Zeitgeist von auf SQL basierenden relationalen Datenbanken hinüber zu
          JSON Datenbanken wie Firebase/Firestore oder MongoDB, mit welchen ich
          mich in letzter Zeit auch viel beschäftigt habe.
        </Text>
      </HStack>
    </div>
  );
};

export default Home;
