import { Center, SimpleGrid, Text, Image } from "@chakra-ui/react";
import preview1 from "../assets/about-img1.jpg";
import preview2 from "../assets/about-img2.jpg";
import preview3 from "../assets/about-img3.jpg";
const Home = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Über mich
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
          <Image
            src={preview1}
            className="about-img"
            margin="20px"
            width="40%"
          />
          Hi 🤠 ich bin Joschka aus Hannover. Auf dieser Webseite liste ich
          meine Projekte und Tätigkeiten auf, damit man sich einen Überblick
          über mich verschaffen kann.
          <br />
          <br />
          In meinen 15 Jahren als Informatiker habe ich sowohl freiberuflich,
          als auch in verschiedenen Agenturen gearbeitet. Dementsprechend ist
          diese Webseite sowohl für potenzielle Kunden als auch für zukünftige
          Arbeitgeber gedacht.
          <Image
            src={preview2}
            className="about-img"
            margin="20px"
            width="50%"
          />
          <br />
          <br />
          Ich bin viel herum gekommen. Mein Studium habe ich in Bremen
          abgeschlossen, anschießend habe ich in New York, Hamburg und jetzt in
          Hannover gelebt und gearbeitet.
        </Text>
        <Text
          paddingX="20px"
          maxWidth="670px"
          marginBottom="auto"
          marginTop="7px"
          textAlign="justify"
        >
          <Image
            src={preview3}
            className="about-img"
            margin="20px"
            width="40%"
          />
          Wenn ich mal nicht irgendwas programmiere, betreibe ich mehrere
          Sportarten und spiele mehrere Spiele auf Turnier-Niveau. Meine wohl
          höchste Spielstärke habe ich in dem Brettspiel Go. Dort bin ich 1 Dan.
          Das entspricht ungefähr den deutschen Top 100. Außerdem gehe ich
          regelmäßig auf Poker- und Schachturniere. Sportlich gehe ich
          regelmäßig ins Fitnessstudio und jogge. Außerdem gehe ich gerne
          Bouldern.
        </Text>
      </SimpleGrid>
    </div>
  );
};

export default Home;
