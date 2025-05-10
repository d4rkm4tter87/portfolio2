import { Center, SimpleGrid, Text, Image } from "@chakra-ui/react";
import preview1 from "../assets/about-img1.jpg";
import preview2 from "../assets/about-img2.jpg";
import preview3 from "../assets/about-img3.jpg";
import { LanguageContext } from "../contexts/LanguageContextProvider";
import { useContext } from "react";
const Home = () => {
  const context = useContext(LanguageContext);
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        {context?.language === "de" ? "Über mich" : "About"}
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
          {context?.language === "de"
            ? `Hi 🤠 ich bin Joschka aus Hannover. Auf dieser Webseite liste ich
          meine Projekte und Tätigkeiten auf, damit man sich einen Überblick
          über mich verschaffen kann.`
            : `Hi 🤠 I'm Joschka from Hanover. On this website, I list my projects and activities so you can get an overview of me.`}
          <br />
          <br />
          {context?.language === "de"
            ? `In meinen 15 Jahren als Informatiker habe ich sowohl freiberuflich,
          als auch in verschiedenen Agenturen gearbeitet. Dementsprechend ist
          diese Webseite sowohl für potenzielle Kunden als auch für zukünftige
          Arbeitgeber gedacht.`
            : `In my 15 years as a computer scientist, I have worked both freelance and in various agencies. Accordingly, this website is intended for both potential clients and future employers.`}
          <Image
            src={preview2}
            className="about-img"
            margin="20px"
            width="50%"
          />
          <br />
          <br />
          {context?.language === "de"
            ? `Ich bin viel herum gekommen. Mein Studium habe ich in Bremen
          abgeschlossen, anschießend habe ich in New York, Hamburg und jetzt in
          Hannover gelebt und gearbeitet.`
            : `I've traveled a lot. I completed my studies in Bremen, after which I lived and worked in New York, Hamburg, and now in Hanover.`}
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
          {context?.language === "de"
            ? `Wenn ich mal nicht irgendwas programmiere, betreibe ich mehrere
          Sportarten und spiele mehrere Spiele auf Turnier-Niveau. Meine wohl
          höchste Spielstärke habe ich in dem Brettspiel Go. Dort bin ich 1 Dan.
          Das entspricht ungefähr den deutschen Top 100. Außerdem gehe ich
          regelmäßig auf Poker- und Schachturniere. Sportlich gehe ich
          regelmäßig ins Fitnessstudio und jogge. Außerdem gehe ich gerne
          Bouldern.`
            : `When I'm not programming, I play several sports and play several games at tournament level. My highest skill level is probably in the board game Go. I'm ranked 1st Dan there. That's roughly equivalent to the German top 100. I also regularly go to poker and chess tournaments. In terms of exercise, I regularly go to the gym and jog. I also enjoy bouldering.`}
        </Text>
      </SimpleGrid>
    </div>
  );
};

export default Home;
