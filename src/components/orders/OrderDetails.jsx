import React from "react";
import "./order.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import ordersData from "../../data/mockDataset.json";

export default function OrderDetails() {
  const rawData = ordersData;
  const chartData = {
    labels: rawData.map((order) => order["Order Date"]),
    datasets: [
      {
        label: "Sales",
        data: rawData.map((order) => order.Sales),
      },
    ],
  };

  return (
    <div>
      {console.log(chartData)}
      <Line data={chartData} />
    </div>
  );
}
