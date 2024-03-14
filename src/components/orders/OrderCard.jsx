import React from "react";
import "./order.css";

export default function OrderCard({
  orderId,
  orderDate,
  customerName,
  totalAmount,
}) {
  return (
    <>
      <div className="order_card">
        <p>
          Order Id: <span className="value">{orderId}</span>
        </p>
        <p>
          Order Date: <span className="value">{orderDate}</span>
        </p>
        <p>
          Customer Name: <span className="value">{customerName}</span>
        </p>
        <p>
          Total Amount: <span className="value">${totalAmount}</span>
        </p>
      </div>
    </>
  );
}
