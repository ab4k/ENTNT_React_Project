import React, { useState } from "react";
import "./home.css";
import Header from "./headerSection/Header";
import Hero from "./heroSection/Hero";
import ImageTextSection from "./imageTextSection/ImageTextSection";
import Analytics from "../../assets/realTimeAnalytics.png";
import Productivity from "../../assets/productivity.png";
import ImageCard from "./featureCardSection/ImageCard";
import Streamline from "../../assets/streamline.png";
import Efficiency from "../../assets/efficiency.png";
import Experience from "../../assets/experience.png";
import AnalysisVideo from "../../assets/analysis.mp4";
import Footer from "./footer/Footer";
import BarChart from "../../components/orders/OrderChart";
import OrdersData from "../../data/mockDataset.json";
import Dashboard from "../../components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="container">
      {/* Navigation Section Starts Here*/}
      <Header />

      {/* Navigation Section Ends Here */}
      {/* Hero Section Starts Here */}
      <Hero />
      {/* Hero Section Ends Here */}
      {/* First USP Starts Here */}
      <ImageTextSection
        headingText={"Real-Time Analytics for Efficient Business Management"}
        subheadingText={
          "Gain valuable insights and make informed decisions with our ERP software's real-time analytics feature. Monitor key metrics, track performance, and identify trends to optimize your business operations."
        }
        isVideo={false}
        imageUrl={Analytics}
        altText={"USP Image"}
      />
      {/* First USP Ends Here */}
      {/* Feature Card Section Starts Here */}
      <div className="feature_card">
        <ImageCard
          cardImage={Streamline}
          titleText={
            "Streamline your business operations with our ERP software"
          }
          subTitleText={
            "Implementing our ERP software is a seamless process that brings efficiency and organization to your business."
          }
        />
        <ImageCard
          cardImage={Experience}
          titleText={"Experience the power of our ERP software"}
          subTitleText={
            "Our ERP software is designed to meet your business needs with its comprehensive features and functionalities."
          }
        />
        <ImageCard
          cardImage={Efficiency}
          titleText={"Efficiently manage your business with our ERP software"}
          subTitleText={
            "Our ERP software simplifies complex processes, allowing you to focus on growing your business."
          }
        />
      </div>
      {/* Feature Card Section Ends Here */}
      {/* Second USP Starts Here */}
      <ImageTextSection
        headingText={
          "Increase Efficiency, Save Costs | Achieve Scalability, Growth | Enhance Productivity, Collaboration"
        }
        subheadingText={
          "Our ERP software streamlines business processes, automates tasks, and eliminates manual errors, resulting in increased efficiency and significant cost savings. With our ERP software, businesses can easily scale their operations, adapt to changing market demands, and drive sustainable growth. Our ERP software empowers teams to collaborate seamlessly, access real-time data, and make informed decisions, leading to enhanced productivity and better business outcomes."
        }
        isVideo={false}
        imageUrl={Productivity}
        altText={"Productivity, Efficiencty, Sustainablity Image"}
      />
      {/* Second USP Ends Here */}
      {/* Third USP Starts Here */}
      <ImageTextSection
        headingText={"Streamline your business operations today"}
        subheadingText={
          "Experience the power of our ERP software and witness the transformative impact it can have on your business. Our solution is backed by data-driven statistics that demonstrate its effectiveness in streamlining operations, increasing productivity, and driving growth."
        }
        isVideo={true}
        videoUrl={AnalysisVideo}
        altText={"Analysis Video"}
      />
      {/* Third USP Ends Here */}
      {/* Footer Starts Here */}
      <Footer />
      {/* Footer Ends Here */}
    </div>
  );
}
