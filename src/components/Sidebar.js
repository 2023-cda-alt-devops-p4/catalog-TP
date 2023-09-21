import React from "react";

const Sidebar = () => {
  return (
    <div className="mySidebar">
      <ul className="listSidebar">
        <li>
          <button className="btnClose">Close &times;</button>
          <button className="btnOpen">&#9776;</button>
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
