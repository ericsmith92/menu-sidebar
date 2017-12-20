//grab required elements
const navBtn = document.querySelector('.navigation__button');
const nav = document.querySelector('.navigation');

//functionality

function toggleNav(){
    nav.classList.toggle('active');
    navBtn.classList.toggle('open');
}

//hook up listeners
navBtn.addEventListener('click', toggleNav);