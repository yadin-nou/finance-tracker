import React, { useEffect, useState } from "react";
import { PieChartLayout } from "./PieChartLayout";
import { LineChartLayout } from "./LineChartLayout";
import { InformationLayout } from "./InformationLayout";
import { useUser } from "../context/userContext";
import Form from "react-bootstrap/Form";
export const DashboardLayout = () => {
  const { transData, setTransData, getTranctions } = useUser();
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const displayTransaction = async () => {
    return await getTranctions();
  };
  const handleGetMonth = (e) => {
    setMonth(e.target.value);
  };

  const viewByMonth = transData.filter(
    (item) => new Date(item.date).getMonth() + 1 === +month,
  );
  console.log(month);
  const balance = viewByMonth.reduce(
    (acc, item) =>
      item.type === "income" ? acc + item.amount : acc - item.amount,
    0,
  );
  const income = viewByMonth
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expanse = viewByMonth
    .filter((item) => item.type === "expenses")
    .reduce((acc, item) => acc + item.amount, 0);

  const allData = { balance, income, expanse };

  //console.log(transData.date);
  useEffect(() => {
    displayTransaction();
  }, []);
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // console.log(monthArray);
  return (
    <>
      <div className="d-flex flex-column gap-2 flex-wrap">
        <h4>Monthly Report 2026</h4>
        <Form.Select
          aria-label="Default select example"
          onChange={handleGetMonth}
        >
          {monthArray.map((item, index) => (
            <option
              key={index + 1}
              value={index + 1}
              selected={index + 1 === +month}
            >
              {item}
            </option>
          ))}
        </Form.Select>

        <InformationLayout {...allData} />
        <PieChartLayout {...allData} />
        <LineChartLayout viewByMonth={viewByMonth} />
      </div>
    </>
  );
};
