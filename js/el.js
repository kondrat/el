jQuery(document).ready( function(){
	$('#bt table').remove();
	$('#bt').remove();
	$('#bn').remove();
	$('#ch').remove();
	$('.rounded').corners('10px');
	$('div.linkBlock ul').css({'visibility':'hidden','height':'0px'});
	$('div.linkBlock span.watchTip').toggle(
		function(){
			$(this).next('div.linkBlock ul').css({'visibility':'visible','height':'100%'});
		},
		function(){
			$(this).next('div.linkBlock ul').css({'visibility':'hidden','height':'0px'});
		}		
	);
});


