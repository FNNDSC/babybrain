// create 2D viewer controls
$(function() {

	// create the sliders for the 2D sliders
	$("#yellow_slider").slider({
		slide: volumeslicingX
	});
	$("#yellow_slider .ui-slider-handle").unbind('keydown');

	$("#red_slider").slider({
		slide: volumeslicingY
	});
	$("#red_slider .ui-slider-handle").unbind('keydown');

	$("#green_slider").slider({
		slide: volumeslicingZ
	});
	$("#green_slider .ui-slider-handle").unbind('keydown');

});

// initialize 2D viewers
function init_viewer2d() {

	var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];

	// X Slice
	if (sliceX) {
		sliceX.destroy();
	}
	sliceX = new X.renderer2D();
	sliceX.container = 'sliceX';
	sliceX.orientation = 'X';
	sliceX.init();
	sliceX.add(volume);
	sliceX.render();

	// Y Slice
	if (sliceY) {
		sliceY.destroy();
	}
	sliceY = new X.renderer2D();
	sliceY.container = 'sliceY';
	sliceY.orientation = 'Y';
	sliceY.init();
	sliceY.add(volume);
	sliceY.render();

	// Z Slice
	if (sliceZ) {
		sliceZ.destroy();
	}
	sliceZ = new X.renderer2D();
	sliceZ.container = 'sliceZ';
	sliceZ.orientation = 'Z';
	sliceZ.init();
	sliceZ.add(volume);
	sliceZ.render();

    // update 2d slice sliders
    var dim = volume.dimensions;
    $("#yellow_slider").slider("option", "disabled", false);
    $("#yellow_slider").slider("option", "min", 0);
    $("#yellow_slider").slider("option", "max", dim[0] - 1);
    $("#yellow_slider").slider("option", "value", volume.indexX);
    $("#red_slider").slider("option", "disabled", false);
    $("#red_slider").slider("option", "min", 0);
    $("#red_slider").slider("option", "max", dim[1] - 1);
    $("#red_slider").slider("option", "value", volume.indexY);
    $("#green_slider").slider("option", "disabled", false);
    $("#green_slider").slider("option", "min", 0);
    $("#green_slider").slider("option", "max", dim[2] - 1);
    $("#green_slider").slider("option", "value", volume.indexZ);
}


