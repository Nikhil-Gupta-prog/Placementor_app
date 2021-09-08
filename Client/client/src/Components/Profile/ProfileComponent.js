import React, { useState } from "react";
import "./Profile.css";
import ProfileForm from "../../UI/profileForm";

const ProfileComponent = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const profileUpdateHandler = () => {
    setShowProfileModal(true);
  };
  const HideProfileModal = () => {
    setShowProfileModal(false);
  };
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
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="image"
                className="profile_image"
              />
            </div>
            <div className="cp">
              <div className="cp_1">
                  <div className="child_profile_part2">
                      <p className="child_profile_part2_name">Nikhil Gupta</p>
                      <p className="child_profile_part2_title">Student</p>
                  </div>
                <div className="child_profile_part3">
                  <button
                    className="profile_action"
                    onClick={profileUpdateHandler}
                    type="button"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="cp_2">
                <div className="profile_details_block">
                  <label>User Id:</label>
                  <p>USERID1234</p>
                </div>
                <div className="profile_details_block">
                  <label>Name</label>
                  <p>Nikhil Gupta</p>
                </div>
                <div className="profile_details_block">
                  <label>Contact:</label>
                  <p>+91 9998889990</p>
                </div>
                <div className="profile_details_block">
                  <label>Email Id:</label>
                  <p>nikhilgupta122000@gmail.com</p>
                </div>
                <div className="profile_details_block">
                  <label>College</label>
                  <p>PIET</p>
                </div>
              </div>
              <div className="profile_logout_div">
                <button className="profile_logout">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileComponent;
