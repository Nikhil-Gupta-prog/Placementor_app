import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about_parent">
      <div className="about_child">
        <p className="about_heading">About Us</p>
        <hr/>
      </div>
      <div className="about_description">
      <div className="about_description_part2">
         <img src="https://us.123rf.com/450wm/zovicota/zovicota2101/zovicota210100002/161517706-interview-employment-process-candidate-selection-recruitment-and-placement-service-recruiting-agency.jpg?ver=6"  className="about_image"/>
        </div>
        <div className="about_description_part1">
          <p className="about_desc_para1">
            Placementor a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. 
          </p>
          <p>
            Placementor a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. 
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default About;
