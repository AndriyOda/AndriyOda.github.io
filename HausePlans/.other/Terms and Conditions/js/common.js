$(document).ready(function(){
  $(".navbar").click(function(){
    $(".nav-page").addClass("nav-page-active");
  });
  $(".close").click(function(){
    $(".nav-page").removeClass("nav-page-active");
  });
})
