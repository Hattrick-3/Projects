$(function(){
	$('.menu')
		.click(function(){
			if ($('.nav').css('display')=='none') {
				$('.nav').show();
				$(this).css('background-image', 'url("img/clear-button.png")');
			} else if($('.nav').css('display')=='block'){
				$('.nav').hide();
				$(this).css('background-image', 'url("img/icon-menu.png")');
			}
			
			
	})
})