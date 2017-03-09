$('.search-icon')
	.click(function(){
		$('.search input').focus();
	});

$('.navbar .search input')
	.blur(function(){
		if($(this).val().trim() != ""){
			$(this).addClass("dirty");
		}else{
			$(this).removeClass("dirty");
		}
	});
