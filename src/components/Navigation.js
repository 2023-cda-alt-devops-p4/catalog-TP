import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="UML">
        <div className="lienUML">UML</div>
      </NavLink>
      <NavLink to="MERISE">
        <div className="lienMerise">Merise</div>
      </NavLink>
    </div>
  );
};

export default Navigation;
