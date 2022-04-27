import React, { useState } from "react";
import "./SignIn.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { authenticate } from "./helper/AuthRoutes";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
  const [didRedirect, setDidRedirect] = useState(false);
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  const history = useHistory()

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enterEmailIsTouched, setEnterEmailIsTouched] = useState(false);
  const [enterPasswordIsTouched, setEnterPasswordIsTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enterEmailIsTouched;

  const enteredPasswordIsValid = enteredPassword.trim() !== "";
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enterPasswordIsTouched;

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

    axios
      .post("http://localhost:8000/api/signin", {
        email: enteredEmail,
        password: enteredPassword,
      })
      .then((res) => {
        console.log("??????", res.data.token);
        authenticate(res.data.token, () => {
          setDidRedirect(true);
          
        });
        history.push('/form')

        // let expires = new Date();
        // expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24);
        // setCookie(
        //   "access_token",
        //   res.data.user.tokens[res.data.user.tokens.length - 1].token,
        //   { path: window.location.href + "/api/signin", expires }
        // );
      })
      .catch((err) => {
        console.log("SignIn Request Fail");
      });

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
          <p className="signIn_child_part1_subheading">
            To keep connected with us please login with Us
          </p>
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
              {emailInputIsInvalid && (
                <p className="SignUp_error_message">Please enter your email</p>
              )}
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
              {passwordInputIsInvalid && (
                <p className="SignUp_error_message">
                  Please enter your password
                </p>
              )}
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
