import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

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
        </li>
        <li>
          <NavLink to="/UML">
            <div className={`lien ${!sidebarVisible ? "lienSidebar" : ""}`}>UML</div>
          </NavLink>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}>- Diagramme De Classes</div>{" "}
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}>- Diagramme Des Composants</div>{" "}
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}>- Diagramme De Deploiement</div>{" "}
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme D'objets</div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme De Paquetage</div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme D'Activite</div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme De Cas D'Utilisation</div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme De Communication</div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme D'Etat</div>
        </li>
        <li>
          <Link to="/UML#test">
            <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme De Temps</div>
          </Link>
        </li>
        <li>
          <div className={`Uml-lien   ${!sidebarVisible ? "lienSidebar" : ""}`}>
            - Diagramme De Presentation Des Interactions
          </div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - Diagramme De Profil</div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - DiagrammeDeSequence</div>
        </li>
        <li>
          <div className={`Uml-lien  ${!sidebarVisible ? "lienSidebar" : ""}`}> - DiagrammeDeStructureComposite</div>
        </li>
        <li>
          <NavLink to="/Merise">
            <div className={`lien ${!sidebarVisible ? "lienSidebar" : ""}`}>Merise</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
