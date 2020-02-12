const navToggle = document.querySelector("#m-nav-btn");

navToggle.addEventListener("click", (event) => {
  // Do something (callback)
  console.log("CLICK!");

  const navBar = document.querySelector("#m-nav-bar");
  const navItems = document.querySelector("#m-nav-items");
  if (navBar.classList.contains("m-nav-bar-active")) {
    navBar.classList.remove("m-nav-bar-active");
  } else {
    navBar.classList.add("m-nav-bar-active");
  }
});
