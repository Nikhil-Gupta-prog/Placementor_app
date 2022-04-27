import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { isAutheticated } from "../Authentication/helper/AuthRoutes";

const Navbar = () => {
  const [navResponse, setNavResponse] = useState(false);
  const navToggleHandler = () => {
    setNavResponse((prevState) => !prevState);
  };
  return (
    <nav className="parent_nav">
      <div>
        <h1 className="nav_logo">PlaceMentor</h1>
      </div>
      <div className="child_nav2">
        <ul
          className={
            navResponse ? "parent_nav_list_mobileview" : "parent_nav_list "
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>

         { !isAutheticated() &&( <li>
            <Link to="/signup">Sign Up</Link>
          </li>)}
          { !isAutheticated() &&( <li>
            <Link to="/signin">Sign In</Link>
          </li>)}

          {isAutheticated() && (
            <li>
              <Link to="/form">Form</Link>
            </li>
          )}

          {isAutheticated() && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="hamburger_icon" onClick={navToggleHandler}>
        <IconContext.Provider value={{ color: "#2d866d", size: "30px" }}>
          <div>
            <FaBars />
          </div>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
