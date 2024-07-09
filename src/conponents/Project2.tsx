import { Center, Text, Image, HStack } from "@chakra-ui/react";
import preview1 from "../assets/t4u1.png";
import preview2 from "../assets/t4u2.png";

const Project2 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2">
        Trailers4u
      </Center>
      <HStack marginTop="15px">
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Auf Trailers4u werden aktuelle und beliebte Trailer aufgelistet.
          Nutzer können sich hier eine Übersicht über kommende oder vergangene
          Filme verschaffen. Dies kann eine Entscheidunghilfe sein ob es sich
          lohnt einen Film in ganzer Länge zu schauen, aber auch alleinstehend
          sind viele Filmtrailer anschauenswert.
        </Text>
        <Text paddingX="20px" width="50%" marginBottom="auto" marginTop="7px">
          Videoplatformen jeglicher Art ist ein Themengebiet für das sich die
          vergleichsweise neue Technologie React hervorragend eignet. Neben eine
          Vielzahl von Bibliotheken für Videoplatformen kann React diesem Thema
          dynamisch und schnell geladene Inhalte anbieten und viele einfach zu
          implementierende visuelle Features. Manche der bekanntesten
          Streaming-Dienste, wie zum Beispiel Netflix wurden mit React
          umgesetzt.
        </Text>
      </HStack>
      <HStack padding="15px">
        <Center>
          <Image src={preview1} padding="10px" width="90%" />
        </Center>
        <Center>
          <Image src={preview2} padding="10px" width="90%" />
        </Center>
      </HStack>
    </div>
  );
};

export default Project2;
