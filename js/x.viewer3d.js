$(function() {
	// volume slice toggle
	//$("#camera_home").button({
	//	icons: {
	//		primary: "ui-icon-home"
	//	},
	//	text: false
    //});
    //$("#camera_home" ).css({ width: '30px', height: '30px' });
	$("#camera_home").click(function() {
		var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
		r0.camera.position = [ 0, 0, -200 ]; //
		r0.camera.up = [0, 1, 0];
		volume.indexX = 56;
		volume.indexY = 69.5;
		volume.indexZ = 81.5;
	});
	
});


function init_viewer3d() {

	// adjust window/level
  _ATLAS_.volumes[_ATLAS_.currentVolume].windowLow = 40;
  _ATLAS_.volumes[_ATLAS_.currentVolume].windowHigh = 140;

}


