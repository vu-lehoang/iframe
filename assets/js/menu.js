var menuItem = document.querySelectorAll(".menu-hover");
if (menuItem) {
  menuItem.forEach((item) => {
    let pathName = item.children[0].getAttribute("name_src");
    if (window.location.pathname == pathName) {
      item.classList.add("active");
    }
    if (window.location.pathname == "/") {
      menuItem[menuItem.length - 1].classList.add("active");
    }
  });
}
