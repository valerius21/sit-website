import React from "react";
import classNames from "classnames";
import { RoughNotation } from "react-rough-notation";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import Settings from "../../settings/main.json";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class HeroFull extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      timelineLink,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "hero section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                {`sIT ${Settings.year}`}
              </h1>
              <h4
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="300"
              >{`studentische Informatiktage`}</h4>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  {`Vom `}
                  <RoughNotation
                    type="highlight"
                    color="yellow"
                    style={{ color: "black" }}
                    show
                  >
                    {`${Settings.date} ${Settings.year}`}
                  </RoughNotation>
                  {` werden zum ${Settings.iteration}. Mal die studentischen
                  Informatiktage (sIT${Settings.year}) in Göttingen stattfinden. Als
                  Rahmenthema für die Firmenvorträge haben wir uns dieses Jahr
                  für `}
                  <RoughNotation type="box" show color="#98ff98" padding={2}>
                    {`${Settings.topic}`}
                  </RoughNotation>
                  {` entschieden.`}
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href={`#${timelineLink}`}
                  >
                    Was sind die sIT?
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="hero-figure reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay="800"
            ></div>
          </div>
        </div>
      </section>
    );
  }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;
