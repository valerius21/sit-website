import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroFull from "../components/sections/HeroFull";
import Clients from "../components/sections/Clients";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import GenericSection from "../components/sections/GenericSection";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Pricing from "../components/sections/Pricing";
import Cta from "../components/sections/Cta";
// import some required elements
import Image from "../components/elements/Image";
import Modal from "../components/elements/Modal";

// Lin
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
        <HeroFull className="illustration-section-01" timelineLink={"events"} />
        <Clients topDivider bottomDivider />
        <FeaturesTiles />
        <Events id="events" topDivider />
      </React.Fragment>
    );
  }
}

export default Home;
