import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li className="logoName">
            <button className="lien">UML</button>
          </li>
        </NavLink>
        <NavLink to="/about">
          <li>
            <button className="lien">Merise</button>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
