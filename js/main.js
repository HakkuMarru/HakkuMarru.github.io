/* ---------- SCROLL REVEAL ----------*/
// function scrollReveal() {
//    var revealPoint = 250;
//    var revealElement = document.querySelectorAll(".reveal");
//    console.log(revealElement);
//    for (var i = 0; i < revealElement.length; i++) {
//       var windowHeight = window.innerHeight;
//       var revealTop = revealElement[i].getBoundingClientRect().top;
//       if (revealTop < windowHeight - revealPoint) {
//          revealElement[i].classList.add("active");
//       } else {
//          revealElement[i].classList.remove("active");
//       }
//    }
// }

// window.addEventListener("scroll", scrollReveal);
/* ---------- TOGGLE MENU ---------- */
const toggle = document.querySelector(".toggle-menu");
toggle.addEventListener('click', e => {
   const toggleMenu = document.querySelectorAll('.toggle-menu span');
   const navBox = document.getElementById('nav-menu');

   if (navBox.classList.contains('active-menu')) {
      navBox.classList.remove('active-menu');
   } else {
      navBox.classList.add('active-menu');
   }

   for (let i in toggleMenu) {
      if (toggleMenu[i].classList.contains('active-menu')) {
         toggleMenu[i].classList.remove('active-menu');
      } else {
         toggleMenu[i].classList.add('active-menu');
      }
   }
});
/* ---------- CAROUSEL ---------- */
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
   slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
   currentSlide.classList.remove('current-slide');
   targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
   currentDot.classList.remove('current-slide');
   targetDot.classList.add('current-slide');
} 

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
   if (targetIndex === 0) {
      prevButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden');
   } else if (targetIndex === slides.length-1) {
      prevButton.classList.remove('is-hidden');
      nextButton.classList.add('is-hidden');
   } else {
      prevButton.classList.remove('is-hidden');
      nextButton.classList.remove('is-hidden');
   }
}

prevButton.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const prevSlide = currentSlide.previousElementSibling;
   const currentDot = dotsNav.querySelector('.current-slide');
   const prevDot = currentDot.previousElementSibling;
   const prevIndex = slides.findIndex(slide => slide === prevSlide);

   moveToSlide(track, currentSlide, prevSlide);
   updateDots(currentDot, prevDot);
   hideShowArrows(slides, prevButton, nextButton, prevIndex);
})


nextButton.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const nextSlide = currentSlide.nextElementSibling;
   const currentDot = dotsNav.querySelector('.current-slide');
   const nextDot = currentDot.nextElementSibling;
   const nextIndex = slides.findIndex(slide => slide === nextSlide);

   moveToSlide(track, currentSlide, nextSlide);
   updateDots(currentDot, nextDot);
   hideShowArrows(slides, prevButton, nextButton, nextIndex);
})


dotsNav.addEventListener('click', e => {
   const targetDot = e.target.closest('button');

   if (!targetDot) return;

   const currentSlide = track.querySelector('.current-slide');
   const currentDot = dotsNav.querySelector('.current-slide');
   const targetIndex = dots.findIndex(dot => dot === targetDot);
   const targetSlide = slides[targetIndex];

   moveToSlide(track, currentSlide, targetSlide);
   updateDots(currentDot, targetDot);
   hideShowArrows(slides, prevButton, nextButton, targetIndex);
})

/* ---------- TYPING ANIMATION ----------*/
const textArray = ["Hello,", "I'm Daniel", "and I am a", "Web\nDeveloper"];
const idArray = ["id_01", "id_02", "id_03" ,"id_04"];

const typing = (text, textId) => {
   let i = 0;
   setInterval (function() {
      if (i < text.length) {
         document.getElementById(textId).innerHTML += text.charAt(i);
         i++;
      }
   }, 100);
}

function typingFunction(textArray, idArray) {
   let i = 0;
   setInterval (function() {
      if (i < 5) {
         typing(textArray[i], idArray[i]);

         if (i > 0) {
            document.getElementById(idArray[i]).classList.add('active-line');
            document.getElementById(idArray[i-1]).classList.remove('active-line');
         }
         i++;
      }
   }, 1200);
}

typingFunction(textArray, idArray);











