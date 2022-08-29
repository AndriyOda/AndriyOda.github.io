$(document).ready(function(){

    $(".next").click(function(){
        
        slideIndex = $(".blog_slide-active").index();
        
        if(slideIndex < 2) {
            var needIndex = slideIndex + 1;
            var marg = 100 * needIndex;
            $(".blog_slide").removeClass("blog_slide-active");
            $(".blog_slide:eq(" + needIndex + ")").addClass("blog_slide-active");
            $(".blog_slider-roll").css({"margin-left": "-" + marg + "%", "transition": " 1s "});
        }

    });

    $(".prev").click(function(){
        
        slideIndex = $(".blog_slide-active").index();
        
        if(slideIndex > 0) {
            var needIndex = slideIndex - 1;
            var marg = 100 * needIndex;
            $(".blog_slide").removeClass("blog_slide-active");
            $(".blog_slide:eq(" + needIndex + ")").addClass("blog_slide-active");
            $(".blog_slider-roll").css({"margin-left": "-" + marg + "%", "transition": " 1s "});
        }

    });

});