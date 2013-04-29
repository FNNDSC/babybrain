



$(function() {

  var labels = _ATLAS_.labels;

  $('#label_tree').append('<div class="label" data-value="-1">Show All</div>');

  for (l in labels) {

    $('#label_tree').append('<div class="label" data-value="'+labels[l]+'">'+l+'</div>');



  }

  $('.label').click(function(e) {

    var label = $(e.target).attr('data-value');

    _ATLAS_.volumes[_ATLAS_.currentVolume].labelmap.opacity = 1;

    if (label == "-1") {

      label = null;

    }


    _ATLAS_.volumes[_ATLAS_.currentVolume].labelmap.showOnly = label;



  });


  // create controls
  $("#label_control_opacity").slider({
    value: 0,
    min: 0,
    step: 1,
    max: 100,
    slide: opacityLabelmap
  });

});
