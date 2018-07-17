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

// Scroller
$('.c-section--scroller').animate({ scrollLeft: 2000 }, 35000, "linear");