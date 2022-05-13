import React,{useState} from "react";

import "./Popup.css";

const Popup = (props) => {
 
  return <div className="Popup_Parent">{props.formD.data}</div>;
};

export default Popup;
