import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/pages/uml.css";
import DiagrammeMerise from "../components/Merise/DiagrammeMerise";

const Merise = () => {
  return (
    <div>
      <Sidebar />
      <section className="diagrammeUML">
        <div className="diagrammeStructurel">
          <DiagrammeMerise />
        </div>
      </section>
    </div>
  );
};

export default Merise;
