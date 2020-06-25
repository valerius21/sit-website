import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";

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
                sIT2020
              </h1>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  Vom **DATUM** 2020 werden zum 16. Mal die studentischen
                  Informatiktage (sIT2020) in Göttingen stattfinden. Als
                  Rahmenthema für die Firmenvorträge haben wir uns dieses Jahr
                  für **THEMA** entschieden.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <Button tag="a" color="primary" wideMobile href="#">
                    Timeline
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
