// axial, coronal, sagittal slice toggle
$(function() {
	// volume slice toggle
	$( "#axial_slice_toggle" ).button();
	$( "#axial_slice_toggle" ).click(function() {

	  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];

	  volume.children[2].children[Math.floor(volume.indexZ)].visible = !volume.children[2].children[Math.floor(volume.indexZ)].visible;

	});


	$( "#coronal_slice_toggle" ).button();
  $( "#coronal_slice_toggle" ).click(function() {

    var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];

    volume.children[1].children[Math.floor(volume.indexY)].visible = !volume.children[1].children[Math.floor(volume.indexY)].visible;

  });

	$( "#sagittal_slice_toggle" ).button();
  $( "#sagittal_slice_toggle" ).click(function() {

    var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];

    volume.children[0].children[Math.floor(volume.indexX)].visible = !volume.children[0].children[Math.floor(volume.indexX)].visible;

  });

	// volume render toggle
	$("#3d_render_toggle").button();
	$("#3d_render_toggle").click(function() {
	  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
		volume.volumeRendering = !volume.volumeRendering;
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