var _ATLAS_ = {};
_ATLAS_.steps = [0.14, 41, 80];
_ATLAS_.volumes = new Array(_ATLAS_.steps.length);
_ATLAS_.currentVolume = 0;

sliceX = null;
sliceY = null;
sliceZ = null;

$(function() {

	// MRI volume
	var volume = new X.volume();
	volume.file = 'data/0.14/volume.nii.gz';
	//volume.labelmap.file = 'data/0.14/labelmap.nii.gz';
	//volume.labelmap.colortable.file = 'data/colortable.txt';

	_ATLAS_.volumes[_ATLAS_.currentVolume] = volume;

	// 3D rendering
	r0 = new X.renderer3D();
	r0.container = '3d';
	r0.config.INTERMEDIATE_RENDERING = true;
	r0.init();
	r0.add(volume);
	r0.camera.position = [ -300, -150, 400 ];
	r0.camera.up = [0, -1, 0];
	r0.onShowtime = function() {
		init_viewer3d();
		init_viewer2d();
	};
	r0.render();


});
