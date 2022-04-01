const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("show");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
}

document.getElementById("hero").addEventListener("click", () => {
  navbar.classList.remove("show");
});
