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

const menu = document.querySelector('#nav-open');
const close = document.querySelector('#nav-close');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
nav.style.display = 'flex';
menu.style.display = 'none'
close.style.display = 'inline-block';
})


close.addEventListener('click', () => {
    nav.style.display = 'none';
    menu.style.display = 'inline-block'
    close.style.display = 'none';
    })

    if(document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', () => {
            nav.style.display = 'none';
            menu.style.display = 'inline-block'
            close.style.display = 'none';
        })
    })
    
}
    