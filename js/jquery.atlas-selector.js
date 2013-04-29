var steps = [0, 2, 4, 10, 18, 28];

$(function() {
	$("#atlas-selector-slider").slider({
		value: 0,
		min: 0,
		step: 1,
		max: steps.length-1,
		slide: function (event, ui) {
		    $("#atlas-selector-age").val( steps[ui.value] );
		}
	});
	$("#atlas-selector-age").val($("#atlas-selector-slider").slider("value"));
});

