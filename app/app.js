$(document).ready(function(){
  $('.Item-Box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed: 3000,
    Infinity:true,
  });
}); 

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navb");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
// Coount


$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
// scoll smooth
// document.addEventListener('touchstart', onTouchStart, {passive: true});
// slide-Logo
$(document).ready(function(){
  $('.Item-box-logo').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows:false,
    dots:false,
    autoplay:true,
    autoplaySpeed: 3000,
    Infinity:true,
    responsive:[
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
    ]
  });
}); 

// popup search
const btnsearch = document.querySelector('.popup')
const opens = document.querySelector('.open-popup-search')
const Content = document.querySelector('.content-popup')

Content.addEventListener('click', function(event){
  event.stopPropagation();
});

function showSearchBtn (){
    opens.classList.add('open');
} 
function Remove(){
  opens.classList.remove('open');
}
  btnsearch.addEventListener('click' , showSearchBtn)
  opens.addEventListener('click', Remove)





