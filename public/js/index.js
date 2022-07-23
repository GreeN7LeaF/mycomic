$(".container .list").slick({
    dots: true,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    infinite: true
})

$( window ).ready(function() {
    var currPosition = 0;
    
    $(window).scroll(function() {
      currPosition = $(this).scrollTop();
      if(currPosition > 210){
        if(!$('.navbar').hasClass('.bg-nav'))
          $(".navbar").stop(true,false).addClass("bg-nav", {duration:200});
      }else{
        $(".navbar").stop(true,false).removeClass("bg-nav", {duration:200});
      }
    })
  });


