import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <button className="lienUML">UML</button>
      </NavLink>
      <NavLink to="/">
        <button className="lienMerise">Merise</button>
      </NavLink>
    </div>
  );
};

export default Navigation;
