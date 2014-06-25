$(document).ready(function() {
  
});



$(document).ready(function($){ //запускаем, когда документ загрузится
$(window).resize(function(){ //Вешаем на событие ресайза у окна функцию
$("#div_id").height($(window).height()); //меняем высоту дива на высоту окна
});
$("#div_id").height($(window).height()); //меняем высоту дива на высоту окна в первый раз, т.к. событие просто при открытии не вызывается
});
