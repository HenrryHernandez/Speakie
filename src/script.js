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

const links = document.querySelectorAll(".menu__link");
links.forEach((link) => link.addEventListener("click", closeMenu));

const changeHeaderColor = () => {
  const header = document.getElementById("header");
  const bars = document.getElementById("open-menu");
  const desktopMenuBar = document.getElementById("desktop-menu-bar");
  const headerShapeShadow = document.getElementById("header-shape-shadow");
  const signIn = document.getElementById("sign-in");

  const headerSize = 64;

  if (this.scrollY >= headerSize) {
    header.classList.add("bg-one");
    bars.classList.remove("text-one");
    bars.classList.add("text-white");
    desktopMenuBar.classList.remove("text-one");
    desktopMenuBar.classList.add("text-white");
    signIn.classList.remove("text-one");
    signIn.classList.add("text-white");
    headerShapeShadow.classList.add("hidden");
  } else {
    header.classList.remove("bg-one");
    bars.classList.remove("text-white");
    bars.classList.add("text-one");
    desktopMenuBar.classList.remove("text-white");
    desktopMenuBar.classList.add("text-one");
    signIn.classList.remove("text-white");
    signIn.classList.add("text-one");
    headerShapeShadow.classList.remove("hidden");
  }
};

window.addEventListener("scroll", changeHeaderColor);
