// @codekit-prepend "flickity.min.js";

// =======================================================================
// Site scripts
// =======================================================================

// Masthead Modal + Toggle
var mastheadToggle = document.querySelector('.c-masthead-toggle');
var mastheadModal = document.querySelector('.c-masthead-modal');

var toggleClick = function toggleClick(e) {
   e.preventDefault();
   mastheadModal.classList.toggle('c-masthead-modal--open');
   mastheadToggle.classList.toggle('c-masthead-toggle--click');
};

mastheadToggle.addEventListener('click', toggleClick, false);

// Flickity Scroller
$('.c-section--scroller').flickity({
   freeScroll: true,
   wrapAround: true,
   draggable: false,
   autoPlay: true,
   cellAlign: 'left',
   prevNextButtons: false,
   pageDots: false
});