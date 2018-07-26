$(document).ready(function(){

  //my code

  $('body').mousemove(function(e){

    // Узнаем ширину&высоту окна
    var viewWidrh  = $(window).width()
    var viewHeight = $(window).height()

    // Узнаем координаты по осях
    var X = e.pageX
    var Y = e.pageY

    //Задаем центр
    var XPositionHalf   = viewWidrh  / 2
    var YPositionHalf   = viewHeight / 2

    var XPositionCenter = -(X - XPositionHalf)
    var YPositionCenter = -(Y - YPositionHalf)
    var Transform     = 'translate(' + XPositionCenter + 'px,' + YPositionCenter + 'px)'

    //Трансформация
    $('leyer').css({"transform": Transform,
                   "transition":"12s"});

    //проверка
    // alert(Transform)

  });

});













// $(document).ready(function(){
//
//   $('body').mousemove(function(e){
//     var X = e.pageX; // положения по оси X
//     var Y = e.pageY; // положения по оси Y
//     var X = -X/10
//     var X = 'translateX(' + X + 'px)'
//     // alert("X: " + X + " Y: " + Y); // вывод результата в консоль
//
//     $('*').css({"transform":X,
//                 "transition":"1s"});
//   });
//
//
//   // $('*').css('transform', 'translate('X'px, 'Y'px)');
//
//
// });



// $('body').css('background-image', 'url(img/1.jpg)')
