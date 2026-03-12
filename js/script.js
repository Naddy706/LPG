// AOS animation
AOS.init({
  duration: 1000,
  once: true
});


// Navbar scroll effect
window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

navbar.classList.toggle("scrolled",window.scrollY>50);

});

// working toggle on mobile screen

const toggler = document.querySelector(".navbar-toggler");
const closeBtn = document.querySelector(".menu-close");

toggler.addEventListener("click", () => {
toggler.style.display = "none";
closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
toggler.style.display = "block";
closeBtn.style.display = "none";
});


// removing toggler when screen get over 992px
const menuClosed = document.querySelector('.menu-close');
const navCollapse = document.querySelector('#nav');

window.addEventListener('resize', () => {
  if (window.innerWidth >= 992) {
    // Reset navbar-collapse and toggler inline styles
    navCollapse.classList.remove('show');
    navCollapse.style.transform = '';
    navCollapse.style.height = '';// reset Bootstrap collapse height
    menuClosed.style.display = ''; // reset menu-close collapse height
    toggler.style.display = '';    // remove the inline display style
  }
});