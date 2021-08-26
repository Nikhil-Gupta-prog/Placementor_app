import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_parent">
      <div className="footer_child">
        <div className="footer_child_part">
          <p className="footer_child_part_heading">Address</p>

          <address>
            124,Opposite Gayatri Temple,<br></br>
            vatika Jaipur 303904
          </address>
        </div>
        <div className="footer_child_part">
          <p className="footer_child_part_heading">Important Links</p>
          <Link>Home</Link>
          <Link>Blogs</Link>
          <Link>Books</Link>
          <Link>Form</Link>
        </div>
        <div className="footer_child_part">
          <p className="footer_child_part_heading">You can follow us</p>
          <Link>Linkdien</Link>
          <Link>Medium</Link>
          <Link>Twitter</Link>
          <Link>Dev Community</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
