
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
        slidesToShow: 13,
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
          breakpoint: 1280,
          settings: {
            slidesToShow: 11,
          }
          
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 9,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 595,
          settings: {
            slidesToShow: 3,
          }
        }
        
        
      
      ]
     
      });
    }); 

// slide lead team
    $(document).ready(function(){

      $('.slide-leadership').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          speed: 500,
          // focusOnSelect: true,
          prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i  class='fa-solid fa-arrow-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next  slick-arrow  pull-right'><i class='fa-solid fa-arrow-right'></i></button>",
          responsive: [
            {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
            }
            
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 986,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 595,
            settings: {
              slidesToShow: 1,
            }
          }
          
          
        
        ]
        });
      }); 

      $(document).ready(function(){

        $('.slide-achievement-box').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i  class='fa-solid fa-angle-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next  slick-arrow  pull-right'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
              {
              breakpoint: 1300,
              settings: {
                slidesToShow: 5,
              }
              
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
              
            },
            {
              breakpoint: 988,
              settings: {
                slidesToShow: 3,
              }
              
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
              
            },
            {
              breakpoint: 595,
              settings: {
                slidesToShow: 1,
              }
              
            },
          ]
          });
        });