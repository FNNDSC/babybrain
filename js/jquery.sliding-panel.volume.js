// axial, coronal, sagittal slice toggle
$(function() {
	// volume slice toggle
	$( "#axial_slice_toggle" ).button();
	$( "#axial_slice_toggle" ).click(function() {
		toggleAxialSliceVisibility();
	});

	$( "#coronal_slice_toggle" ).button();
	$( "#coronal_slice_toggle" ).click(function() {
		toggleCoronalSliceVisibility();
	});

	$( "#sagittal_slice_toggle" ).button();
	$( "#sagittal_slice_toggle" ).click(function() {
		toggleSagittalSliceVisibility();
	});

	// volume render toggle
	$("#3d_render_toggle").button();
	$("#3d_render_toggle").click(function() {
		toggleVolumeRendering();
		if ($("#3d_render_toggle").is(":checked")){
			$('#axial_slice_toggle').button('disable');
			$('#coronal_slice_toggle').button('disable');
			$('#sagittal_slice_toggle').button('disable');
			$("#image_control_threshold").dragslider('values',0,40);
			$("#image_control_opacity").slider('value',10);
			thresholdVolume(null, [40,null]);
			opacity3dVolume(null, 0.1);
		} else {
			$('#axial_slice_toggle').button('enable');
			$('#coronal_slice_toggle').button('enable');
			$('#sagittal_slice_toggle').button('enable');
			$("#image_control_threshold").dragslider('values',0,0);
			$("#image_control_opacity").slider('value',100);
			thresholdVolume(null, [0,null]);
			opacity3dVolume(null, 1);
		}
	});

  	// image controls
	$("#image_control_threshold").dragslider({
		range: true,
		rangeDrag: true,
		min: 0,
		max: 255,
		values: [0, 255],
		slide: thresholdVolume // connect to x.controller.js
	});
	$("#image_control_brightness").dragslider({
		range: true,
		rangeDrag: true,
		min: 0,
		max: 255,
		values: [40, 140],
		slide: windowLevelVolume // connect to x.controller.js
	});
	$("#image_control_opacity").slider({
		value: 100,
		slide: opacity3dVolume
	});



});