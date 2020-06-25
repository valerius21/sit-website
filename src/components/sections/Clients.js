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
                  src="https://www.uni-goettingen.de/de/document/download/6e9a15c5ffed6b5baf575853b959a03a.png/Uni%20Goettingen%20-%20Logo%204c%20RGB%20-%20White%20-%20300dpi.png"
                  alt="Georg-August-Universität Göttingen"
                  width={300}
                  height={24}
                />
              </li>
              <li>
                <Image
                  src={require("./../../assets/images/fsr_logo.svg")}
                  alt="Fachschaft Informatik, Mathematik u. Data Science Göttingen"
                  className="invert-logo"
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
