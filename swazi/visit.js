const swiper = new Swiper(".swiper", {
  slidePerView: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      //will set transalteZ(-400px) on previous slides
      translate: [0, 0, -400],
    },
    next: {
      //will set translateX(100%) on next slides
      translate: ["100%", 0, 0],
    },
  },
  loop: true,
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },

  speed: 300,
  spaceBetween: 100,
});

const menu = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("display");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("display");
});

//scroll sticky navbar
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//static counter
const counter = document.querySelectorAll(".numbers");
counter.forEach((count) => {
  count.textContent = 0;

  increaseCount();

  function increaseCount() {
    let currentNum = +count.textContent;
    const dataCeil = count.getAttribute("data-ceil");

    const increment = dataCeil / 25; //25 = display speed

    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      count.textContent = currentNum;
      setTimeout(increaseCount, 1500);
    } else {
      count.textContent = dataCeil;
    }
  }
});

//swiper for popular destination
const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 35,
  slidePerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay: {
    delay: 5000,
  },
  speed: 400,

  breakpoints: {
    // window width >= 320px
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    968: {
      slidesPerView: 3,
    },
  },
});

//swiper for popular destination
const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 2,
  spaceBetween: 35,
  slidePerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay: {
    delay: 5000,
  },
  speed: 400,

  breakpoints: {
    // window width >= 320px
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    968: {
      slidesPerView: 2,
    },
  },
});
