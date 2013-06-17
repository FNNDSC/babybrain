
// reset the camera view
function resetCameraPos(axis) {
	var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
	if (axis == 'axial'){
		r0.camera.position = [ 0, 0, -200 ]; //
	} else if (axis == 'coronal'){
		r0.camera.position = [ 0, 200, 0 ]; //
	} else if (axis == 'sagittal'){
		r0.camera.position = [ -200, 0, 0 ]; //
	}
	r0.camera.up = [0, 0, 1];		
	volume.indexX = 56;
	volume.indexY = 69.5;
	volume.indexZ = 81.5;
}


// initialize the 3D viewer
function init_viewer3d() {

	// adjust window/level
	_ATLAS_.volumes[_ATLAS_.currentVolume].windowLow = 40;
	_ATLAS_.volumes[_ATLAS_.currentVolume].windowHigh = 140;

}



// Select mesh from the 3D scene
function scene_picking() {

	r0.interactor.onMouseMove = function() {	

		if ( typeof hoverTimer != 'undefined' ) {
			clearTimeout(hoverTimer);
		}

		hoverTimer = setTimeout(function() {

			// grab the current mouse position
			var _pos = r0.interactor.mousePosition;

			// pick the current object
			var _id = r0.pick(_pos[0], _pos[1]);

			if ( _id != 0 ) {

				var _object = r0.get(_id);
				if ( _object.classname == 'mesh' ) {

					// grab the object's caption
					var _caption = _object.caption;
					
					// ... and its color
					var _color = _object.color.slice();
					_color[0] = parseInt(_color[0] * 255, 10);
					_color[1] = parseInt(_color[1] * 255, 10);
					_color[2] = parseInt(_color[2] * 255, 10);

					// ... and its associated label value
					var labelvalue = _object.file.split("_")[1];
					if (!labelvalue || labelvalue == 0) {
						return;
					}
		
					var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
					volume.labelmap.opacity = 0.6;
					volume.labelmap.showOnly = labelvalue;
					var labelname = volume.labelmap.colortable.get(labelvalue)[0];
					$('#anatomy_caption').html(labelname);
					$('#anatomy_caption').css('color', 'rgb(' + _color + ')');
				}
			}	
		}, 100);
	};
}
