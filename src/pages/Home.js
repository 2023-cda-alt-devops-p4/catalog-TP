import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import "../styles/pages/home.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
