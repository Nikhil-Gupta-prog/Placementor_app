import React from "react";
import Card from "../../UI/Card";
import "./About.css";

const About = () => {
  return (
    <div className="about_parent">
            <div className="about_child1">
              <p className="about_heading">About Us</p>
            </div>
      <div className="about_child2">
        <Card title="Vision"
        image="https://img.favpng.com/15/4/10/success-icon-creative-process-icon-achievement-icon-jKYJnyEP.jpg"
        content= " Placementor is a web-based application that predicts the companies where students will be most successful based on their details. " />
        <Card title="Aim"
        image="https://img.favpng.com/15/4/10/success-icon-creative-process-icon-achievement-icon-jKYJnyEP.jpg"

        content= " Your career is about what you want to be and who you want to be. It’s about bringing your skills, your curiosity and your best true self to your work." />
        <Card title="Achieved"
        image="https://img.favpng.com/15/4/10/success-icon-creative-process-icon-achievement-icon-jKYJnyEP.jpg"

        content= " Your career is about what you want to be and who you want to be. It’s about bringing your skills, your curiosity and your best true self to your work." />
        

      </div>
     
       
      </div>
    
  );
};

export default About;
