import {
  AttachMoney,
  CalendarToday,
  CardTravel,
  ChatBubbleOutline,
  DynamicFeed,
  Equalizer,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to="/">
              <LineStyle className="sidebar-icon" />
              Home
              </Link>
            
            </li>
            <li className="sidebar-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>{" "}
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to="/users">
              <PermIdentity className="sidebar-icon" />
              Users
              </Link>
             
            </li>
            <Link to="/products">
            <li className="sidebar-item">
              <Storefront className="sidebar-icon" />
              Products
            </li>
            </Link>
           
            <li className="sidebar-item">
              <AttachMoney className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-item">
              <Equalizer className="sidebar-icon" />
              Report
            </li>
          </ul>
        </div>{" "}
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <MailOutline className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-item">
              <DynamicFeed className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-item">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>{" "}
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <CardTravel className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-item">
              <Link to ="/calender">
              <CalendarToday className="sidebar-icon" />
              Calender
              </Link>
              
            </li>
            <li className="sidebar-item">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
