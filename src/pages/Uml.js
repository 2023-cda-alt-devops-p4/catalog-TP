import React from "react";
import DiagrammeStructurels from "../components/DiagrammeStructurels/DiagrammeStructurels";
import Sidebar from "../components/Sidebar";
import "../styles/pages/uml.css";

const Uml = () => {
  return (
    <div>
      <Sidebar />
      <section className="diagrammeUML">
        <div className="diagrammeStructurel">
          <DiagrammeStructurels />
        </div>
      </section>
    </div>
  );
};

export default Uml;
