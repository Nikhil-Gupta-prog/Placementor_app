import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer_parent">
      <div className="footer_child">
        <div className="footer_child_part footer_child_part_mobileview">
          <p className="footer_child_part_heading">Address</p>

          <address>
            124,Opposite Gayatri Temple,<br></br>
            vatika Jaipur 303904
          </address>
        </div>
        <div className="footer_child_part footer_child_part_mobileview">
          <p className="footer_child_part_heading">Important Links</p>
          <Link to="/">Home</Link>
          <Link to="/form">Form</Link>
          <Link to="/profile">profile</Link>
        </div>
        <div className="footer_child_part">
          <p className="footer_child_part_heading">You can follow us</p>
          <div>
            <Link>
              {" "}
              <IconContext.Provider
                value={{
                  style: { fontSize: "30px", color: " #000", margin: "10px" },
                }}
              >
                <FaLinkedin />
              </IconContext.Provider>
            </Link>
            <Link>
              {" "}
              <IconContext.Provider
                value={{
                  style: { fontSize: "30px", color: " #000", margin: "10px" },
                }}
              >
                <FaTwitter />
              </IconContext.Provider>
            </Link>
            <Link>
              {" "}
              <IconContext.Provider
                value={{
                  style: { fontSize: "30px", color: " #000", margin: "10px" },
                }}
              >
                <FaEnvelope />
              </IconContext.Provider>
            </Link>
            <Link>
              {" "}
              <IconContext.Provider
                value={{
                  style: { fontSize: "30px", color: " #000", margin: "10px" },
                }}
              >
                <FaGithub />
              </IconContext.Provider>
            </Link>
          </div>
          <div className="footer_copyright_line_div">
            <p className="footer_copyright_line">
              copyright &copy; placementor 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
