import React, { useState, useEffect } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const emailInputBlurHandler = () => {
    setEmailIsTouched(true);
  };
  const passwordInputBlurHandler = () => {
    setPasswordIsTouched(true);
  };

  const emailIsValid = enteredEmail.includes("@");
  const passwordIsValid = enteredPassword.length >= 4;

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredEmail, enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");
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
              {!emailIsValid && <p>Please enter your email</p>}
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
              {!passwordIsValid && <p>Please enter your password</p>}
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
