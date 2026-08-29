import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

export const PieChartLayout = ({ balance, income, expanse }) => {
  const data = [
    { name: "Balance", value: balance },
    { name: "Income", value: income },
    { name: "Expenses", value: expanse },
  ];

  const COLORS = ["#FFBB28", "#00C49F", "#ff4842ff"];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
