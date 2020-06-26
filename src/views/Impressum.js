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
              data={{ title: "Impressum", paragrapth: "" }}
              className="center-content"
            />

            <div className="center-content">
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </GenericSection>
      </React.Fragment>
    );
  }
}

export default Datenschutz;
