import React from "react";
import { BarChart } from "./Bar";
import { LineGraph } from "./line";
import { PieChart } from "./pie";

const Page = () => {
  return (
    <>
      <div className="flex">
        <div className="w-1/3">
          <LineGraph />
        </div>
        <div className="w-1/3">
          <BarChart />
        </div>
        <div className="w-1/3">
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default Page;
