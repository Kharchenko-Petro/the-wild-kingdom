'use strict'

// import './dynamic_adapt.js';

const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('menu-open');
})