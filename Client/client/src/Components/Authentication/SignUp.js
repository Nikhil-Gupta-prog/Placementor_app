import React, { useRef, useState } from "react";
import Image from "../../Assests/SignUp_image.svg";
import axios from "axios";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
const isEmpty = (value) => value.trim() === "";

const SignUp = () => {
  const history = useHistory()
  const [formInputIsValid, setFormInputIsValid] = useState({
    name: true,
    email: true,
    phone: true,
    password: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enterNameIsValid = !isEmpty(enteredName);
    const enterEmailIsValid = !isEmpty(enteredEmail);
    const enterPhoneIsValid = !isEmpty(enteredPhone);
    const enterPasswordIsValid = !isEmpty(enteredPassword);

    setFormInputIsValid({
      name: enterNameIsValid,
      email: enterEmailIsValid,
      phone: enterPhoneIsValid,
      password: enterPasswordIsValid,
    });

    const formIsValid =
      enterNameIsValid &&
      enterEmailIsValid &&
      enterPhoneIsValid &&
      enterPasswordIsValid;

    if (!formIsValid) {
      return;
    }
    console.log({
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    });

    axios
      .post("http://localhost:8000/api/signup", {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        phone: enteredPhone,
      })
      .then((res) => {
        console.log(res.data);
        history.push('/signin')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="parent_signUp">
      <div className="child_signUp">
        <div className="child_signUp_part1">
          <img src={Image} />
        </div>
        <div className="child_signUp_part2">
          <form onSubmit={submitHandler} className="signUp_form_main">
            <p className="signUpForm_heading">Create New Account</p>

            <div className="input_block">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={nameInputRef} />
              {!formInputIsValid.name && (
                <p className="SignUp_error_message">Enter a valid Name</p>
              )}
            </div>
            <div className="input_block">
              <label htmlFor="number">Phone</label>
              <input type="text" id="number" ref={phoneInputRef} on />
              {!formInputIsValid.phone && (
                <p className="SignUp_error_message">
                  Enter a valid Conatct detail
                </p>
              )}
            </div>
            <div className="input_block">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={emailInputRef} />
              {!formInputIsValid.email && (
                <p className="SignUp_error_message">Enter a valid Email</p>
              )}
            </div>
            <div className="input_block">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" ref={passwordInputRef} />
              {!formInputIsValid.password && (
                <p className="SignUp_error_message">Enter Strong Password</p>
              )}
            </div>
            <button className="action_button">Submit</button>
          </form>
          <Link to="/signin" className="si">Log in with existing account!</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
