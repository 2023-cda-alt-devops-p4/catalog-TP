import React from "react";
let btnOpen = document.querySelector(".btnOpen");
let btnClose = document.querySelector(".btnClose");
let mySidebar = document.querySelector(".mySidebar");

btnOpen.addEventListener("click", function () {
  mySidebar.style.display = "block";
  mySidebar.style.width = "22rem";
  btnClose.style.display = "block";
  btnOpen.style.display = "none";
});
btnClose.addEventListener("click", function () {
  mySidebar.style.width = "4rem";
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
});
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
