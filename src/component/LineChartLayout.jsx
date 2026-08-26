import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

export const LineChartLayout = () => {
  const data = [
    { month: "Jan", expenses: 400, income: 800 },
    { month: "Feb", expenses: 300, income: 900 },
    { month: "Mar", expenses: 500, income: 850 },
  ];
  const COLORS = ["#00C49F", "#ff4842ff"];
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke={COLORS[0]} />
          <Line type="monotone" dataKey="expenses" stroke={COLORS[1]} />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
