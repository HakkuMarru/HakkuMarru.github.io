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

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

sr.reveal(`.home__top-title, .home__middle-title, .home__bottom-title, .home__description`)
sr.reveal(`.home__button`, {origin: 'bottom'})
sr.reveal(`.nav__toggle`, {origin: 'top'})






















