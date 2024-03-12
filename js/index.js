"use strict";

// import 'swiper' from './sliders';
// import './dynamic_adapt.js';

const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("menu-open");
  // if (header.classList.contains('blur-header')) {
  //   header.classList.remove('blur-header');
  // }
});

const navLinks = document.querySelectorAll(".header-link");
console.log(navLinks);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const navMenu = document.querySelector(".nav-menu");

    navMenu.classList.remove("menu-open");
  });
});

window.addEventListener('scroll', blurHeader);

function blurHeader() {
  const header = document.querySelector(".header");
  this.scrollY >= 10
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
}
