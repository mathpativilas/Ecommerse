const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");
const btnclick = document.getElementById("btnclick");
const addcart = document.querySelector("#addding");
if (btnclick) {
  btnclick.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
}

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

let products = document.querySelectorAll(".products");

let mainimg = document.getElementById("bigimg");
products.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "singlePro.html";
  });
});

let Singleproimgs = document.getElementsByClassName("small-imgs");

if (Singleproimgs[0]) {
  Singleproimgs[0].addEventListener("click", () => {
    mainimg.src = Singleproimgs[0].src;
  });
}

if (Singleproimgs[1]) {
  Singleproimgs[1].addEventListener("click", () => {
    mainimg.src = Singleproimgs[1].src;
  });
}

if (Singleproimgs[2]) {
  Singleproimgs[2].addEventListener("click", () => {
    mainimg.src = Singleproimgs[2].src;
  });
}

if (Singleproimgs[3]) {
  Singleproimgs[3].addEventListener("click", () => {
    mainimg.src = Singleproimgs[3].src;
  });
}
