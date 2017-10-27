$(function(){
	var scrollthis;
	$(window).scroll(function() {
		
		if ($(window).scrollTop() > 0 && !$(".float-right-box").hasClass('show')) {
			$(".float-right-box").addClass('show');
			$(".float-right-box").stop(true,true).addClass('on');
		}
		// var scrollT = $(window).scrollTop();
		// setTimeout(function(){
		// 	scrollthis = $(window).scrollTop();
		// },500);
		// if (scrollT - scrollthis < 0 && scrollT > 100) {
		// 	$(".ins-nav").addClass('fixed');
		// }else{
		// 	$(".ins-nav").removeClass('fixed');
		// }
	});
	$(".float-right-box").hover(function() {
		$(this).stop(true,true).removeClass('on');
	}, function() {
		var _this = $(this);
		if ($(window).scrollTop() > 0) {
			_this.stop(true,true).addClass('on');
		}else{
			$(".float-right-box").removeClass('show');
		}
	});
})