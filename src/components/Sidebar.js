import React, { useState } from "react";

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
          <button className="lien lienSidebar">Diagrammes structurels</button>
        </li>
        <li>
          <button className="lien lienSidebar">Link 1</button>
        </li>
        <li>
          <button className="lien lienSidebar">Link 2</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
