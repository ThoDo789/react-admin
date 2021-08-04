import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Chart = ({ title, grid, dataKey, data }) => {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="5 5" />}
          <XAxis dataKey="name" stroke="#5550bd" strokeDasharray="5 5" />

          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#5550bd"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
