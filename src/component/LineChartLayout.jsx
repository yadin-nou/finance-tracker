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

export const LineChartLayout = ({ viewByMonth }) => {
  // const data = [
  //   { month: "14/08/2026", expenses: 400, income: 800 },
  //   { month: "21/08/2026", expenses: 300, income: 900 },
  //   { month: "19/08/2026", expenses: 500, income: 850 },
  // ];
  viewByMonth.sort((a, b) => new Date(a.date) - new Date(b.date));
  const data = viewByMonth.map((item) => {
    const month = new Date(item.date).toLocaleString("en-AU", {
      month: "short",
    });

    const date = new Date(item.date).toLocaleDateString("en-AU");

    const income = item.type === "income" ? item.amount : 0;
    const expenses = item.type === "expenses" ? item.amount : 0;
    const title = item.title;
    return { month, date, expenses: expenses, income: income, title };
  });
  // data.sort((a, b) => {
  //   a.month.localeCompare(b.month);
  // });
  //console.log(data);
  const COLORS = ["#00C49F", "#ff4842ff", "black", "blue"];
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke={COLORS[0]} />
          <Line type="monotone" dataKey="expenses" stroke={COLORS[1]} />
          <Line type="monotone" dataKey="title" stroke={COLORS[3]} />
          <Line type="monotone" dataKey="date" stroke={COLORS[2]} />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
