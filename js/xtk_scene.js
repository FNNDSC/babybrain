$(function() {

	// MRI volume
	volume = new X.volume();
	volume.file = 'data/vol.nii.gz';
	
	// 3D rendering
	r0 = new X.renderer3D();
	r0.container = '3d';
	r0.config.INTERMEDIATE_RENDERING = true;
	r0.init();
	r0.add(volume);
	r0.camera.position = [ -300, -150, 400 ];
	r0.camera.up = [0, -1, 0];
	r0.onShowtime = function() {
		init_viewer3d()
		init_viewer2d();
	};
	r0.render();


});
