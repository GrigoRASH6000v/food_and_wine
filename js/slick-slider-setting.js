$(document).ready(function(){
    $('.header-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
$(document).ready(function(){
    $('.hit-sales_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
              autoplay: true
            }
          }
        ]
    });
});