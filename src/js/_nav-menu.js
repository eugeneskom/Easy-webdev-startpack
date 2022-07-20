let toggleMenuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('.nav__popup');


function toggleTabindex(value) {
 let menuItems = menu.querySelectorAll('.menu-link');
 menuItems.forEach((item) => item.setAttribute('tabindex', value));
}

function toggleMenu(e) {
 toggleMenuBtn.classList.toggle('open');
 menu.classList.toggle('open');  

 // Hide outline after clicking, but don't hide when using the keyboard
 if (e.screenX !== 0 && e.screenY !== 0) {
   toggleMenuBtn.blur();
 }

 let ariaAttribute = toggleMenuBtn.getAttribute('aria-expanded');
 if (ariaAttribute === 'false') {
   toggleMenuBtn.setAttribute('aria-expanded', 'true');  
   toggleTabindex(0);
 } else {
   toggleMenuBtn.setAttribute('aria-expanded', 'false');
   toggleTabindex(-1);
 }
}

toggleMenuBtn.addEventListener('click', toggleMenu);

// On small screens, hide menu items from tab order until menu opens
if (window.innerWidth < 900) {
 toggleTabindex(-1);  
}

// This is to avoid animating the menu transitions when window size changes 
window.addEventListener("resize", () => {
 document.body.classList.add('transition-stop');
 clearTimeout(resizeTimer);
 var resizeTimer = setTimeout(function() {
   document.body.classList.remove('transition-stop');
 }, 300);
});