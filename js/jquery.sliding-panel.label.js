$(function() {
	
	var labels = _ATLAS_.labels;

	// volume slice toggle
	$( "#label_hover_select" ).button();
	$( "#label_hover_select" ).click(function() {
		_ATLAS_.hoverLabelSelect = !_ATLAS_.hoverLabelSelect;
	});

	$( "#show_all_labels" ).button();
	$( "#show_all_labels" ).click(function() {
		toggleLabelmapVisibility('all');
	});
	
	$( "#hide_all_labels" ).button();
	$( "#hide_all_labels" ).click(function() {
		toggleLabelmapVisibility('none');
	});

	$('#label_tree').append('<ul>');
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
