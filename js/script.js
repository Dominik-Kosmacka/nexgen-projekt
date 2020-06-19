$(document).ready(function () {
  $('.slick').slick({
    dots: false,
    infinite: true,
    //slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    centerPadding: '60px',
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    //adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '20px',
        },
      },
    ],
  });
});

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 1500,
  origin: 'bottom',
});
sr.reveal('.showcase-text', {
  duration: 1500,
  origin: 'left',
  distance: '300px',
});
sr.reveal('.showcase-img', {
  duration: 1500,
  origin: 'top',
  distance: '300px',
});
sr.reveal('.cards', {
  duration: 1500,
  origin: 'bottom',
  distance: '200px',
});
sr.reveal('.slick-wrapper', {
  duration: 2000,
  delay: 300,
  origin: 'bottom',
});
