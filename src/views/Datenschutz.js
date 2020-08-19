import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import GenericSection from "../components/sections/GenericSection";

class Datenschutz extends React.Component {
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
        <GenericSection>
          <div className="container-xs">
            <SectionHeader
              data={{ title: "Datenschutz", paragrapth: "" }}
              className="center-content"
            />

            <div className="center-content">
              <p>Die Nutzung dieser Website ist ohne Angabe von personenbezogenen Daten möglich. Notwendigerweise (das ist Teil davon wie das WWW funktioniert) verarbeiten wir deine IP-Adresse für den Zeitraum, in dem du diese Website lädst. Über dieses technische Mindestmaß hinaus, erheben wir aber keine Daten, ohne dass vorher darauf ausdrücklich hingewiesen wird.

              Weiterhin haben wir eine Karte von openstreetmap.org eingebunden, deshalb überträgst du deine IP-Adresse auch dahin, wenn du deinen Browser nicht datenschutzkonform konfiguriert hast.
              
              Wenn du auf einen Link klickst und diese Website verlässt, verlässt du auch den Geltungsbereich dieser Datenschutzerklärung.
              
              Darüber hinaus gelten die Angaben von</p>
              <iframe width="500" height="500px" src="https://asta.uni-goettingen.de/index.html%3Fp=6101.html"></iframe>
            </div>
          </div>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Datenschutz;
