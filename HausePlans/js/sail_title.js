$(document).ready(function(){







  var target_st = $('.contactors_h3_anim');
  var winHeight = $(window).height();
  var targetPosSt = target_st.offset().top;
  var scrollToElemSt = targetPosSt - winHeight;
  $(window).scroll(function(){
    var winScrollTopSt = $(this).scrollTop();
    if(winScrollTopSt > scrollToElemSt){
      $(".st-border-top").addClass("st-border-top-active");
      $(".st-border-bot").addClass("st-border-bot-active");
    }
  });
    




  






});







