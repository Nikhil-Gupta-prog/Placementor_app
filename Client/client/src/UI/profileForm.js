import React,{useRef} from "react";

import "./ProfileForm.css";

const ProfileForm = (props) => {

  const nameInputRef = useRef()
  const phoneInputRef = useRef()
  const emailInputRef = useRef()
  const collegeInputRef = useRef()
  const genderInputRef = useRef()
  const passwordInputRef = useRef()

  const profileFormSubmitHandler = (e) =>{
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredCollege = collegeInputRef.current.value;
    const enteredGender = genderInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
 

  console.log(enteredName,enteredPhone,enteredEmail,enteredCollege,enteredGender,enteredPassword);

}

  return (
    <div className="profileForm_Parent">
      <div className="profileForm_heading_div">
        <p className="profileForm_heading">Update Your Profile</p>
      </div>
      <form className="profileForm_child_form" onSubmit={profileFormSubmitHandler}>
        <div className="profileForm_child">
          <div className="profile_input_block">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref ={nameInputRef} />
          </div>
          <div className="profile_input_block">
            <label htmlFor="number">Phone</label>
            <input type="text" id="number" ref={phoneInputRef}/>
          </div>
          <div className="profile_input_block">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className="profile_input_block">
            <label htmlFor="college">College</label>
            <input id="college" type="text" ref={collegeInputRef} />
          </div>
          <div className="profile_input_block">
            <label htmlFor="gender">Gender</label>
            <input id="gender" list="Gender" ref={genderInputRef} />
            <datalist id="Gender">
              <option value="Male" />
              <option value="Female" />
              <option value="Other" />
            </datalist>
          </div>
          <div className="profile_input_block">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordInputRef} />
          </div>
        </div>
        <div className="profileForm_action_div">
          <button className="profileForm_close_button" type="button" onClick={props.onHide}>Close</button>
          <button className="profileForm_action_button" >Update</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
