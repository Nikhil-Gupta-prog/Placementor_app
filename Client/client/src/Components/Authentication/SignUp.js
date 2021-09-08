import React from 'react';
import SignUpForm from '../../UI/SignUpForm';
import Image from "../../Assests/SignUp_image.svg";
import "./SignUp.css";
const SignUp = () => {
    return (
        <div className="parent_signUp">
            <div className="child_signUp">
                <div className="child_signUp_part1" >
                 <img src={Image} />
                </div>
                <div className="child_signUp_part2">
                <SignUpForm />

                </div>

            </div>
        </div>
    )
}

export default SignUp
