let burgerButton = document.querySelector('.burger--button');
let burgerLine = document.querySelectorAll('.ligne');
let aButton = document.querySelectorAll('.menu--off');
let menuContent = document.querySelector('.main-menu');
let html = document.querySelector('html');
let home_link = document.querySelectorAll('.main-menu nav a');

burgerButton.addEventListener('click', function(e) {
    e.preventDefault();
    burgerButton.classList.toggle('active'); // bouton burger de on à off et de off à on
    burgerLine.forEach((line) => {
      line.style.background ="#fff";
    });
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

$(window).scroll(function() {
  if (Array.prototype.some.call($('.white-header'), function(element) {
  	scrollPosition = $(window).scrollTop();
    elementTop = $(element).offset().top;
    elementBottom = $(element).outerHeight() + elementTop;
    if (scrollPosition > elementTop && scrollPosition < elementBottom) {
      return true;
    }
    else {
      return false;
    }
  })) {
  	$('.ligne').css('background', '#fff');
  } else {
  	$('.ligne').css('background', '#000');
  }
});
