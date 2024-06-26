const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("menu-open");
  // if (header.classList.contains('header-scrolled')) {
  //   header.classList.remove('header-scrolled');
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
window.addEventListener("scroll", blurHeader);

function blurHeader() {
  const header = document.querySelector(".header");
  this.scrollY >= 10
    ? header.classList.add("header-scrolled")
    : header.classList.remove("header-scrolled");
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener("load", function (e) {
  initSliders();
});

function initSliders() {
  if (document.querySelector(".hero__slider")) {
    new Swiper(".hero__slider", {
      autoplay: {
        delay: 5000,
      },
      centeredSlides: true,
      // slidesPerGroupAuto: true,
      loop: true,
      // navigation: {
      //   nextEl: '.hero__arrow_left',
      //   prevEl: '.hero__arrow_right',
      // },
      // observer: true,
      // observeParents: true,
      slidesPerView: "auto",
      // spaceBetween: 32,
      speed: 800,
    });
  }
  if (document.querySelector(".reviews__slider")) {
    new Swiper(".reviews__slider", {
      autoHeight: true,
      autoplay: {
        delay: 5000,
      },
      centeredSlides: true,
      // slidesPerGroupAuto: true,
      loop: true,
      // observer: true,
      // observeParents: true,
      slidesPerView: 1,
      // spaceBetween: 32,
      speed: 800,
      navigation: {
        prevEl: '.reviews__arrow_prev',
        nextEl: '.reviews__arrow_next'
      }
    });
  }
}