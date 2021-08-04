import React from "react";
import "./NewUser.css";
const NewUser = () => {
  return (
    <div className="new-user">
      <h1 className="new-user-title">New User</h1>
      <form className="new-user-form">
        <div className="new-user-item">
          <label>Username</label>
          <input type="text" className="user-update-input" placeholder="JKey" />
        </div>
        <div className="new-user-item">
          <label>Full Name</label>
          <input
            type="text"
            className="user-update-input"
            placeholder="JKey ken"
          />
        </div>
        <div className="new-user-item">
          <label>Email</label>
          <input
            type="text"
            className="user-update-input"
            placeholder="jkey@gmail.com"
          />
        </div>

        <div className="new-user-item">
          <label>Password</label>
          <input type="password" className="user-update-input" />
        </div>
        <div className="new-user-item">
          <label>Phone</label>
          <input
            type="number"
            className="user-update-input"
            placeholder="+123 456 789"
          />
        </div>
        <div className="new-user-item">
          <label>Address</label>
          <input
            type="text"
            className="user-update-input"
            placeholder="HCM | VN"
          />
        </div>
        <div className="new-user-item">
          <label>Gender</label>
          <div className="new-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="other">Female</label>
            <input type="radio" name="gender" id="other" value="female" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="new-user-item">
          <label>Active</label>
          <select name="active" id="active" className="new-user-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user-btn">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
