import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const LineChart = () => {
  const data = [
    { month: "Jan", expenses: 400, income: 800 },
    { month: "Feb", expenses: 300, income: 900 },
    { month: "Mar", expenses: 500, income: 850 },
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#22c55e" />
          <Line type="monotone" dataKey="expenses" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
