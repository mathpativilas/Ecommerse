const cartadd = document.getElementsByClassName("adding");

cartadd.forEach((element) => {
  element.onclick = () => {
    window.location.href = "cart.html";
    console.log("clicked");
  };
});
