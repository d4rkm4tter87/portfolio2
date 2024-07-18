import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview1 from "../assets/t4u1.png";
import preview2 from "../assets/t4u2.png";

const Project2 = () => {
  return (
    <div>
      <Center fontSize="2xl" className="mirror2" paddingBottom="10px">
        Trailers4u
      </Center>
      <Center>
        <Link href="https://movietrailers4u.netlify.app/" isExternal>
          movietrailers4u.netlify.app
        </Link>
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
          Auf Trailers4u werden aktuelle und beliebte Trailer aufgelistet.
          Nutzer können sich hier eine Übersicht über kommende oder vergangene
          Filme verschaffen. Dies kann eine Entscheidunghilfe sein ob es sich
          lohnt einen Film in ganzer Länge zu schauen, aber auch alleinstehend
          sind viele dieser Trailer anschauenswert. Videoplatformen jeglicher
          Art eignen sich sehr gut für die vergleichsweise neue Technologie
          React.
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          Neben einer Vielzahl von Bibliotheken für Videoplattformen kann React
          diesem Thema dynamisch und schnell geladene Inhalte anbieten und viele
          einfach zu implementierende visuelle Features. Ein bekanntes Bespiel
          für eine Video-Streaming-Dienst in React ist Netflix.
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

export default Project2;
