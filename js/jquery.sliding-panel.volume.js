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
	$("#image_control_opacity").slider({
		slide: opacity3dVolume
	});

});