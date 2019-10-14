$(function(){
	$('.addButton')
		.click(function(){
			var nameValue = $('.nameInput').val();
			var descrValue = $('.descriptionInput').val();
			if($.trim(nameValue)===""){
				alert("Пожалуйста, введите Название!")
				return false;
			}
			if ($.trim(descrValue)===""){
				var task = '<div><div class="nameDeal">' + nameValue + 
					   '<button class="remove"></button></div>';
					   
					} else{
						var task = '<div><div class="nameDeal">' + nameValue + 
					   '<button class="remove"></button>'+
					   '<button class="collapse"></button></div>'+
					   '<div class="descriptionDeal" >'+ descrValue + '</div></div>';
					}
			
			$('.empty').remove();
			$('.data').prepend(task);
			$('.nameInput').val('');
			$('.descriptionInput').val('');
			$('.remove').click(function(){
				$(this).parent().parent().remove()
			});
			$('.collapse').off().click(function(){
				var element = $(this).parent().parent().children(".descriptionDeal");
				if(element.css('display')=='block'){
					element.hide();
					$(this).css('background-image', 'url("img/strelka_vlevo.png")');
				} else {
					element.show();
					$(this).css('background-image', 'url("img/strelka.png")');
				}
			  })
		});
});
