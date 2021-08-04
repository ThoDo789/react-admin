import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h2 className="user-title">Edit User</h2>
        <Link to="/new-user">
          <button className="user-add-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.unsplash.com/photo-1542065435-d6bc2eac3377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-title">
              <span className="user-show-username">Anna</span>
              <span className="user-show-usertitle">Software engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-content">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-info-title">thodo94</span>
            </div>
          </div>
          <div className="user-show-info">
            <CalendarToday className="user-show-icon" />
            <span className="user-show-info-title">8.1994</span>
          </div>
          <span className="user-show-content">Contact Details</span>

          <div className="user-show-info">
            <PhoneAndroid className="user-show-icon" />
            <span className="user-show-info-title">+847273755</span>
          </div>
          <div className="user-show-info">
            <MailOutline className="user-show-icon" />
            <span className="user-show-info-title">thodo7199@gmail.com</span>
          </div>
          <div className="user-show-info">
            <LocationSearching className="user-show-icon" />
            <span className="user-show-info-title">Viet Nam</span>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>

          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="JKey"
                />
              </div>
              <div className="user-update-item">
                <label>Full Name</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="JKey ken"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="email"
                  className="user-update-input"
                  placeholder="jkey@gmail.com"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="number"
                  className="user-update-input"
                  placeholder="+123 456 789"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="HCM | VN"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt=""
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-upload-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
