/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

sr.reveal(`.home__title, .home__description, .home__button, .about__description, .contact__title, .footer__left, .contact__description`)
sr.reveal(`.chief__title, .chief__description, .statistics__title, .statistics__description, .promo__title`, {origin: 'top'})
sr.reveal(`.product1 .product__container .product__image, .product2 .product__container .product__body, .product2 .product__container .product__image, .product1 .product__container .product__body`, {origin: 'top', interval: 0})
sr.reveal(`.promo__column, .statistics__column, .chief__box`, {interval: 150, origin: 'top'})
sr.reveal(`.contact__form, .about__title`, {origin: 'bottom'})
sr.reveal(`.footer__right .footer__column`, {interval: 150, origin: 'bottom'})

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
function scrollToggle(){
    const toggle = document.getElementById('nav-toggle')
    if(this.scrollY >= 50) toggle.classList.add('scroll-toggle'); else toggle.classList.remove('scroll-toggle')
}
function scrollLogo(){
    const logo = document.getElementById('nav-logo')
    if(this.scrollY >= 50) logo.classList.add('scroll-logo'); else logo.classList.remove('scroll-logo')
}
function scrollLink(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

window.addEventListener('scroll', scrollHeader)
window.addEventListener('scroll', scrollToggle)
window.addEventListener('scroll', scrollLogo)
window.addEventListener('scroll', scrollLink)




