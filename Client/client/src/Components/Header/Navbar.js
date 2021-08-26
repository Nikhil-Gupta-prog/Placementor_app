import React,{useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [navResponse, setNavResponse] = useState(false);
  const navToggleHandler = () =>{
    setNavResponse((prevState)=>!prevState);
  }
  return (
    <nav className="parent_nav">
      <div>
          <h1 className="nav_logo" >Placementor</h1>
      </div>
      <nav className={navResponse?"nav_main active":"nav_main"}>
        <div className="hamburger_icon" onClick={navToggleHandler}>Nikhil</div>
        <ul className="parent_nav_list">
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to ="about">About</Link>
          </li>
          <li>
            <Link to ="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to ="/signin">Sign In</Link>
          </li>

          <li>
            <Link to ="/form">Form</Link>
          </li>
          <li>
            <Link to ="/books">Books</Link>
          </li>
          <li>
            <Link to ="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
