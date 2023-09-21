import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <button className="lien">UML</button>
      </NavLink>
      <NavLink to="/about">
        <button className="lien">Merise</button>
      </NavLink>
    </div>
  );
};

export default Navigation;
