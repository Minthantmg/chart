"use client";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement } from "chart.js";
import { pieChartData } from "../../constants";

Chartjs.register(Tooltip, Legend, ArcElement);

export const PieChart = () => {
  const options = {};
  return (
    <>
      <Doughnut options={options} data={pieChartData} />
      <Pie options={options} data={pieChartData} />
    </>
  );
};
