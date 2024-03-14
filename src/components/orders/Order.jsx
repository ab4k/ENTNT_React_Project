import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import ordersData from "../../data/mockDataset.json";
import OrderDetails from "./OrderDetails";
import BarChart from "./OrderChart";

function Order() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders(ordersData);
  }, []);

  return (
    <div className="order_container">
      {orders.map((order) => (
        <OrderCard
          key={order.orderId}
          orderId={order["Order ID"]}
          orderDate={order["Order Date"]}
          customerName={order["Customer Name"]}
          totalAmount={order["Cost"]}
        />
      ))}
      <OrderDetails />
      <BarChart />
    </div>
  );
}

export default Order;
