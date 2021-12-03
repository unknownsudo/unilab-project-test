let burgerMenu = document.getElementById("burger-menu");
let burgerMenuBut = document.getElementById("burger-menu-button");
let burgerBackdrop = document.getElementById("burger-menu-backdrop");

function burgerMenuOpen() {
  burgerMenu.style.display = "block";
  burgerBackdrop.style.display = "block";
  document.body.style.overflow = "hidden";
}

function burgerMenuClose() {
  burgerMenu.style.display = "none";
  burgerBackdrop.style.display = "none";
  document.body.style.overflow = "visible";
}

burgerMenuBut.addEventListener("click", burgerMenuOpen);
burgerBackdrop.addEventListener("click", burgerMenuClose);
