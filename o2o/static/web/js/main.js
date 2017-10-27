$(function(){
	
});

function anchor(obj){
	if(obj && $(obj)){
		var t = $(obj).offset().top-110;
		$('body,html').animate({'scrollTop':t},300,'swing')
	}
}