import React from "react";
import "./Home.css";

import Image from "../../Assests/home.png";

const Home = () => {
  return (
    <div className="main_home">
      <div className="home">
        <div className="home_title">
          <h4>Welcome to our</h4>
          <p className="home_title_name">PLACEMENTOR</p>

          <div className="button_block">
            <button className="register_button button_slide slide_right">
              Register
            </button>
            <div className="home_login_block">
              <p>Already have an existing account&nbsp;</p>
              <a href="#">Login</a>
            </div>
          </div>
        </div>
        <div className="image_block">
          <img src={Image} className="home_image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
