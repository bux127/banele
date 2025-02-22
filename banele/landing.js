document.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth - .5;
    const y = event.clientY / window.innerHeight - .5;

    document.querySelectorAll('.parallax').forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translate(${x * speed * 10}px, ${y * speed * 10}px)`
    })
})

const headerBtn = document.querySelector(".header_menu");
const mobileNav = document.querySelector(".mobile_nav");
const mobileLinks = document.querySelectorAll(".mobile_link");
const themeBtns = document.querySelectorAll("#theme");
const theme = localStorage.getItem("theme"); //get value of theme from localstorage
theme && document.body.classList.add("theme");
theme && document.body.classList.add(theme); // if them = true then theme class will be added to body, which is the lightmode

let mobileNavOpen = false;

headerBtn.addEventListener("click", () => {
  mobileNavOpen = !mobileNavOpen;
  if (mobileNavOpen) {
    mobileNav.style.display = "flex"; //changes display none from css
    document.body.style.overflowY = hidden; //to fit whole page
  } else {
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  }
});

//to make mobile nav close when clicking on each nav link
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavOpen = false;
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  });
});

const handleThemeToggle = () => {
  document.body.classList.toggle("light-mode"); //add light-mode class to body
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light-mode");
  } else {
    localStorage.removeItem("theme");
  }
};

themeBtns.forEach((btn) => btn.addEventListener("click", handleThemeToggle));

const images = document.querySelectorAll(".lazy");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("loading");
      img.classList.add("loaded");
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => {
  observer.observe(img);
});