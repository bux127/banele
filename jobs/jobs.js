const wrapper = document.querySelector(".sliderWrapper");
const menuI = document.querySelectorAll(".maneuItem");
const products = [
  {
    id: 1,
    title: "Maintenance",
    price: "120",
    colors: [
      {
        code: "#081b29",
        img: "images/maintenance1.jpg",
      },
      {
        code: "#081b29",
        img: "images/maintenance2.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Installation",
    price: "400",
    colors: [
      {
        code: "#081b29",
        img: "images/installation1.jpg",
      },
      {
        code: "#081b29",
        img: "images/installation2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Renovation",
    price: "300",
    colors: [
      {
        code: "#081b29",
        img: "images/renovations1.jpg",
      },
      {
        code: "#081b29",
        img: "images/renovations2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Design",
    price: "120",
    colors: [
      {
        code: "#081b29",
        img: "images/design1.jpg",
      },
      {
        code: "#081b29",
        img: "images/design2.jpg",
      },
    ],
  },
];

let chosenProd = products[0];
const currentImg = document.querySelector(".productImg");
const currentPtitle = document.querySelector(".productTitle");
const currentPprice = document.querySelector(".productPrice");
const currentPcolor = document.querySelectorAll(".color");
const currentPsize = document.querySelectorAll(".type");

menuI.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    //change chosen product
    chosenProd = products[index];

    //change product text
    currentPtitle.textContent = chosenProd.title;
    currentPprice.textContent = "E" + chosenProd.price;
    currentImg.src = chosenProd.colors[0].img;

    //changing image as per color
    currentPcolor.forEach((color, index) => {
      color.style.backgroundColor = chosenProd.colors[index].code;
    });
  });
});

currentPcolor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentImg.src = chosenProd.colors[index].img;
  });
});

currentPsize.forEach((size, index) => {
  size.addEventListener("click", () => {
    //to loop and reset each item color
    currentPsize.forEach((size) => {
      size.style.backgroundColor = "transparent";
      size.style.color = "black";
    });
    //then to keep the bg color on selected item
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const prBut = document.querySelector(".prodBut");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

prBut.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
