const humberg = document.querySelector(".navigation");
const navList = document.querySelector(".nav-list");
const icon = document.querySelector(".fa-bars");
const times = document.querySelector(".times");
const navLink = document.querySelectorAll(".nav-link");

humberg.addEventListener("click", function () {
  navList.classList.replace("nav-list", "column");
  times.classList.add("fa-times");
  navList.style.display = "block";
});

times.addEventListener("click", function () {
  navList.style.display = "none";
});

navLink.forEach((link) =>
  link.addEventListener("click", function () {
    if (window.innerWidth < 600) {
      navList.style.display = "none";
    }
  })
);
