//create array to generate mark-up data 
const testimonials = [
    {
        author: {
            name: 'Banele',
            image: 'images/prof.webp',
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates facilis perferendis nemo repudiandae delectus omnis iusto id ex quae.',
        date: '06 Feb 2025',
    },
    {
        author: {
            name: 'Msemane',
            image: 'images/hero.jpg',
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates facilis perferendis nemo repudiandae delectus omnis iusto id ex quae.',
        date: '06 Feb 2025',
    },
    {   
        author: {
            name: 'Siri',
            image: 'images/expo8.jpg',
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates facilis perferendis nemo repudiandae delectus omnis iusto id ex quae.',
        date: '06 Feb 2025',
    },
    {   
        author: {
            name: 'Ngovu',
            image: 'images/expo7.jpg',
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates facilis perferendis nemo repudiandae delectus omnis iusto id ex quae.',
        date: '06 Feb 2025',
    },
    {   
        author: {
            name: 'Girl',
            image: 'images/expo6.jpg',
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates facilis perferendis nemo repudiandae delectus omnis iusto id ex quae.',
        date: '06 Feb 2025',
    },
    {   
        author: {
            name: 'Babes',
            image: 'images/expo11.jpg',
        },
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates facilis perferendis nemo repudiandae delectus omnis iusto id ex quae.',
        date: '06 Feb 2025',
        
    },

]



const container = document.querySelector('.test_container');
const previous = document.querySelector('.prev');
const next = document.querySelector('.next');

//create function to generate ecah testimonial on mark-up
const testimonialCard = testimonial => {
    return `
            <div class="testimonial-card">
            <img src="${testimonial.author.image}">
            <h2>${testimonial.author.name}</h2>
            <p>${testimonial.text}</p>
            <date> Created on ${testimonial.date}</date>
            </div>`
}

let currentTestimonial = 4;

const foward = () => {
    if(currentTestimonial < testimonials.length - 1){
        currentTestimonial +=1
        updateHTML();
    }
}

const reverse = () => {
    if(currentTestimonial > 0){
        currentTestimonial -=1
        updateHTML();
    }
}


//add testimonial card to html

//const updateHTML = () => {
    let HTML = testimonialCard(testimonials[currentTestimonial])
    //check if testimonials r more than 1 then display buttons if true
//    if(testimonials.length > 1){
  //      HTML += `<nav>
    //            <button onclick="reverse()">Prev</button>
      //          <button onclick="foward()">Next</button>
//            </nav>`
  //  }
   // container.innerHTML = HTML;

//}

//updateHTML();

// TABS PROJECT

const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    //to target the items with data-id in html
    const id = e.target.dataset.id;
    //remove and add active class
    if(id){
        btns.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        articles.forEach(article => {
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})

//STOP WATCH

const months = [ 'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];
const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun',]

const watch = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-fomart h4')

let countdown = new Date(2025, 3, 2, 9, 43, 15 );
const year = countdown.getFullYear();
const hours =  countdown.getHours();
const minutes = countdown.getMinutes();
let month = countdown.getMonth()
month = months[month]
const date = countdown.getDate()
let day = countdown.getDay()
day = days[day]
watch.textContent = `Time remaining : ${day} ${date} ${month} ${year} ${hours}:${minutes}am`; 

const stopTime = countdown.getTime()

const remainingTime = () => {
    const today = new Date().getTime();
    const t = stopTime - today

    //1s = 1000ms, 1m = 60s, 1hr = 60min, 1d = 24hr
    //convert time to milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let days = t / oneDay;
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMin)
    let seconds = Math.floor((t % oneMin) / 1000)
    const values = [days, hours, minutes, seconds];
    
    //fomart values to have a 0 if the number is less than 10
    const fomart = (item) => {
        if(item < 10) {
            return `0${item}`
        }else{
            return item
        }
    }


    items.forEach((item, index) => {
        item.innerHTML = fomart(values[index]);
    })
    if (t < 0) {
        clearInterval(count);
        deadline.innerHTML = `<h4 class="expired">Time Elapsed<h4>`
    }

}

//setInterval allows code to be run on a timer
let count = setInterval(remainingTime, 1000)

remainingTime();