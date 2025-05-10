import { Center, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import preview1 from "../assets/preview/t4u1.webp";
import preview2 from "../assets/preview/t4u2.webp";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContextProvider";
const Project2 = () => {
  const context = useContext(LanguageContext);
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
          {context?.language === "de"
            ? `Auf Trailers4u werden aktuelle und beliebte Trailer aufgelistet.
          Nutzer können sich hier eine Übersicht über kommende oder vergangene
          Filme verschaffen. Dies kann eine Entscheidunghilfe sein ob es sich
          lohnt einen Film in ganzer Länge zu schauen, aber auch alleinstehend
          sind viele dieser Trailer anschauenswert.`
            : `Trailers4u lists current and popular trailers.
Users can get an overview of upcoming or past films.
This can help them decide whether a film is worth watching in its entirety, but many of these trailers are also worth watching on their own.`}
        </Text>
        <Text
          textAlign="justify"
          paddingX="20px"
          marginBottom="auto"
          marginTop="7px"
        >
          {context?.language === "de"
            ? `Videoplattformen jeglicher Art eignen sich sehr gut für die
          vergleichsweise neue Technologie React. Neben einer Vielzahl von
          Bibliotheken für Videoplattformen kann React diesem Thema dynamisch
          und schnell geladene Inhalte anbieten und viele einfach zu
          implementierende visuelle Features. Ein bekanntes Bespiel für eine
          Video-Streaming-Dienst in React ist Netflix.`
            : `Video platforms of all kinds are very well suited to the
relatively new React technology. In addition to a variety
of libraries for video platforms, React can offer dynamic
and quickly loaded content and many easy-to-implement visual features. A well-known example of a
video streaming service in React is Netflix.`}
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
