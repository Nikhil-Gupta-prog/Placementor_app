import React, { useState, useEffect } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enterEmailIsTouched, setEnterEmailIsTouched] = useState(false);
  const [enterPasswordIsTouched, setEnterPasswordIsTouched] = useState(false);


  const enteredEmailIsValid = enteredEmail.trim() !== '';
  const emailInputIsInvalid = !enteredEmailIsValid && enterEmailIsTouched;

  const enteredPasswordIsValid = enteredPassword.trim() !== '';
  const passwordInputIsInvalid = !enteredPasswordIsValid && enterPasswordIsTouched;

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const emailInputBlurHandler = () => {
    setEnterEmailIsTouched(true);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  
  const passwordInputBlurHandler = () => {
    setEnterPasswordIsTouched(true);
  };


  const submitHandler = (e) => {
    e.preventDefault();
    setEnterEmailIsTouched(true);
    setEnterPasswordIsTouched(true);
    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }
    console.log(enteredEmail, enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");
    setEnterEmailIsTouched(false);
    setEnterPasswordIsTouched(false);
  };

  return (
    <div className="signIn_parent">
      <div className="signIn_child">
        <div className="signIn_child_part1">
          <p className="signIn_child_part1_heading"> WELCOME BACK!</p>
          <p className="signIn_child_part1_subheading">To keep connected with us please login with Us</p>
        </div>
        <div className="signIn_child_part2">
          <form onSubmit={submitHandler}>
            <p className="signIn_heading">Login Here</p>
            <div className="signIn_InputBlock">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailInputBlurHandler}
              />
              {emailInputIsInvalid && <p className="SignUp_error_message">Please enter your email</p>}
            </div>
            <div className="signIn_InputBlock">
              <label htmlFor="password">Passowrd</label>
              <input
                id="password"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordInputBlurHandler}
              />
              {passwordInputIsInvalid && <p className="SignUp_error_message">Please enter your password</p>}
            </div>
            <div className="signIn_action">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
