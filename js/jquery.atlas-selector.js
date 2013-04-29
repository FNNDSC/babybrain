
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

		    // show new volume, load if not loaded before
		    var _volume = _ATLAS_.volumes[ui.value];

		    if (!_volume) {

		      // volume was not loaded before
		      _volume = new X.volume();
		      _volume.file = 'data/' + _ATLAS_.steps[ui.value] + '/volume.nii.gz';

		      r0.add(_volume);

		      // store it in the cache
		      _ATLAS_.volumes[ui.value] = _volume;

	        _ATLAS_.currentVolume = ui.value;

		    } else {

	        _ATLAS_.currentVolume = ui.value;

		      init_viewer2d();
		    }

		    _volume.visible = true;

		}
	});
	$("#atlas-selector-age").val($("#atlas-selector-slider").slider("value"));
});

