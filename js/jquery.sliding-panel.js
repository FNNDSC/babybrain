$(document).ready(function(){
	$(".panel_trigger").click(function(){
		var target = $(this).attr('target');
		$("." + target).toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});