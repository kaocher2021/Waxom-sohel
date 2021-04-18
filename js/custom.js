

$(function(){

    $('.venobox').venobox();

    $('.counter').counterUp({
        delay: 5,
        time: 1000
    });

    /// wow

    new WOW().init();


});

$(function(){

    $('.blog-post').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        centerMode:true,
        centerPadding:false,
      });

});
