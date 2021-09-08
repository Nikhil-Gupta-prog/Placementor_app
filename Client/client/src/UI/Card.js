import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="about_card_icon_div">
        <img src={props.image} alt={props.title} className="about_card_icon" />
      </div>
      {/* <div className="card_part1">
        <p className="card_part1_heading">{props.title}</p>
      </div> */}
      <div className="card_part1_content_div">
        <p className="card_part1_content">
         {props.content}
        </p>
      </div>
    </div>
  );
};

export default Card;
