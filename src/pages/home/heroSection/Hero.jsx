import React, { useState } from "react";
import "./hero.css";
import Button from "../../../components/common/button/Button";
import HeroImage from "../../../assets/final_hero.png";
export default function Hero() {
  return (
    <>
      <section className="hero_section">
        <div className="hero">
          <div className="hero_text">
            <h1>
              Streamline your business operations with{" "}
              <span className="fy">fy</span>
              <span className="ERP">ERP</span>{" "}
            </h1>
            <h3 className="hero_subtitle">
              Experience seamless management and increased efficiency with our
              comprehensive ERP software. Empower your team, optimize processes,
              and drive growth.
            </h3>
            <div className="btn">
              <Button className={"sign-up-btn"} to="/admin">
                Guest User
              </Button>
            </div>
          </div>
          <div className="hero_image">
            <img src={HeroImage} alt="Hero Image" />
          </div>
        </div>
      </section>
    </>
  );
}
