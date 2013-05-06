$(function() {
	
	var labels = _ATLAS_.labels;
	$('#label_tree').append('<ul>');
	$('#label_tree').append('<li class="label" data-value="all">Show All</li>');
	$('#label_tree').append('<li class="label" data-value="none">Hide All</li>');
	for (l in labels) {
		$('#label_tree').append('<li class="label" data-value="'+labels[l]+'">'+l+'</li>');
	}
	$('#label_tree').append('</ul>');
	
	// create controls
	$("#label_control_opacity").slider({
		value: 0,
		min: 0,
		step: 1,
		max: 100,
		slide: opacityLabelmap
	});
	
	$('.label').click(function(e) {
		var label = $(e.target).attr('data-value');
		toggleLabelmapVisibility(label);
		$( "#label_control_opacity" ).slider( "value", 100*_ATLAS_.labelOpacity );
	});
	
});
