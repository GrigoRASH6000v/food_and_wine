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
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            
        ]
    });
});