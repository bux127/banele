const menu = document.querySelector("#menu");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

if (menu) {
  menu.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close)
  [
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    }),
  ];

  
//shoop slider
const itemImg = document.querySelector("#single");
const smallImg = document.querySelectorAll(".small-img");

smallImg[0].onclick = () => {
  itemImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
  itemImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
  itemImg.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
  itemImg.src = smallImg[3].src;
}
smallImg[4].onclick = () => {
  itemImg.src = smallImg[4].src;
}