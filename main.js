const navArrow = document.getElementById("nav_arrow");
const nav = document.getElementById("nav");
const navList = document.querySelector(".nav__list");

navArrow.addEventListener("click", function () {
  nav.classList.toggle("active");
  navList.classList.toggle("active");
  navArrow.classList.toggle("active");
});

const links = document.querySelectorAll(".nav__list ul a");
const clickDown = document.querySelector(".click_abajo");

for (const link of links) {
  link.addEventListener("click", clickHandler);
  clickDown.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

//lazy-loading-------

const sections = [
  document.querySelector("#about"),
  document.querySelector("#service"),
  document.querySelector("#portfolio"),
  document.querySelector("#contact"),
];

// Agregamos un evento al objeto window para detectar cuándo se hace scroll
window.addEventListener("scroll", () => {
  // Recorremos las secciones y verificamos si son visibles
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= window.innerHeight * 0.8) {
      // Si la sección es visible, la mostramos
      if (!section.classList.contains("visible")) {
        section.classList.add("visible");
      }
    }
  });
});
