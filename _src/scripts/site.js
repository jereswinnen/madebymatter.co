// =======================================================================
// Imports
// =======================================================================

// Imported scripts go here ;)

// =======================================================================
// Site scripts
// =======================================================================

var mastheadToggle = document.querySelector('.c-masthead-toggle');
var mastheadModal = document.querySelector('.c-masthead-modal');

var toggleClick = function toggleClick(e) {
   e.preventDefault();
   mastheadModal.classList.toggle('c-masthead-modal--open');
   mastheadToggle.classList.toggle('c-masthead-toggle--click');
};

mastheadToggle.addEventListener('click', toggleClick, false);

$('.c-section--scroller').animate({ scrollLeft: 800 }, 10000, "linear");