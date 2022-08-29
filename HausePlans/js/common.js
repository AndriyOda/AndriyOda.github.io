$(document).ready(function(){




//---------- nav ----------

  $(".navbar").click(function(){
    $(".nav-page").addClass("nav-page-active");
  });
  $(".close").click(function(){
    $(".nav-page").removeClass("nav-page-active");
  });




  // ---------- slider ----------
  
  $(".slider-triggers>ul>li").click(function(){
    numIndex = $(this).index();
    $(".slide").removeClass("slide-active");
    $(".slide:eq(" + numIndex + ")").addClass("slide-active");
    $(".slider-triggers>ul>li").removeClass("active");
    $(".slider-triggers>ul>li:eq(" + numIndex + ")").addClass("active");
  });



  $(".home_item").click(function(){
    numIndex = $(this).index();
    $(".home_item").removeClass("home_item_active");
    $(".home_item:eq(" + numIndex + ")").addClass("home_item_active");
    $(".page-title-inner_comment").removeClass("page-title-inner_comment__activ");
    $(".page-title-inner_comment:eq(" + numIndex + ")").addClass("page-title-inner_comment__activ");
  });






  // ---------- filter ----------

  var houde_type    = $(".houde-type>li.active").attr('id');
  var bedroom_type  = $(".bedroom-type>li.active").attr('id');
  var plus_type     = $(".plus-type>li.active").attr('id');

  $(".houde-type>li").click(function(){

    houde_type = $(this).attr('id');

    $(".houde-type>li").removeClass("active");
    $(this).addClass("active");

    $(".card").removeClass("card-active");

    $(".card." + houde_type + "." + bedroom_type + "." + plus_type).addClass("card-active");

  });

  $(".bedroom-type>li").click(function(){

    bedroom_type = $(this).attr('id');

    $(".bedroom-type>li").removeClass("active");
    $(this).addClass("active");

    $(".card").removeClass("card-active");

    $(".card." + houde_type + "." + bedroom_type + "." + plus_type).addClass("card-active");

  });

  $(".plus-type>li").click(function(){

    plus_type = $(this).attr('id');

    $(".plus-type>li").removeClass("active");
    $(this).addClass("active");

    $(".card").removeClass("card-active");

    $(".card." + houde_type + "." + bedroom_type + "." + plus_type).addClass("card-active");

  });

  var plus_type = $(".filter-type>li.active").attr('id');

  if(plus_type == "exterior") {
    $(".card .card-content-inner .ext_img").addClass('ext_img__active');
  } else if(plus_type == "plan") {
    $(".card .card-content-inner img").removeClass('ext_img__active');
  };

  $(".filter-type>li").click(function(){

    plus_type = $(this).attr('id');


    $(".filter-type>li").removeClass("active");
    $(this).addClass("active");

    if(plus_type == "exterior") {
      $(".card .card-content-inner .ext_img").addClass('ext_img__active');
    } else if(plus_type == "plan") {
      $(".card .card-content-inner img").removeClass('ext_img__active');
    };

  });




  var footerHeight = $("footer").height();
  
  $(".footer-empty-place").css({"width": "100%", "height": " " + footerHeight + "px "});
  
  
  var target = $('.footer-empty-place');
  var targetPos = target.offset().top;
  var winHeight = $(window).height();
  var scrollToElem = targetPos - winHeight;
  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
      $("footer").css({"opacity": "1"});
    }

    if(winScrollTop < scrollToElem){
      $("footer").css({"opacity": "0"});
    }
  });







 
    




  






});







