import React from "react";
import { PieChartLayout } from "./PieChartLayout";
import { LineChartLayout } from "./LineChartLayout";
import { InformationLayout } from "./InformationLayout";

export const DashboardLayout = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <InformationLayout />
        <PieChartLayout />
        <LineChartLayout />
      </div>
    </>
  );
};
