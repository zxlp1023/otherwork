/*$(function(){
	var insideOld = 0;
	var insideNews = 0;
	$(window).on('scroll',function(){
		if($('.inside-nav-box').length<=0){
			return false;
		}
		insideOld = $(window).scrollTop();
		var insideTop = $('.inside-nav-box').offset().top
		var timer = setTimeout(function(){
			insideNews = $(window).scrollTop();
		},20)
		if($(window).scrollTop()<=insideTop){
			$(".inside-nav").removeClass('fixed');
		}else{
			$(".inside-nav").addClass('fixed');
			if(insideOld-insideNews>0){
				$(".inside-nav").addClass('active');
			}
			if(insideOld-insideNews<0){
				$(".inside-nav").removeClass('active');
			}	
		}

		var H = $(window).height()/5;
		var limit1 = $('#module1').offset().top-H;
		var limit2 = $('#module2').offset().top-H;
		var limit3 = $('#module3').offset().top-H;
		var limit4 = $('#module4').offset().top-H;
		var limit5 = $('.i-advantage').offset().top-H;
		if(insideOld>=limit1 && insideOld<limit2){
			$('.inside-nav li').removeClass('hover');
			$('.inside-nav li:eq(0)').addClass('hover');
		}else if(insideOld>=limit2 && insideOld<limit3){
			$('.inside-nav li').removeClass('hover');
			$('.inside-nav li:eq(2)').addClass('hover');
		}else if(insideOld>=limit3 && insideOld<limit4){
			$('.inside-nav li').removeClass('hover');
			$('.inside-nav li:eq(3)').addClass('hover');
		}else if(insideOld>=limit4 && insideOld<limit5){
			$('.inside-nav li').removeClass('hover');
			$('.inside-nav li:eq(4)').addClass('hover');
		}else{
			$('.inside-nav li').removeClass('hover');
		}
	})
})*/
$(function(){
	var insideOld = 0;
	var insideNews = 0;
	$(window).on('scroll',function(){
		if($('.inside-nav-box').length<=0){
			return false;
		}
		insideOld = $(window).scrollTop();
		var insideTop = $('.inside-nav-box').offset().top
		var timer = setTimeout(function(){
			insideNews = $(window).scrollTop();
		},20)
		if($(window).scrollTop()<=insideTop){
			$(".inside-nav").removeClass('fixed');
		}else{
			$(".inside-nav").addClass('fixed');
			if(insideOld-insideNews>0){
				$(".inside-nav").addClass('active');
			}
			if(insideOld-insideNews<0){
				$(".inside-nav").removeClass('active');
			}	
		}

		var H = $(window).height()/5;
		var limit1 = $('#module1').offset().top-H;
		var limit2 = $('#module2').offset().top-H;
		var limit3 = $('#module3').offset().top-H;
		var limit4 = $('#module4').offset().top-H;
		var limit5 = $('.i-advantage').offset().top-H;
		if(insideOld>=limit1 && insideOld<limit2){
			$('.inside-nav .sec-nav li').removeClass('hover');
			$('.inside-nav .sec-nav li:eq(0)').addClass('hover');
		}else if(insideOld>=limit2 && insideOld<limit3){
			$('.inside-nav .sec-nav li').removeClass('hover');
			$('.inside-nav .sec-nav li:eq(1)').addClass('hover');
		}else if(insideOld>=limit3 && insideOld<limit4){
			$('.inside-nav .sec-nav li').removeClass('hover');
			$('.inside-nav .sec-nav li:eq(2)').addClass('hover');
		}else if(insideOld>=limit4 && insideOld<limit5){
			$('.inside-nav .sec-nav li').removeClass('hover');
			$('.inside-nav .sec-nav li:eq(3)').addClass('hover');
		}else{
			$('.inside-nav .sec-nav li').removeClass('hover');
		}
	})
})