
$(function() {
	$("#atlas-selector-slider").slider({
		value: 0,
		min: 0,
		step: 1,
		max: _ATLAS_.steps.length-1,
		slide: function (event, ui) {


		    $("#atlas-selector-age").val( _ATLAS_.steps[ui.value] );

		    // hide current volume
		    _ATLAS_.volumes[_ATLAS_.currentVolume].visible = false;

		    // hide all meshes
		    for (l in _ATLAS_.meshes[_ATLAS_.currentVolume]) {

		      if (_ATLAS_.meshes[_ATLAS_.currentVolume][l]) {

		        _ATLAS_.meshes[_ATLAS_.currentVolume][l].visible = false;

		      }

		    }


		    // show new volume, load if not loaded before
		    var _volume = _ATLAS_.volumes[ui.value];

		    if (!_volume) {

		      // volume was not loaded before
		      console.log('Loading '+_ATLAS_.steps[ui.value] )
		      _volume = new X.volume();
		      _volume.file = 'data/' + _ATLAS_.steps[ui.value] + '/volume.nii.gz';
		      _volume.labelmap.file = 'data/' + _ATLAS_.steps[ui.value] + '/labelmap.nii.gz';
		      _volume.labelmap.colortable.file = 'data/colortable.txt';

		      r0.add(_volume);

		      // store it in the cache
		      _ATLAS_.volumes[ui.value] = _volume;

	        _ATLAS_.currentVolume = ui.value;

		    } else {

	        _ATLAS_.currentVolume = ui.value;

		      init_viewer2d();
		    }

		    _volume.visible = true;
        _volume.labelmap.opacity = 0;

		}
	});
	$("#atlas-selector-age").val($("#atlas-selector-slider").slider("value"));
});

