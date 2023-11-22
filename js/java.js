$('.img-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  $( ".menu-rs-small" ).hide();
  $( ".fa-bars" ).click(function(){
    $('.menu-rs-small').toggle(200);
    if($(".menu-rs-small").css('display')!=='none'){
      var time = setTimeout(function(){
        $(".menu-rs-small").hide(200);
    }, 4000);
    }
    else {
      clearTimeout(time);
  }
  });