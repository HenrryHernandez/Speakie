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

const changeHeaderColor = () => {
  const header = document.getElementById("header");
  const bars = document.getElementById("open-menu");

  const headerSize = 64;

  if (this.scrollY >= headerSize) {
    header.classList.add("bg-one");
    bars.classList.remove("text-one");
    bars.classList.add("text-white");
  } else {
    header.classList.remove("bg-one");
    bars.classList.remove("text-white");
    bars.classList.add("text-one");
  }
};

window.addEventListener("scroll", changeHeaderColor);
