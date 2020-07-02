import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

class Clients extends React.Component {
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
      "clients section reveal-fade",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "clients-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            {/*TODO insert sponsoring and paricipants */}
            <ul className="list-reset">
              <li>
                <Image
                  src={require("./../../assets/images/fg-plain.svg")}
                  alt="Fachgruppe Informatik - GA-Universität Göttingen"
                  className="invert-logo"
                  width={250}
                  height={24}
                />
              </li>
              <li>
                <Image
                  src={require("./../../assets/images/clients-00.svg")}
                  alt="Client"
                  width={124}
                  height={24}
                />
              </li>
              <li>
                <Image
                  src={require("./../../assets/images/clients-00.svg")}
                  alt="Client"
                  width={124}
                  height={24}
                />
              </li>
              <li>
                <Image
                  src={require("./../../assets/images/clients-00.svg")}
                  alt="Client"
                  width={124}
                  height={24}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;
