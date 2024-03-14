import { React, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import OrderDetails from "../../data/mockDataset.json";
import "./order.css";

const BarChart = () => {
  const [orderData, setOrderData] = useState({
    labels: OrderDetails.map((order) => order["Order Date"]),
    datasets: [
      {
        label: "Sales",
        data: OrderDetails.map((order) => order["Sales"]),
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  });

  return (
    <div className="order_chart">
      <Bar data={orderData} />
    </div>
  );
};

export default BarChart;
