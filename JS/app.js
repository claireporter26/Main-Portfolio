const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-right')

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

