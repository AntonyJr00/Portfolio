const navArrow = document.getElementById("nav_arrow");
const nav = document.getElementById("nav");
const navList = document.querySelector(".nav__list");

navArrow.addEventListener("click", function () {
  nav.classList.toggle("active");
  navList.classList.toggle("active");
  navArrow.classList.toggle("active");
});

const links = document.querySelectorAll(".nav__list ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
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
