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
          <button className="lien">Diagrammes structurels</button>
        </li>
        <li>
          <button className="lien">Link 1</button>
        </li>
        <li>
          <button className="lien">Link 2</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
