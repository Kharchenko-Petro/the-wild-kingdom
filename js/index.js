const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("menu-open");
  // if (header.classList.contains('blur-header')) {
  //   header.classList.remove('blur-header');
  // }
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const navLinks = document.querySelectorAll(".header-link");
console.log(navLinks);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const navMenu = document.querySelector(".nav-menu");

    navMenu.classList.remove("menu-open");
  });
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener('scroll', blurHeader);

function blurHeader() {
  const header = document.querySelector(".header");
  this.scrollY >= 10
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener('load', function (e) {
  initSliders();
})

function initSliders() {
  if (document.querySelector('.hero__slider')) {
    new Swiper('.hero__slider', {
      // autoplay: true,
      centeredSlides: true,
      // slidesPerGroupAuto: true,
      loop: true,
      // navigation: {
      //   nextEl: '.hero__arrow_left',
      //   prevEl: '.hero__arrow_right',
      // },
      // observer: true,
			// observeParents: true,
      slidesPerView: 'auto',
      // spaceBetween: 32,
      speed: 800, 
    });
  }
}