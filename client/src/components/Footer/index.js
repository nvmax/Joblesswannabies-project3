import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Footer() {
  if (Auth.loggedIn()) {
    return (
      <div>
        <footer className="footer-grid font-Poppins">
          <div className="footer-list-style">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Browse">Browse</Link>
            </li>
          </div>
          <div className="footer-list-style font-Poppins">
            <h2 className="footer-title font-Coolvetica">Watches Co.</h2>
            <li>2568 Bradtke Hills Suite 895</li>
            <li>South Orieton, NE 66593-7128</li>
            <li>774-364-7731</li>
          </div>
          <div className="footer-list-style font-Poppins">
            <li>Website for educational purposes only.</li>
            <li>Love the look?</li>
            <li>
              <a href="https://github.com/nvmax/Joblesswannabies-project3">
                Visit github
              </a>
            </li>
          </div>
        </footer>
      </div>
    );
  } else {
    return (
      <div>
        <footer className="footer-grid font-Poppins">
          <div className="footer-list-style">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Browse">Browse</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
          </div>
          <div className="footer-list-style font-Poppins">
            <h2 className="footer-title font-Coolvetica">Watches Co.</h2>
            <li>2568 Bradtke Hills Suite 895</li>
            <li>South Orieton, NE 66593-7128</li>
            <li>774-364-7731</li>
          </div>
          <div className="footer-list-style font-Poppins">
            <li>Website for educational purposes only.</li>
            <li>Love the look?</li>
            <li>
              <a href="https://github.com/nvmax/Joblesswannabies-project3">
                Visit github
              </a>
            </li>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
