import React, { useRef, useState } from "react";
import "./SignUpForm.css";

const isEmpty = (value) => value.trim() === "";

const SignUpForm = () => {
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
    console.log({ enteredName, enteredEmail, enteredPhone, enteredPassword });
  };

  return (
    <form onSubmit={submitHandler} className="signUp_form_main">
      <p className="signUpForm_heading">Create New Account</p>

      <div className="input_block">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputIsValid.name && <p className="SignUp_error_message">Enter a valid Name</p>}
      </div>
      <div className="input_block">
        <label htmlFor="number">Phone</label>
        <input type="text" id="number" ref={phoneInputRef} />
        {!formInputIsValid.phone && <p className="SignUp_error_message">Enter a valid Conatct detail</p>}
      </div>
      <div className="input_block">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailInputRef} />
        {!formInputIsValid.email && <p className="SignUp_error_message">Enter a valid Email</p>}
      </div>
      <div className="input_block">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordInputRef} />
        {!formInputIsValid.password && <p className="SignUp_error_message">Enter Strong Password</p>}
      </div>
      <button className="action_button">Submit</button>
    </form>
  );
};

export default SignUpForm;
