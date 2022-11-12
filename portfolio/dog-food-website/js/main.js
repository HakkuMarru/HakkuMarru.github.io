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

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.menu__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollLink(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 10);
}
window.addEventListener('scroll', scrollLink)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

sr.reveal(`.home__title, .home__column, .about__title, .ingredient__title, .about__column:nth-child(2), .about__food-bag-img, .ingredient__description, .more__body, .more__image, .breeds__column, .products__column, .footer__container`)
sr.reveal(`.about__dog-img, .bottom-sparkle-black, .bottom-sparkle-white`, {origin: 'left'})




