import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Timeline from "../elements/Timeline";
import TimelineItem from "../elements/TimelineItem";
import MainSettings from "../../settings/main.json";
import { talks } from "../../settings/talks.json";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class Roadmap extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "roadmap section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "roadmap-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const sectionHeader = {
      title: "Timeline",
      paragraph: `Eine Übersicht zu allen an der sIT${MainSettings.year} stattfindenen Events.`,
    };

    const timelineElements = () =>
      talks.map((t) => (
        <TimelineItem
          title={`${new Date(t.date).toDateString()}, ${t.time} - Raum: ${
            t.room
          }`}
        >
          {t.title}
          <p
            style={{ fontStyle: "italic", fontWeight: "200", fontSize: "16px" }}
            className="timeline-item-content p m-0 reveal-from-side invert-logo"
          >{`"${t.desciption}" - ${t.author}`}</p>
        </TimelineItem>
      ));

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>{timelineElements()}</Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;
