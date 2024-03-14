import React from "react";
import "./header.css";
import logo from "../../../assets/logo.svg";
import Button from "../../../components/common/button/Button";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="fyERP logo" />
        </div>
        <div className="sign-up-btn">
          <Button className={"sign-up-btn nav-sign-up-btn"} to="/admin">
            Guest User
          </Button>
        </div>
      </nav>
    </header>
  );
}
