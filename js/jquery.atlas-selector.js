
$(function() {
	$("#atlas-selector-slider").slider({
		value: 0,
		min: 0,
		step: 1,
		max: _ATLAS_.steps.length-1,
		slide: change_volume
	});
	$( "#atlas-selector-slider" ).slider({ disabled: true });
	$("#atlas-selector-age").val($("#atlas-selector-slider").slider("value"));
	
	$("#time_loop").button();
	$( "#time_loop" ).click(function() {
		if ($("#time_loop").is(":checked")){
			start_atlas_loop();
		} else {
			stop_atlas_loop();
		}
	});
	$("#time_loop_label").css({ width: '50px' });
	$("#time_loop_label").hide();

	//temporary fix!!!!!!!!!!!!
	enable_volume_change();
});


function disable_volume_change() {
	$("#time_loop_label").hide();
	$( "#atlas-selector-slider" ).slider({ disabled: true });
	
}


function enable_volume_change() {
	$("#time_loop_label").show();
	$( "#atlas-selector-slider" ).slider({ disabled: false });
	
}


function all_volumes_loaded() {
	for( var i=0 ; i<_ATLAS_.volumes.length ; i++) {
		if ( !_ATLAS_.volumes[i] ) {
			_ATLAS_.volumesLoaded = false;
			return false;
		}
	}
	_ATLAS_.volumesLoaded = true;
	return true;
}


function change_volume (event, ui) {
	    var sliderIdx = ui.value;
	    $("#atlas-selector-age").val( sliderIdx );

		    // hide current volume
		    _ATLAS_.volumes[_ATLAS_.currentVolume].visible = false;

		    // hide all meshes
		    for (l in _ATLAS_.meshes[_ATLAS_.currentVolume]) {

		      if (_ATLAS_.meshes[_ATLAS_.currentVolume][l]) {

		        _ATLAS_.meshes[_ATLAS_.currentVolume][l].visible = false;

		      }

		    }


		    // show new volume, load if not loaded before
		    var _volume = _ATLAS_.volumes[sliderIdx];

		    if (!_volume) {

		      // volume was not loaded before
		      console.log('Loading '+_ATLAS_.steps[sliderIdx] )
		      _volume = new X.volume();
		      _volume.file = 'data/' + _ATLAS_.steps[sliderIdx] + '/volume.nii.gz';
		      _volume.labelmap.file = 'data/' + _ATLAS_.steps[sliderIdx] + '/labelmap.nii.gz';
		      _volume.labelmap.colortable.file = 'data/colortable.txt';

		      r0.add(_volume);

		      // store it in the cache
		      _ATLAS_.volumes[sliderIdx] = _volume;

	        _ATLAS_.currentVolume = sliderIdx;

		    } else {

	        _ATLAS_.currentVolume = sliderIdx;

		      init_viewer2d();
		    }

		    _volume.visible = true;
            _volume.labelmap.opacity = 0;

}


function start_atlas_loop() {
	$("#time_loop_label").html("<span>Pause</span>");
	_ATLAS_.atlasLoop = setInterval( function() {
		var _nextAtlas = _ATLAS_.currentVolume + 1;
		if (_nextAtlas > 2 ) {
			_nextAtlas = 0;
		}
		while ( !_ATLAS_.volumes[_nextAtlas] ) {
			_nextAtlas = _nextAtlas + 1;
			if (_nextAtlas > 2 ) {
				_nextAtlas = 0;
				//stop_atlas_loop();
				//$("#time_loop").removeAttr('checked');
				//$("#time_loop").button( "refresh" );
				//return false;
			}
		}
		var _ui = {};
		_ui.value = _nextAtlas;
		change_volume(null,_ui);
		$("#atlas-selector-slider").slider('value',_nextAtlas);
	}, 1000);
}


function stop_atlas_loop() {
	$("#time_loop_label").html("<span>Play</span>");
	clearInterval(_ATLAS_.atlasLoop);
}

