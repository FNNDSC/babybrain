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
		
		if (_ATLAS_.volumes[_ATLAS_.currentVolume].labelmap.opacity == 0){
			_ATLAS_.volumes[_ATLAS_.currentVolume].labelmap.opacity = 0.5;
			$( "#label_control_opacity" ).slider( "value", 50 );
		}
		
		if (label == "all") {
			label = null;
		}
		if (label == "none") {
			label = null;
			_ATLAS_.volumes[_ATLAS_.currentVolume].labelmap.opacity = 0;
			$( "#label_control_opacity" ).slider( "value", 0 );
		}

		_ATLAS_.volumes[_ATLAS_.currentVolume].labelmap.showOnly = label;
	});
	
});
