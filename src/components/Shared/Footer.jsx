import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>&copy; 2023 Your Hospital Name. All rights reserved.</p>
          </div>
          <div className="col">
            <div className="social-icons">
              <a href="#" className="text-light mx-2">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-light mx-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-light mx-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-light mx-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
