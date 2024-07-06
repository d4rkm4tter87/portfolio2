import { Center, Heading, HStack, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import preview1 from "../assets/th1.png";
import preview2 from "../assets/th2.png";

const Aktuelles = () => {
  return (
    <div>
      <Center>
        <Heading size="lg" padding="10px">
          Aktuelles
        </Heading>
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          In diesem Jahr habe ich den Schritt gemacht, die neue Generation von
          Technologien zu lernen. Während ich im Studium imperative
          Programmierung mit JavaScript und PHP-Frameworks gelernt habe, geht
          seit ungefähr 8 Jahren der Trend zur deklarativen Programmierung. Das
          heisst, man beschreibt was ausgeführt werden soll, aber wie es
          ausgeführt werden soll, entscheidet das System, nicht der Entwickler.
        </Text>
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          gfjfgjjfj
        </Text>
      </HStack>
      <HStack>
        <Center>
          <Image src={preview1} padding="10px" width="75%" />
        </Center>
        <Center>
          <Image src={preview2} padding="10px" width="75%" />
        </Center>
      </HStack>
    </div>
  );
};

export default Aktuelles;
