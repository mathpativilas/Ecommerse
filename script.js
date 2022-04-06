const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");
const btnclick = document.getElementById("btnclick");
const addcart = document.querySelector("#addding");
const firstcart = document.querySelectorAll("#firstcart");
const removecart = document.querySelectorAll(".removecart");

if (firstcart[0]) {
  firstcart[0].addEventListener("click", () => {
    removecart[0].classList.add("cartremove");
  });
}
if (firstcart[1]) {
  firstcart[1].addEventListener("click", () => {
    removecart[1].classList.add("cartremove");
  });
}
if (firstcart[2]) {
  firstcart[2].addEventListener("click", () => {
    removecart[2].classList.add("cartremove");
  });
}
if (firstcart[3]) {
  firstcart[3].addEventListener("click", () => {
    removecart[3].classList.add("cartremove");
  });
}

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
