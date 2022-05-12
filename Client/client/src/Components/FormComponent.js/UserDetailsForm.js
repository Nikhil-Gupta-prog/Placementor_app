import React, { useRef, useState } from "react";
// import "../../UI/SignUpForm.css";
import "./UserDetailsForm.css";
import axios from "axios";
import Popup from "../../UI/Popup";
import congo_gif from "../../Assests/congo_gif.gif"


const isEmpty = (value) => value.trim() === "";

const UserDetailsForm = () => {
  const [formD,setFormD] = useState("");
 const [resultValidation, setResultValidation] = useState(true)
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    stream: true,
    degree: true,
    secondary: true,
    higher_secondary: true,
    year: true,
    backlog: true,
    aggregate: true,
    additional_skills: true,
    sem1: true,
    sem2: true,
    sem3: true,
    sem4: true,
    sem5: true,
    sem6: true,
    sem7: true,
    sem8: true,
  });

  const nameInputRef = useRef();
  const degreeInputRef = useRef();
  const streamInputRef = useRef();
  const secondaryInputRef = useRef();
  const higher_secondaryInputRef = useRef();
  const yearInputRef = useRef();
  const backlogInputRef = useRef();
  const aggregateInputRef = useRef();
  const additional_skillsInputRef = useRef();
  const sem1InputRef = useRef();
  const sem2InputRef = useRef();
  const sem3InputRef = useRef();
  const sem4InputRef = useRef();
  const sem5InputRef = useRef();
  const sem6InputRef = useRef();
  const sem7InputRef = useRef();
  const sem8InputRef = useRef();
  const genderSelectRef = useRef();
  const mediumSelectRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDegree = degreeInputRef.current.value;
    const enteredStream = streamInputRef.current.value;

    const enteredSecondary = secondaryInputRef.current.value;
    const enteredHigherSecondary = higher_secondaryInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredBacklog = backlogInputRef.current.value;
    const enteredAggregate = aggregateInputRef.current.value;
    const enteredAdditionalSkills = additional_skillsInputRef.current.value;

    const enteredSem1 = sem1InputRef.current.value;
    const enteredSem2 = sem2InputRef.current.value;
    const enteredSem3 = sem3InputRef.current.value;
    const enteredSem4 = sem4InputRef.current.value;
    const enteredSem5 = sem5InputRef.current.value;
    const enteredSem6 = sem6InputRef.current.value;
    const enteredSem7 = sem7InputRef.current.value;
    const enteredSem8 = sem8InputRef.current.value;
    const enteredGender = genderSelectRef.current.value;
    const enteredMedium = mediumSelectRef.current.value;

    const enterNameIsValid = !isEmpty(enteredName);
    const enterDegreeIsValid = !isEmpty(enteredDegree);
    const enterStreamIsValid = !isEmpty(enteredStream);
    const enterSecondaryIsValid = !isEmpty(enteredSecondary);
    const enterHigherSecondaryIsValid = !isEmpty(enteredHigherSecondary);
    const enterYearIsValid = !isEmpty(enteredYear);
    const enterBacklogIsValid = !isEmpty(enteredBacklog);
    const enterAggregateIsValid = !isEmpty(enteredAggregate);
    const enterAdditionalSkillsIsValid = !isEmpty(enteredAdditionalSkills);

    setFormInputIsValid({
      name: enterNameIsValid,
      degree: enterDegreeIsValid,
      stream: enterStreamIsValid,
      secondary: enterSecondaryIsValid,
      higher_secondary: enterHigherSecondaryIsValid,
      year: enterYearIsValid,
      backlog: enterBacklogIsValid,
      aggregate: enterAggregateIsValid,
      additional_skills: enterAdditionalSkillsIsValid,
    });

    const formIsValid =
      enterNameIsValid &&
      enterDegreeIsValid &&
      enterStreamIsValid &&
      enterSecondaryIsValid &&
      enterHigherSecondaryIsValid &&
      enterYearIsValid &&
      enterBacklogIsValid &&
      enterAggregateIsValid &&
      enterAdditionalSkillsIsValid;

    if (!formIsValid) {
      return;
    }
    setResultValidation(false)

    


    axios
    .post("http://localhost:8000/api/user/form", {
      name: enteredName,
      degree:enteredDegree,
      stream:enteredStream,
      secondary:enteredSecondary,
      higher_secondary:enteredHigherSecondary,
      year: enteredYear,
      aggregate:enteredAggregate,
      backlog:enteredBacklog,
      medium:enteredMedium,
      sem1:enteredSem1,
      sem2:enteredSem2,
      sem3:enteredSem3,
      sem4:enteredSem4,
      sem5:enteredSem5,
      sem6:enteredSem6,
      sem7:enteredSem7,
      sem8:enteredSem8,
      gender:enteredGender,
      additional_skills:enteredAdditionalSkills
    })
    .then((res) => {
    
      // localStorage.removeItem("formResult");
      // localStorage.setItem("formResult", ""); 
      // localStorage.setItem("formResult", JSON.stringify(res));
      setFormD(res);

      
    })
    .catch((err) => {
      console.log(err);
    });



    nameInputRef.current.value = "";
    degreeInputRef.current.value = "";
    streamInputRef.current.value = "";
    secondaryInputRef.current.value = "";
    higher_secondaryInputRef.current.value = "";
    yearInputRef.current.value = "";
    backlogInputRef.current.value = "";
    aggregateInputRef.current.value = "";
    additional_skillsInputRef.current.value = "";
    sem1InputRef.current.value = "";
    sem2InputRef.current.value = "";
    sem3InputRef.current.value = "";
    sem4InputRef.current.value = "";
    sem5InputRef.current.value = "";
    sem6InputRef.current.value = "";
    sem7InputRef.current.value = "";
    sem8InputRef.current.value = "";
  };

  return (
    <div className="userDetailform_parent">
     { resultValidation ? <p className="signUpForm_heading">Student Form</p>:null}
    {resultValidation ?  ( 
      <form onSubmit={submitHandler} className="userDetailform_child">
        <div className="userDetailform_input_block">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputIsValid.name && (
            <p className="SignUp_error_message">Enter a valid Name</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="degree">Degree</label>
          
          <select name="degree" id="degree" ref={degreeInputRef}>
            <option>B.Tech</option>
            <option>M.Tech</option>
          </select>
          {!formInputIsValid.degree && (
            <p className="SignUp_error_message">Enter a valid data</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="stream">Branch</label>
          <input type="text" id="stream" ref={streamInputRef} />
          {!formInputIsValid.stream && (
            <p className="SignUp_error_message">Enter a valid stream</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="secondary">Secondary(CGPA)</label>
          <input
            type="number"
            id="secondary"
            min={0}
            max={10}
            ref={secondaryInputRef}
          
          />
          {!formInputIsValid.secondary && (
            <p className="SignUp_error_message">Enter a valid data</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="higher_secondary">Higher_secondary(CGPA)</label>
          <input
            type="number"
            id="higher_secondary"
            min={0}
            max={10}
            ref={higher_secondaryInputRef}
          />
          {!formInputIsValid.higher_secondary && (
            <p className="SignUp_error_message">Enter a valid data</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="med">Medium</label>
          <select name="medium" id="med" ref={mediumSelectRef}>
            <option>Hindi</option>
            <option>English</option>
          </select>
        </div>

        <div className="userDetailform_input_block">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" ref={yearInputRef} />
          {!formInputIsValid.year && (
            <p className="SignUp_error_message">Enter a valid data</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="backlog">Backlog</label>
          <input type="number" min={0} id="backog" ref={backlogInputRef} />
          {!formInputIsValid.backlog && (
            <p className="SignUp_error_message">Enter a valid data</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="aggregate">Aggregate(CGPA)</label>
          <input
            type="number"
            min={0}
            max={10}
            id="aggregate"
            ref={aggregateInputRef}
          />
          {!formInputIsValid.aggregate && (
            <p className="SignUp_error_message">Enter a valid data</p>
          )}
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem1">Sem1(CGPA)</label>
          <input type="number" min={0} max={10} id="sem1" ref={sem1InputRef} />
       
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem2">Sem2(CGPA)</label>
          <input type="number" min={0} max={10} id="sem2" ref={sem2InputRef} />
          
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem3">Sem3(CGPA)</label>
          <input type="number" min={0} max={10} id="sem3" ref={sem3InputRef} />
         
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem4">Sem4(CGPA)</label>
          <input type="number" min={0} max={10} id="sem4" ref={sem4InputRef} />
        
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem5">Sem5(CGPA)</label>
          <input type="number" min={0} max={10} id="sem5" ref={sem5InputRef} />
         
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem6">Sem6(CGPA)</label>
          <input type="number" min={0} max={10} id="sem6" ref={sem6InputRef} />
         
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem7">Sem7(CGPA)</label>
          <input type="number" min={0} max={10} id="sem7" ref={sem7InputRef} />
          
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="sem8">Sem8(CGPA)</label>
          <input type="number" min={0} max={10} id="sem8" ref={sem8InputRef} />
          
        </div>
        <div className="userDetailform_input_block">
          <label htmlFor="skills">Add. Skills</label>
          <input type="textarea" id="skills" ref={additional_skillsInputRef} />
          {!formInputIsValid.additional_skills && (
            <p className="SignUp_error_message">Enter a valid data</p>
          )}
        </div>

        <div className="userDetailform_input_block">
          <label htmlFor="gend">Gender</label>
          <select name="gender" id="gend" ref={genderSelectRef}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <button className="action_button">Submit</button>
      </form>): 
      <div className="pop">
        <p className="pop_head">Congratulations!</p>
        <img className="pop_image" src={congo_gif} />
        <p className="pop_tagline"> It seems you have got quite a potential and you have chances in following Companies:- </p>
      <Popup formD={formD} />

      </div>
      }
    </div>
  );
};

export default UserDetailsForm;
