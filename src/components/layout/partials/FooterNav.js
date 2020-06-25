import React from "react";
import classNames from "classnames";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="mailto:fachgruppe@informatik.uni-goettingen.de?subject=%5BSIT2020%5D%5BContact%5D">
            Contact
          </a>
        </li>
        <li>
          <a href="mailto:fachgruppe@informatik.uni-goettingen.de?subject=%5BSIT2020%5D%5BTalk%5D">
            Submit talk request
          </a>
        </li>
        <li>
          <a href="https://fsr.math-cs.uni-goettingen.de/fachgruppe-informatik/">
            About us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
