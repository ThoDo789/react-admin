import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";
const WidgetSm = () => {
  return (
    <div className="widgetsm">
      <span className="widgetsm-title">New join member</span>
      <ul className="widgetsm-list">
        <li className="widgetsm-item">
          <img
            src="https://images.unsplash.com/photo-1627680541011-1d3ca5f48091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
            className="widgetsm-img"
          />
          <div className="widgetsm-user">
            <span className="widgetsm-username">Anna Jana</span>
            <span className="widgetsm-user-title">Software Engineneer</span>
          </div>
          <button className="widgetsm-btn">
            <Visibility className="widgetsm-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
