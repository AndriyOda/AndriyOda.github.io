$(document).ready(function(){




    var target_st = $('#good-design h3');
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


    var target_rt = $('#hight-standart h3');
    var targetPosRt = target_rt.offset().top;
    var scrollToElemRt = targetPosRt - winHeight;
    $(window).scroll(function(){
      var winScrollTopRt = $(this).scrollTop();
      if(winScrollTopRt > scrollToElemRt){
        $(".rt-border-top").addClass("rt-border-top-active");
        $(".rt-border-bot").addClass("rt-border-bot-active");
      }
    });

});