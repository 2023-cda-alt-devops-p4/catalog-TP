import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <div className="lienUML">UML</div>
      </NavLink>
      <NavLink to="/">
        <div className="lienMerise">Merise</div>
      </NavLink>
    </div>
  );
};

export default Navigation;
