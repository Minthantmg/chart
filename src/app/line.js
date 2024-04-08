"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { lineChartData } from "../../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineGraph = () => {
  const options = {
    responsive: true,
    Plugin: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "This is A graph Represent",
      },
    },
  };

  return (
    <>
      <Line options={options} data={lineChartData} />
    </>
  );
};
