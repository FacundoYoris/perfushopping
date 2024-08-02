const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

  window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Cambia 50 a la cantidad de desplazamiento que desees antes de que el encabezado se vuelva opaco
      header.classList.add('opaque');
    } else {
      header.classList.remove('opaque');
    }
  });