const closeMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.remove("top-0");
  menu.classList.add("-top-80");
};

const closeMenuBtn = document.getElementById("close-menu");
closeMenuBtn.addEventListener("click", closeMenu);

const openMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.remove("-top-80");
  menu.classList.add("top-0");
};

const openMenuBtn = document.getElementById("open-menu");
openMenuBtn.addEventListener("click", openMenu);
