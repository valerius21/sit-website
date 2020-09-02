import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroFull from "../components/sections/HeroFull";
import GenericSection from "../components/sections/GenericSection";
import Button from "../components/elements/Button";

import Events from "../components/sections/Talks";

class Home extends React.Component {
  state = {
    videoModalActive: false,
  };
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  };

  render() {
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" timelineLink={"about"} />
        <Events id="events" topDivider />
        <GenericSection id="about" topDivider>
          <div className="container-xs center-content">
            <SectionHeader
              data={{
                title: "Was sind die sIT?",
                paragraph:
                  "Die studentischen Informatiktage (sIT), sind ein von der Fachgruppe ausgerichtetes Wochenende für alle Informatik-Interessierten. Dort halten verschiedenste Personen Vorträge aus allen Richtungen der Informatik und darüber hinaus. Die meisten Vorträge halten Studierende, es sind aber auch immer Vortragende aus dem Berufsleben dabei. Das Programm wird abgerundet durch lockeres Umfeld und ein soziales Rahmenprogramm. Für Getränke und Essen ist gesorgt.",
              }}
            />
            <Button
              tag="a"
              color="primary"
              wideMobile
              href={`https://survey3.gwdg.de/index.php?r=survey/index&sid=993896&qid=836099`}
            >
              Jetzt anmelden!
            </Button>
          </div>
        </GenericSection>
        <GenericSection id="map" topDivider>
          <div className="container-xs">
            <SectionHeader
              data={{ title: "Anfahrt", paragrapth: "" }}
              className="center-content"
            />

            <div className="center-content">
              <iframe
                title="Anfahrt sIT"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.945070445537569%2C51.554946200930516%2C9.950322210788729%2C51.556919047912494&amp;layer=mapnik"
                style={{ width: "100%", height: 400 }}
              ></iframe>
              <br />
              <small>
                <a href="https://www.openstreetmap.org/#map=19/51.55593/9.94770">
                  Größere Karte anzeigen
                </a>
              </small>
              <p>
                Institut für Informatik
                <br />
                Goldschmidtstraße 7 <br />
                37077 Göttingen <br />
              </p>
            </div>
          </div>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Home;
