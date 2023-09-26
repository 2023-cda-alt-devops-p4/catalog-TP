import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className={`mySidebarClosed ${sidebarVisible ? "mySidebarOpen" : ""}`}>
      <ul className="listSidebar">
        <li>
          <button className={`btnClose ${sidebarVisible ? "btnCloseVisible" : ""}`} onClick={closeSidebar}>
            Close &times;
          </button>
          <button className={`btnOpen ${!sidebarVisible ? "btnOpenVisible" : ""}`} onClick={openSidebar}>
            &#9776;
          </button>
        </li>
        <li>
          <NavLink to="/">
            <div className={`lien ${!sidebarVisible ? "lienSidebar" : ""}`}>Accueil</div>
          </NavLink>
          <NavLink to="UML">
            <div className={`lien ${!sidebarVisible ? "lienSidebar" : ""}`}>UML</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="UMLClasses">
            <div className={`lien ${!sidebarVisible ? "lienSidebar" : ""}`}>Diagrammes de classes</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="UML">
            <div className={`lien ${!sidebarVisible ? "lienSidebar" : ""}`}>UML</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
