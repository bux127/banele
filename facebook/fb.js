const menuItems = document.querySelectorAll('.menu-item');
const msgNotif = document.querySelector('#notif-msgs');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const searchMessage = document.querySelector('#message-search');
const theme = document.querySelector('#theme');
const themeControl = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span')
//root element used to change css variables
const root = document.querySelector(':root')
const coolors = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

//remove active class from all menu items
const changeActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActive();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-pop-up').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-pop-up').style.display = 'block';
            document.querySelector('#notifications .notif-count').style.display = 'none';
        }
    })
})

//search
const searchMsg = () => {
    const val = searchMessage.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

searchMessage.addEventListener('keyup', searchMsg);

//messages
msgNotif.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    msgNotif.querySelector('.notif-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

//display
const openTheme = () => {
    themeControl.style.display = 'grid';
}

const closeTheme = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeControl.style.display = 'none';
    }
}
theme.addEventListener('click', openTheme);
themeControl.addEventListener('click', closeTheme);

const removeSizeActive = ()=> {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    
    size.addEventListener('click', () => {
        removeSizeActive();
        let fontSize;
        size.classList.toggle('active')

        if(size.classList.contains('fs-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('fs-2')){
            fontSize = '12px'
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('fs-3')){
            fontSize = '14px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('fs-4')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(size.classList.contains('fs-5')){
            fontSize = '18px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
    //change root font size 
        document.querySelector('html').style.fontSize = fontSize;
    })
})


const changeActiveColor = () => {
    coolors.forEach(col => {
        col.classList.remove('active');
    })
}

coolors.forEach(color => {
    color.addEventListener('click', () => {
        changeActiveColor();
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--color-hue', primaryHue);
    })
})

let lightColorVar;
let whiteColorVar;
let darkColorVar;

//set background root
const changeBG = () => {
    root.style.setProperty('--color-light-var', lightColorVar);
    root.style.setProperty('--color-white-var', whiteColorVar);
    root.style.setProperty('--color-dark-var', darkColorVar);
}

bg1.addEventListener('click', () => {
    darkColorVar = '5%';
    whiteColorVar = '87%';
    lightColorVar = '100%';
        //add active to bg1
    bg1.classList.add('active');
    //remove active on other bgs
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    changeBG()
})

bg2.addEventListener('click', () => {
    darkColorVar = '95%';
    whiteColorVar = '20%';
    lightColorVar = '15%';

        //add active to bg2
    bg2.classList.add('active');
    //remove active on other bgs
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorVar = '95%';
    whiteColorVar = '10%';
    lightColorVar = '0%';

        //add active to bg3
    bg3.classList.add('active');
    //remove active on other bgs
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})