import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">React Admin</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
            <span className="top-icon-badge">2</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542065435-d6bc2eac3377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
            alt=""
            className="top-avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
