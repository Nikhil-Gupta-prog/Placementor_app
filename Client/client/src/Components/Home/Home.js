import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Image from "../../Assests/Home.svg";
import { isAutheticated } from "../Authentication/helper/AuthRoutes";

const Home = () => {
  return (
    <div className="home">
      <div className="home_title">
        <h3>Welcome to our</h3>
        <p className="home_title_name">PLACEMENTOR</p>

      { !isAutheticated &&  (<div className="button_block">
          <Link to="/signup" className="home_register_button ">
            SignUp
          </Link>
          <Link to="/signin" className="home_login_button">
            Login{" "}
          </Link>
        </div>)}
      </div>
      <div className="image_block">
        <img src={Image} className="home_image" />
      </div>
    </div>
  );
};

export default Home;
