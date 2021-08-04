import React from "react";
import "./widgetLg.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetlg-btn " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3 className="widgetlg-title">Latest transactions</h3>
      <table className="widgetlg-table">
        <thead>
          <tr className="widgetlg-tr">
            <th className="widgetlg-th">Customer</th>
            <th className="widgetlg-th">Date</th>
            <th className="widgetlg-th">Amount</th>
            <th className="widgetlg-th">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetlg-tr">
            <td className="widgetlg-user">
              <img
                src="https://images.unsplash.com/photo-1627680541011-1d3ca5f48091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="widgetlg-img"
              />
              <span className="widget-name">Tho Do</span>
            </td>
            <td className="widget-date"> 3 Agu 2021</td>
            <td className="widget-amount">$122.00</td>
            <td className="widget-status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetlg-tr">
            <td className="widgetlg-user">
              <img
                src="https://images.unsplash.com/photo-1627680541011-1d3ca5f48091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="widgetlg-img"
              />
              <span className="widget-name">Tho Do</span>
            </td>
            <td className="widget-date"> 3 Agu 2021</td>
            <td className="widget-amount">$122.00</td>
            <td className="widget-status">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetlg-tr">
            <td className="widgetlg-user">
              <img
                src="https://images.unsplash.com/photo-1627680541011-1d3ca5f48091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="widgetlg-img"
              />
              <span className="widget-name">Tho Do</span>
            </td>
            <td className="widget-date"> 3 Agu 2021</td>
            <td className="widget-amount">$122.00</td>
            <td className="widget-status">
              <Button type="Declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
