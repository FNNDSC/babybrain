$(document).ready(function(){

	$('#dialog').jqm();

	$("#info_button").click(function(){
	
		var targetUrl = $(location).attr('href') + 'info/template.html';
		//_ATLAS_.infoWindow = window.open();
		//_ATLAS_.infoWindow.location = targetUrl;
		document.getElementById('info_frame').contentWindow.location = targetUrl;
		$('#dialog').jqmShow();
		
	});

});