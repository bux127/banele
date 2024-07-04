//nav scroll background change

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//contact button circle text

const textBtn = document.querySelectorAll('.contact-btn');

textBtn.forEach(textBt => {
    let text = textBt.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 14}deg">${character}</span>`).join('');
})

//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
    
    600: {
        slidesPerView: 2,
        spaceBetween: 40,
    },

    900: {
        slidesPerView:3,
        spaceBetween: 30,
    },

    1200: {
        slidesPerView:4,
        spaceBetween: 20,
    }
    },
  });
