import React, { useState } from "react";
import "./Profile.css";
import ProfileForm from "../../UI/profileForm";
import { signout } from "../Authentication/helper/AuthRoutes";
import { useHistory } from "react-router-dom";


const ProfileComponent = (props) => {

let userd= JSON.parse(localStorage['profileData'])['user'];

  const history = useHistory()
  console.log(props);

  const [showProfileModal, setShowProfileModal] = useState(false);

  const profileUpdateHandler = () => {
    setShowProfileModal(true);
  };
  const HideProfileModal = () => {
    setShowProfileModal(false);
  };
  const logout = () =>{
  
    signout()
    history.push('/')

  }
  
  return (
    <div>
      {showProfileModal && (
        <div className="modal">
          <ProfileForm onHide={HideProfileModal} />
        </div>
      )}
      {showProfileModal && <div className="backdrop" />}

      <form>
        <div className="parent_profile">
          <div className="child_profile">
            <div className="child_profile_part1">
              <img
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="profile_pic"
                className="profile_image"
              />
            </div>
            <div className="cp">
              <div className="cp_1">
                  <div className="child_profile_part2">
                      <p className="child_profile_part2_name">{userd.name}</p>
                      <p className="child_profile_part2_title">Student</p>
                  </div>
                {/* <div className="child_profile_part3">
                  <button
                    className="profile_action"
                    onClick={profileUpdateHandler}
                    type="button"
                  >
                    Edit Profile
                  </button>
                </div> */}
              </div>
              <div className="cp_2">
                <div className="profile_details_block">
                  <label>User Id:</label>
                  <p>{userd._id}</p>
                </div>
                <div className="profile_details_block">
                  <label>Name</label>
                  <p>{userd.name}</p>
                </div>
                <div className="profile_details_block">
                  <label>Contact:</label>
                  <p>{userd.phone}</p>
                </div>
                <div className="profile_details_block">
                  <label>Email Id:</label>
                  <p>{userd.email}</p>
                </div>
                
              </div>
              <div className="profile_logout_div">
                <button className="profile_logout" onClick={logout}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileComponent;
