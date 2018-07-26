$(document).ready(function(){
	var bg_width = 1024; // Ширина фонового изображения
	var max = 100; // Величина максимального смещения
	
	if ($('#simbol').length){
		// Обнуляем промежуточные переменные
		oldX = 0;
		cur = 50;
		num_l = 0;
		num_r = 0;
		// Событие перемещения мыши
		$(window).mousemove(function(event) {
			// Вычисляем отступ слева для фона, чтобы выровнять его по центру
			var bg_pos = Math.round(($(window).width() - bg_width)/2);
			
			if (event.pageX > oldX){
				if (cur<max){
					// Смещение для уровня 1
					$('#simbol .layer3').css('margin-left', '-=1');
					// Смещение для уровня 2 (каждое второе смещение)
					if (num_l == 1 || num_l == 2)
						$('#simbol .layer2').css('margin-left', '-=1');
					// Смещение для уровня 3 (каждое четвертое смещение)
					if (num_l == 4){	
						$('#simbol .layer1').css('margin-left', '-=1');
					}
					// Смещение фона
					$('body').css('background-position', bg_pos-Math.round((100-cur)/4)+'px 0px');
					cur++;
					num_l++;
					// Обнуляем счетчик
					if (num_l > 4) num_l = 0;					
				}
				
			}
			if (event.pageX < oldX){
				if (cur>0){
					$('#simbol .layer3').css('margin-left', '+=1');
					if (num_r == 1 || num_r == 2)
						$('#simbol .layer2').css('margin-left', '+=1');
					if 	(num_r == 4){
						$('#simbol .layer1').css('margin-left', '+=1');
					}
					$('body').css('background-position', bg_pos-Math.round((100-cur)/4)+'px 0px');
					cur--;	
					num_r++;
					if (num_r > 4) num_r = 0;
				}
			}
			oldX = event.pageX;
		});
	}
})