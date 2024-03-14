import React from "react";
import { Link } from "react-router-dom";
import RecentOrdersWidget from "./RecentOrdersWidget";
import orderData from "../../data/mockDataset.json";
import HomeIcon from "../../assets/home.png";
import OrderIcon from "../../assets/order-delivery.png";
import ProductIcon from "../../assets/new-product.png";
import Order from "../orders/Order";

export default function Dashboard() {
  return (
    <div className="dashboard_container">
      <div className="sideNavbar">
        <ul className="nav_links">
          <li>
            <Link to="/">
              <div className="icon_container">
                <img src={HomeIcon} alt="home icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/orders" element={<Order />}>
              <div className="icon_container">
                <img src={OrderIcon} alt="order icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <div className="icon_container">
                <img src={ProductIcon} alt="product icon" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="widgets">
        <RecentOrdersWidget />
      </div>
    </div>
  );
}
