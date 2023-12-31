import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Instagram,
  EnvelopeAt,
  Twitter,
  Telephone,
} from "react-bootstrap-icons";

import "./landingpage.css";
import "../../App.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="icons">
          <Instagram className="insta m-3" />
          <EnvelopeAt className="env m-3" />
          <Twitter className="twitter m-3" />
          <Telephone className="tel m-3" />
        </div>
        <div className="subscription">
          <p className="pholiologofooter">Pholio</p>

          <p>© by Pholio 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
