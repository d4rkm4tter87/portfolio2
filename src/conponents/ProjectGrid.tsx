import {
  Box,
  Text,
  Card,
  CardBody,
  CardHeader,
  SimpleGrid,
  Image,
  Center,
} from "@chakra-ui/react";
import projects from "../data/projects";
import { NavLink } from "react-router-dom";

const ProjectGrid = () => {
  return (
    <>
      <Center fontSize="2xl" className="mirror2">
        Ausgewählte Projekte
      </Center>
      <br />
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={6}
      >
        {projects.map((project) => (
          <Box borderRadius={10}>
            <NavLink to={"/projects/" + project.link}>
              <Card
                align="center"
                bg="rgba(0, 0, 0, 0.25)"
                className="project-box"
              >
                <CardHeader padding={1}>
                  <Center fontSize="xl">
                    <p className="project-name">{project.name}</p>
                  </Center>
                </CardHeader>
                <CardBody>
                  <Box>
                    <Center>
                      <b className="CakePHP">
                        <div className="tooltip">
                          <Image
                            src={project.img}
                            width={
                              project.id === 4 || project.id === 2
                                ? "70px"
                                : "100%"
                            }
                          />
                          <span className={projectTooltipClass(project.name)}>
                            {projectTooltip(project.name)}
                          </span>
                        </div>
                      </b>
                    </Center>
                  </Box>
                  <Box>
                    <br />
                    <Text align="center" className="tech-list">
                      Technologien:{" "}
                      {project.code.map((code, i) =>
                        codeTooltip(code, i, project.code.length)
                      )}
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </NavLink>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

const codeTooltip = (c: string, i: number, length: number) => {
  {
    const cx = c !== "JavaScript- und CSS-Bibliotheken" ? c : "JavaScript";
    const comma = i < length - 1 ? ", " : "";
    return (
      <>
        <b className={cx}>
          <div className="tooltip">
            {c}
            <span className={codeTooltipClass(c)}>
              {codeTooltipDescription(c)}
            </span>
          </div>
        </b>
        {comma}
      </>
    );
  }
};

const projectTooltip = (c: string) => {
  switch (c) {
    case "Tsumego Hero":
      return "Eine Webseite mit über 11.000 Puzzles zu dem Brettspiel Go.";
    case "Trailers4u":
      return "Eine Webseite zum Anschauen von Film-Trailern.";
    case "Go in Bremen":
      return "Die offizielle Webseite des Bremer Go-Vereins.";
    case "Petersen Hardraht Pruggmayer":
      return "Die Webseite einer Anwaltskanzlei mit Standorten in Chemnitz, Dresden und Leipzig.";
    case "Airlift-Reaktoren":
      return "Im Rahmen meiner Bachelor-Thesis wurde eine Auswerteroutine für Airlift-Reaktoren für das IUV-Bremen entwickelt. Airlift-Reaktoren untersuchen das Verhalten von Stoffen unter bestimmten Bedingungen wie z.B. Mischverhältnisse und Temparaturen.";
    case "City Dating":
      return "Dies ist eine Webseite zum Vereinbaren von Treffen und Bekanntgeben von Events.";
    case "Betaville New York":
      return "Dies ist ein Open Source Projekt, in dem neue Ideen in den Bereichen Städteplanung, Architektur und öffentlicher Kunst in einer gemeinsamen Platform umgesetzt werden können.";
    case "Betaville Bremen":
      return "Dies ist eine Webseite auf der neue Ideen in den Bereichen Städteplanung, Architektur und öffentlicher Kunst veröffentlicht werden können. Diese Ideen können dann real mit dem Smartphone in einer Augmented Reality betrachtet werden.";
    case "Staiker Equity Trainer":
      return "Dies ist eine Trainings-App zum lernen von Gewinnwahrscheinlichkeiten im Poker.";
    case "Staiker Go Rewiews":
      return "Dies ist eine Webseite zur Dokumentation und Analyse von Partien in dem Brettspiel Go.";
    default:
      return "tooltiptext";
  }
};

const projectTooltipClass = (c: string) => {
  switch (c) {
    case "Tsumego Hero":
      return "tooltiptext2 tsumegoHeroTooltip";
    case "Trailers4u":
      return "tooltiptext2 trailers4uTooltip";
    case "Go in Bremen":
      return "tooltiptext2 goInBremenTooltip";
    case "Petersen Hardraht Pruggmayer":
      return "tooltiptext2 petersenHardrahtPruggmayerTooltip";
    case "Airlift-Reaktoren":
      return "tooltiptext2 airliftTooltip";
    case "City Dating":
      return "tooltiptext2 cityDatingTooltip";
    case "Betaville New York":
      return "tooltiptext2 betavilleNyTooltip";
    case "Betaville Bremen":
      return "tooltiptext2 betavilleBremenTooltip";
    case "Staiker Equity Trainer":
      return "tooltiptext2 staikerEquityTooltip";
    case "Staiker Go Rewiews":
      return "tooltiptext2 staikerReviewTooltip";
    default:
      return "tooltiptext2 tsumegoHeroTooltip";
  }
};

const codeTooltipClass = (c: string) => {
  switch (c) {
    case "CakePHP":
      return "tooltiptext cakephpTooltip";
    case "React":
      return "tooltiptext reactTooltip";
    case "TypeScript":
      return "tooltiptext typescriptTooltip";
    case "Git":
      return "tooltiptext gitTooltip";
    case "JavaScript":
      return "tooltiptext jsTooltip";
    case "JavaScript- und CSS-Bibliotheken":
      return "tooltiptext jsTooltip";
    case "MySQL-Datenbank":
      return "tooltiptext mysqlTooltip";
    case "Firebase":
      return "tooltiptext firebaseTooltip";
    case "Firestore":
      return "tooltiptext firestoreTooltip";
    case "Chakra UI":
      return "tooltiptext chakraTooltip";
    case "Wordpress":
      return "tooltiptext wordpressTooltip";
    case "ActionScript":
      return "tooltiptext asTooltip";
    case "JSON":
      return "tooltiptext jsonTooltip";
    case "Joomla":
      return "tooltiptext joomlaTooltip";
    case "Maya":
      return "tooltiptext mayaTooltip";
    case "Java":
      return "tooltiptext javaTooltip";
    case "SVN":
      return "tooltiptext svnTooltip";
    case "PHP":
      return "tooltiptext phpTooltip";
    case "MathML":
      return "tooltiptext mathmlTooltip";
    default:
      return "tooltiptext";
  }
};

const codeTooltipDescription = (c: string) => {
  switch (c) {
    case "CakePHP":
      return "CakePHP ist ein Framework zur strukturierten und schnellen Entwicklung von Webseiten mit Hilfe von Templates. Die Dateien sind in einem Model-View-Controller Entwurfsmuster angeordnet, sodass von Anfang an eine organisierte und effeziente Entwicklung möglich ist.";
    case "React":
      return "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen, die von Facebook entwickelt und als Open Source veröffentlicht wurde. Sie wird häufig für die Entwicklung von Single-Page-Anwendungen (SPA) und mobilen Anwendungen verwendet. React erleichtert es Entwicklern, komplexe Benutzeroberflächen zu erstellen, indem es eine komponentenbasierte Architektur und ein deklaratives Programmiermodell verwendet. Im Vergleich zu älteren Technologien, in denen imperativ programmiert wird, wird hierbei beschrieben was ausgeführt wird, aber nicht wie es ausgeführt werden soll. ";
    case "TypeScript":
      return "TypeScript basiert auf JavaScript und wurde um eine statische Typisierung erweitert. Es ist unter anderem möglich Datentypen zu definieren und zu überprüfen bevor der Code ausgeführt wird.";
    case "Git":
      return "Git is ein verteiltes Versionskontrollsystem und erleichtert die Verwaltung von Quellcode in Softwareentwicklungsprojekten. Es hilft Entwicklern, Änderungen am Code zu verfolgen, Zusammenarbeit zu erleichtern und die Historie eines Projekts zu verwalten. ";
    case "JavaScript":
      return "JavaScript ist eine vielseitige und weit verbreitete Programmiersprache, die hauptsächlich verwendet wird, um interaktive und dynamische Inhalte auf Websiten zu erstellen. ";
    case "JavaScript- und CSS-Bibliotheken":
      return "JavaScript ist eine vielseitige und weit verbreitete Programmiersprache, die hauptsächlich verwendet wird, um interaktive und dynamische Inhalte auf Websiten zu erstellen. ";
    case "MySQL-Datenbank":
      return "Eine MySQL-Datenbank ist ein relationales Datenbankmanagementsystem, das auf der Structured Query Language (SQL) basiert. MySQL ein mächtiges und vielseitiges Werkzeug zur Verwaltung und Organisation von Daten, das in einer Vielzahl von Anwendungen und Branchen eingesetzt wird. ";
    case "Firebase":
      return "Firebase ist eine Plattform für die Entwicklung mobiler und Webanwendungen, die von Google bereitgestellt wird. Sie bietet eine Vielzahl von Tools und Diensten, die Entwicklern helfen, hochwertige Apps zu erstellen, die Benutzerbasis zu vergrößern und den Umsatz zu steigern. Firebase bietet Backend-Services, Echtzeit-Datenbanken, Authentifizierung und vieles mehr. Firebase wird häufig verwendet, um die Entwicklungszeit zu verkürzen und die Skalierbarkeit von Anwendungen zu verbessern. Es ist besonders nützlich für die Erstellung von Prototypen und MVPs (Minimum Viable Products), da es eine Vielzahl von Funktionen direkt nach der Integration bietet. ";
    case "Chakra UI":
      return "Chakra UI ist eine moderne React-Komponentenbibliothek, die Entwicklern hilft, zugängliche, wiederverwendbare und anpassbare UI-Komponenten schnell und effizient zu erstellen. Chakra UI bietet eine Reihe von vorgefertigten Komponenten und Tools, die es einfach machen, ansprechende Benutzeroberflächen zu gestalten. ";
    case "Wordpress":
      return "WordPress ist ein weit verbreitetes Content-Management-System, das verwendet wird, um Websites und Blogs zu erstellen und zu verwalten.  WordPress ist ein leistungsfähiges und flexibles Tool zur Erstellung und Verwaltung von Websites. Es bietet zahlreiche Anpassungsmöglichkeiten und eine große Community-Unterstützung, was es zu einer der beliebtesten Plattformen für Website-Entwickler und -Betreiber weltweit macht.";
    case "ActionScript":
      return "ActionScript ist eine Programmiersprache, die von Adobe Systems entwickelt wurde und hauptsächlich zur Steuerung von Flash-Anwendungen verwendet wird. ActionScript war eine Schlüsseltechnologie für die Erstellung interaktiver und multimedialer Inhalte im Web während der Blütezeit von Adobe Flash. Trotz seines Rückgangs bleibt es ein wichtiges Kapitel in der Geschichte der Webentwicklung. Moderne Webentwickler verwenden heute jedoch HTML5, CSS und JavaScript für ähnliche Aufgaben.";
    case "JSON":
      return "JSON (JavaScript Object Notation) ist ein leichtgewichtiges Datenformat zur Speicherung und zum Austausch von Daten. Es ist leicht für Menschen lesbar und für Maschinen einfach zu parsen und zu generieren. JSON ist ein einfaches, aber leistungsstarkes Datenformat, das in der modernen Webentwicklung weit verbreitet ist. Es ermöglicht eine effiziente und unkomplizierte Datenübertragung zwischen Servern und Clients sowie die einfache Speicherung und Konfiguration von Daten.";
    case "Joomla":
      return "Joomla ist ein freies und Open-Source-Content-Management-System (CMS), das zur Erstellung und Verwaltung von Websites verwendet wird. Es für eine Vielzahl von Websites geeignet ist, von kleinen persönlichen Blogs bis hin zu großen Unternehmenswebsites. Es bietet eine hohe Anpassungsfähigkeit, zahlreiche Erweiterungsmöglichkeiten und eine große Gemeinschaft, die es zu einer beliebten Wahl für Webentwickler und Website-Betreiber macht.";
    case "Maya":
      return "Ein Maya Editor ist ein Teil der Autodesk Maya Software, einem umfassenden 3D-Modellierungs- und Animationsprogramm, das von Autodesk entwickelt wurde. Maya wird hauptsächlich in der Film-, Fernseh- und Spieleindustrie eingesetzt, um komplexe 3D-Grafiken und Animationen zu erstellen. ";
    case "Java":
      return `Java ist eine vielseitig einsetzbare Programmiersprache, die für die Web- und Anwendungsentwicklung verwendet werden kann. Die zeichnet sich aus durch eine minimale Anzahl an Abhängigkeiten und ist Betriebssystemübergreifend verwendbar. Auch wenn sie heutzutage in vielen Gebieten durch neuere Technologien abgelöst wurde hat sie noch immer ein Daseinsberechtigung durch Flexibilität und leichte Erlernbarkeit.`;
    case "SVN":
      return "SVN (Subversion) ist ein weiteres Versionskontrollsystem, das zur Verwaltung von Quellcode und anderen Dateien verwendet wird. Es wurde ursprünglich von CollabNet entwickelt und ist ein zentrales Versionskontrollsystem, das sich von verteilten Systemen wie Git unterscheidet. ";
    case "PHP":
      return "PHP wird verwendet, um dynamische Webseiten zu erstellen und kann HTML-Code in Webseiten einbetten. PHP unterstützt eine Vielzahl von Datenbanken, darunter MySQL, PostgreSQL, Oracle, Microsoft SQL Server und viele andere. ";
    case "MathML":
      return "MathML (Mathematical Markup Language) ist eine XML-basierte Markup-Sprache, die zur Darstellung von mathematischen Notationen und zum Erfassen mathematischer Strukturen verwendet wird. MathML wurde entwickelt, um mathematische Formeln und Ausdrücke auf Webseiten darzustellen und zu codieren, sodass sie von Computern und anderen Geräten verstanden und verarbeitet werden können. ";
    default:
      return "";
  }
};

export default ProjectGrid;
