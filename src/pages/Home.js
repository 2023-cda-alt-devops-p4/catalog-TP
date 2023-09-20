import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import "../styles/pages/home.css";
import Main from "../components/Main";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="sidebar">
        <Sidebar />
      </div>
      <Main />
    </div>
  );
};

export default Home;
