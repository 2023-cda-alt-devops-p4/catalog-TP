let btnOpen = document.querySelector(".btnOpen");
let btnClose = document.querySelector(".btnClose");
let mySidebar = document.querySelector(".mySidebar");
let main = document.querySelector("main");

btnOpen.addEventListener("click", function () {
  mySidebar.style.display = "block";
  mySidebar.style.width = "17rem";
  btnClose.style.display = "block";
  btnOpen.style.display = "none";
  main.style.marginLeft = "18rem";
});
btnClose.addEventListener("click", function () {
  mySidebar.style.width = "4rem";
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
  main.style.marginLeft = "5rem";
});
