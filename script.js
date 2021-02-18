let burgerButton = document.querySelector('.burger--button');
let menuContent = document.querySelector('.main-menu');
let logo = document.querySelector('.logo');
let html = document.querySelector('html');
let home_link = document.querySelectorAll('.main-menu nav ul li a');

burgerButton.addEventListener('click', function(e) {
    e.preventDefault();
    burgerButton.classList.toggle('active');
    menuContent.classList.toggle('menu-active');
    html.classList.toggle('main-menu-open');
    logo.classList.toggle('none');
});