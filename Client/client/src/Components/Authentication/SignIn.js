import React,{useState} from "react";
import "./SignIn.css";
const SignIn = () => {
    const [emailChangeHandler, setemailChangeHandler] = useState('');
    const [passwordChangeHandler,setPasswordChangeHandler]= useState('');
  return (
    <div className="signIn_parent">
      <div className="signIn_child">
        <form>
            <p className="signIn_heading">Login Here</p>
          <div className="signIn_InputBlock">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={emailChangeHandler} />
          </div>
          <div className="signIn_InputBlock">
            <label htmlFor="password">Passowrd</label>
            <input id="password" type="password" onChange={passwordChangeHandler} />
          </div>
          <div className="signIn_action">
          <button >Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
