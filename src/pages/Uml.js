import React from "react";
import DiagrammeStructurels from "../components/DiagrammeStructurels/DiagrammeStructurels";
import Sidebar from "../components/Sidebar";
import "../styles/pages/uml.css";

const Uml = () => {
  return (
    <div>
      <Sidebar />
      <div className="">
        <DiagrammeStructurels />
      </div>
    </div>
  );
};

export default Uml;
