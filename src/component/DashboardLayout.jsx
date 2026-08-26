import React, { useEffect } from "react";
import { PieChartLayout } from "./PieChartLayout";
import { LineChartLayout } from "./LineChartLayout";
import { InformationLayout } from "./InformationLayout";
import { useUser } from "../context/userContext";
export const DashboardLayout = () => {
  const { transData, setTransData, getTranctions } = useUser();
  const displayTransaction = async () => {
    return await getTranctions();
  };
  const balance = transData.reduce(
    (acc, item) =>
      item.type === "income" ? acc + item.amount : acc - item.amount,
    0,
  );
  const income = transData
    .filter((item) => item.type === "income")
    .reduce((acc, item) => acc + item.amount, 0);

  const expanse = transData
    .filter((item) => item.type === "expenses")
    .reduce((acc, item) => acc + item.amount, 0);

  const allData = { balance: balance, income: income, expanse: expanse };

  //   console.log(allData);
  useEffect(() => {
    displayTransaction();
  }, []);

  return (
    <>
      <div className="d-flex flex-column">
        <InformationLayout {...allData} />
        <PieChartLayout {...allData} />
        <LineChartLayout {...allData} />
      </div>
    </>
  );
};
