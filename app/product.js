$(document).ready(function(){

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        speed: 500,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows:true,
        centerMode: true,
        focusOnSelect: true,
        centerMode:false,
        prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i  class='fa-solid fa-angle-left'></i></i></button>",
        nextArrow:"<button type='button' class='slick-next  slick-arrow  pull-right'><i class='fa-solid fa-angle-right'></i></button>",
        responsive: [
            {
            breakpoint: 1300,
            settings: {
              slidesToShow: 6,
            }
            
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 986,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 595,
            settings: {
              slidesToShow: 2,
            }
          }
          
          
        
        ]
     
      });
    }); 