import React from "react";
import "./dashboard.css";
import RecentOrders from "../../data/mockDataset.json";
import BarChart from "../orders/OrderChart";
function RecentOrdersWidget() {
  return (
    <div className="recent_orders_container">
      {/* <div className="order_cards_container">
        {RecentOrders.map((order) => (
          <div className="recent_order_card">
            <p className="city">{order["City"]}</p>
            <br />
            <p className="category">{order["Category"]}</p>
            <br />
            <p className="order_date">{order["Order Date"]}</p>
          </div>
        ))}
      </div> */}

      <div className="graphs_card">
        <BarChart data={RecentOrders} />
      </div>
      <div className="details_card"></div>
    </div>
  );
}

export default RecentOrdersWidget;
