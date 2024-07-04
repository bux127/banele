let menuIcon = document.querySelector("#icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

//header bg color change on scroll
window.onscroll = () => {
  //sticky header
  let head = document.querySelector("header");
  //to add another class
  head.classList.toggle("sticky", window.scrollY > 100);
  //remove close toggle icon + navbar links when choice is made
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
