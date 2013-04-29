
$(function() {

  var origs = [];
  var entries = [];

  for (l in _ATLAS_.meshes[0]) {

    var nl = l.replace("Model_","").replace(".vtk","");
    nl = nl.split("_")[1].replace("-"," ");
    entries.push(nl);
    origs.push(l);

  }

  //entries = entries.sort();

  for (var j=0;j<entries.length;j++) {
    $('#mesh_tree').append('<div class="mesh" data-value="'+origs[j]+'">'+entries[j]+'</div>');
  }



  $('.mesh').click(function(e) {

    var label = $(e.target).attr('data-value');

    if (!_ATLAS_.meshes[_ATLAS_.currentVolume][label]) {

      // load mesh
      var m = new X.mesh();
      m.file = "data/"+_ATLAS_.steps[_ATLAS_.currentVolume]+"/"+label;
      r0.add(m);

      // grab label value
      var labelvalue = label.replace("Model_","").split("_")[0];
      m.color = _ATLAS_.volumes[0].labelmap.colortable.get(labelvalue).splice(1,3);


      _ATLAS_.meshes[_ATLAS_.currentVolume][label] = m;
      _ATLAS_.meshes[_ATLAS_.currentVolume][label].visible = false;

    }

    // show the mesh
    console.log('showing '+l);
    _ATLAS_.meshes[_ATLAS_.currentVolume][label].visible = !_ATLAS_.meshes[_ATLAS_.currentVolume][label].visible;

  });


  // create controls
  $("#mesh_control_opacity").slider({
    value: 0,
    min: 0,
    step: 1,
    max: 100,
    slide: opacityMesh
  });

});
