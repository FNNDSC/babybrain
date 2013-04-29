// axial, coronal, sagittal slice toggle
$(function() {
	// volume slice toggle
	$( "#axial_slice_toggle" ).button();
	$( "#coronal_slice_toggle" ).button();
	$( "#sagittal_slice_toggle" ).button();

	// volume render toggle
	$("#3d_render_toggle").button();
	$("#3d_render_toggle").click(function() {
		volumerenderingOnOff(true);
	});
  	
  	// image controls
	$("#image_control_threshold").slider({
		range: true,
		rangeDrag: true,
		values: [0, 100],
		slide: thresholdVolume // connect to x.controller.js
	});
	$("#image_control_brightness").slider({
		range: true,
		rangeDrag: true,
		values: [0, 100],
		slide: windowLevelVolume // connect to x.controller.js
	});
	$("#image_control_contrast").slider({
		value: 0,
		min: 0,
		step: 1,
		max: 100,
	});
	$("#image_control_opacity").slider({
		slide: opacity3dVolume
	});

});