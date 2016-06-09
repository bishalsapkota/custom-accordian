
$(document).ready(function(){
	
	$('.acc-info').hide();
	$('.acc-info.active').show();	
	
	$('.acoordian-menu a').click (function(e){
		var parent = $(this).parent().parent();
		var acc_menu = $(this).parent();
		
		if(parent.find('.acc-info').hasClass("active")){
				return false;
				
			}
			
		$(".acc-info.active").removeClass("active").slideToggle();
		
			if(! parent.find('.acc-info').hasClass("active")){
				parent.find('.acc-info').addClass("active").slideToggle();
			}
				
			if(parent.find('.acc-info').hasClass("active")){	
				/*$('.acoordian-menu span').html('-');*/
				$('.acoordian-menu span').html('+');
				parent.find('.acoordian-menu span').html('-');
			}
				
			
			e.preventDefault();
		
	});
	
	

});