jQuery(document).ready( function(){
	$('#bt').remove();
	$('.rounded').corners('10px');
	$('div.linkBlock ul').css({'visibility':'hidden','height':'0px'});
	$('div.linkBlock span.watchTip').toggle(
		function(){
			$('div.linkBlock ul').css({'visibility':'visible','height':'100%'});
		},
		function(){
			$('div.linkBlock ul').css({'visibility':'hidden','height':'0px'});
		}		
	);
});



