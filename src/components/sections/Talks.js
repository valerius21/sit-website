import React from "react";
import classNames from "classnames";
import { RoughNotation } from "react-rough-notation";
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

class Talks extends React.Component {
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

    const createDate = (date, time) => {
      let d = new Date(date);
      const [hours, minutes] = time.split(":");
      d.setHours(hours);
      d.setMinutes(minutes);

      return d;
    };

    const displayEventAccordingToCurrentTime = (talk, index) => {
      const { date, start, end, room, title, desciption, author } = talk;
      const currentTime =
        process.env.NODE_ENV === "development"
          ? new Date("2020-09-04 19:05")
          : new Date();
      const eventTime = new Date(date);
      const eventStart = createDate(date, start);
      const eventEnd = createDate(date, end);

      const isActive = currentTime <= eventEnd && currentTime >= eventStart;
      const isOver = currentTime > eventEnd;

      if (isOver) {
        return (
          <TimelineItem
            key={index}
            title={`${eventTime.toDateString()}, ${start} - Raum: ${room}`}
          >
            <RoughNotation show type="crossed-off" color="magenta">
              <div>{title}</div>
              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: "200",
                  fontSize: "16px",
                }}
                className="timeline-item-content p m-0 reveal-from-side"
              >{`"${desciption}" - ${author}`}</p>
            </RoughNotation>
          </TimelineItem>
        );
      }

      if (isActive) {
        return (
          <TimelineItem
            key={index}
            title={`${eventTime.toDateString()}, ${start} - Raum: ${room}`}
          >
            <RoughNotation show type="box" color="#98ff98">
              <div>{title}</div>
              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: "200",
                  fontSize: "16px",
                }}
                className="timeline-item-content p m-0 reveal-from-side"
              >{`"${desciption}" - ${author}`}</p>
            </RoughNotation>
          </TimelineItem>
        );
      }

      return (
        <TimelineItem
          key={index}
          title={`${eventTime.toDateString()}, ${start} - Raum: ${room}`}
        >
          {title}
          <p
            style={{
              fontStyle: "italic",
              fontWeight: "200",
              fontSize: "16px",
            }}
            className="timeline-item-content p m-0 reveal-from-side"
          >{`"${desciption}" - ${author}`}</p>
        </TimelineItem>
      );
    };

    const timelineElements = () =>
      talks.map((t, i) => displayEventAccordingToCurrentTime(t, i));
    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            {(() => {
              if (timelineElements().length > 0) {
                return <Timeline>{timelineElements()}</Timeline>;
              } else {
                sectionHeader.paragraph =
                  "Bisher sind keine Events eingetragen.";
              }
            })()}
          </div>
        </div>
      </section>
    );
  }
}

Talks.propTypes = propTypes;
Talks.defaultProps = defaultProps;

export default Talks;
