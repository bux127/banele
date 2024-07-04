const arrows = document.querySelectorAll(".arrow");
const music = document.querySelectorAll(".music-list");

arrows.forEach((arrow, index) => {
  const itemLength = music[index].querySelectorAll("img").length;
  let counter = 0; //click counter
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 200);
    counter++;
    if (itemLength - (6 + counter) + (6 - ratio) >= 0) {
      music[index].style.transform = `translateX(${
        music[index].computedStyleMap().get("transform")[0].x.value - 216
      }px)`; //calculates the transition value
    } else {
      music[index].style.transform = "translateX(0)";
      counter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navBar,.sideBar,.toggle");

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
  bn;
});
