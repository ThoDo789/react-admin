import React from "react";
import { Chart } from "../chart/Chart";
import { userData } from "../constant";
import FeatureInfo from "../featureInfo/FeatureInfo";
import WidgetLg from "../widgetLg/WidgetLg";
import WidgetSm from "../widgetSm/WidgetSm";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart
        data={userData}
        dataKey="Active user"
        title="User Analytics"
        grid
      />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
