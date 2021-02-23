let burgerButton = document.querySelector('.burger--button');
let aButton = document.querySelectorAll('.menu--off');
let menuContent = document.querySelector('.main-menu');
let html = document.querySelector('html');
let home_link = document.querySelectorAll('.main-menu nav a');

burgerButton.addEventListener('click', function(e) {
    e.preventDefault();
    burgerButton.classList.toggle('active'); // bouton burger de on à off et de off à on
    menuContent.classList.toggle('menu-active'); //ouvre la page de menu burger
    html.classList.toggle('main-menu-open'); //empeche le scroll du menu burger
});

aButton.forEach(item => {
  item.addEventListener('click',()=>{
    burgerButton.classList.remove('active'); //remet le bouton burger en off
    menuContent.classList.remove('menu-active'); //referme la page de menu burger
    html.classList.remove('main-menu-open'); //autorise le scroll
  });
});

window.addEventListener('scroll', function() {
  console.log(window.pageYOffset + 'px');
});

Mobile : 850 - 1290
Tablet : 850 - 1190
