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

let products = document.querySelectorAll(".products");

let mainimg = document.getElementById("bigimg");
products.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "singlePro.html";
  });
});

let Singleproimgs = document.getElementsByClassName("small-imgs");

Singleproimgs[0].onclick = () => {
  mainimg.src = Singleproimgs[0].src;
};

Singleproimgs[1].onclick = () => {
  mainimg.src = Singleproimgs[1].src;
};
Singleproimgs[2].onclick = () => {
  mainimg.src = Singleproimgs[2].src;
};
Singleproimgs[3].onclick = () => {
  mainimg.src = Singleproimgs[3].src;
};
