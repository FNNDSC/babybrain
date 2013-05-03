/*

    .----.                    _..._                                                     .-'''-.
   / .--./    .---.        .-'_..._''.                          _______                '   _    \
  ' '         |   |.--.  .' .'      '.\     __.....__           \  ___ `'.           /   /` '.   \_________   _...._
  \ \         |   ||__| / .'            .-''         '.    ,.--. ' |--.\  \         .   |     \  '\        |.'      '-.
   `.`'--.    |   |.--.. '             /     .-''"'-.  `. //    \| |    \  ' .-,.--.|   '      |  '\        .'```'.    '.
     `'-. `.  |   ||  || |            /     /________\   \\\    /| |     |  '|  .-. \    \     / /  \      |       \     \
         `. \ |   ||  || |            |                  | `'--' | |     |  || |  | |`.   ` ..' /    |     |        |    |
           \ '|   ||  |. '            \    .-------------' ,.--. | |     ' .'| |  | |   '-...-'`     |      \      /    .
            | |   ||  | \ '.          .\    '-.____...---.//    \| |___.' /' | |  '-                 |     |\`'-.-'   .'
            | |   ||__|  '. `._____.-'/ `.             .' \\    /_______.'/  | |                     |     | '-....-'`
           / /'---'        `-.______ /    `''-...... -'    `'--'\_______|/   | |                    .'     '.
     /...-'.'                       `                                        |_|                  '-----------'
    /--...-'

    Slice:Drop - Instantly view scientific and medical imaging data in 3D.

     http://slicedrop.com

    Copyright (c) 2012 The Slice:Drop and X Toolkit Developers <dev@goXTK.com>

    Slice:Drop is licensed under the MIT License:
      http://www.opensource.org/licenses/mit-license.php

    CREDITS: http://slicedrop.com/LICENSE

*/

/**
 * Setup all UI elements once the loading was completed.
 */
function setupUi() {

}

function volumerenderingOnOff(bool) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.volumeRendering = bool;

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'volumeRendering', volume.volumeRendering), 150);
  }
*/

}

function thresholdVolume(event, ui) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.lowerThreshold = ui.values[0];
  volume.upperThreshold = ui.values[1];

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'lowerThreshold', volume.lowerThreshold), 150);
    clearTimeout(RT._updater2);
    RT._updater2 = setTimeout(RT.pushVolume.bind(RT, 'upperThreshold', volume.upperThreshold), 150);

  }
*/

}

function windowLevelVolume(event, ui) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.windowLow = ui.values[0];
  volume.windowHigh = ui.values[1];

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'windowLow', volume.windowLow), 150);
    clearTimeout(RT._updater2);
    RT._updater2 = setTimeout(RT.pushVolume.bind(RT, 'windowHigh', volume.windowHigh), 150);

  }
*/

}

function opacity3dVolume(event, ui) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.opacity = ui.value / 100;

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'opacity', volume.opacity), 150);

  }
*/

}

function volumeslicingX(event, ui) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.indexX = Math
      .floor(jQuery('#yellow_slider').slider("option", "value"));

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'indexX', volume.indexX), 150);

  }
*/
}

function volumeslicingY(event, ui) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.indexY = Math.floor(jQuery('#red_slider').slider("option", "value"));

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'indexY', volume.indexY), 150);

  }
*/
}

function volumeslicingZ(event, ui) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.indexZ = Math.floor(jQuery('#green_slider').slider("option", "value"));

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'indexZ', volume.indexZ), 150);

  }
*/
}

function fgColorVolume(hex, rgb) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.maxColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];

  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'maxColor', volume.maxColor), 150);

  }

}

function bgColorVolume(hex, rgb) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.minColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];

  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushVolume.bind(RT, 'minColor', volume.minColor), 150);

  }

}

//
// LABELMAP
//
function opacityLabelmap(event, ui) {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  console.log(volume.labelmap.opacity);
  if (!volume) {
    return;
  }



  volume.labelmap.opacity = ui.value / 100;



//  if (RT.linked) {
//
//    clearTimeout(RT._updater);
//    RT._updater = setTimeout(RT.pushLabelmap.bind(RT, 'opacity', volume.labelmap.opacity), 150);
//
//  }

}

function toggleLabelmapVisibility() {
  var volume = _ATLAS_.volumes[_ATLAS_.currentVolume];
  if (!volume) {
    return;
  }

  volume.labelmap.visible = !volume.labelmap.visible;

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushLabelmap.bind(RT, 'visible', volume.labelmap.visible), 150);

  }
*/
}

//
// MESH
//
function toggleMeshVisibility() {

  if (!mesh) {
    return;
  }

  mesh.visible = !mesh.visible;

/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushMesh.bind(RT, 'visible', mesh.visible), 150);

  }
*/
}

function meshColor(hex, rgb) {

  if (!mesh) {
    return;
  }

  mesh.color = [rgb.r / 255, rgb.g / 255, rgb.b / 255];

  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushMesh.bind(RT, 'color', mesh.color), 150);

  }
}

function opacityMesh(event, ui) {

	for (var m in _ATLAS_.meshes[_ATLAS_.currentVolume]) {
		if (_ATLAS_.meshes[_ATLAS_.currentVolume][m] != null) {
			_ATLAS_.meshes[_ATLAS_.currentVolume][m].opacity = ui.value / 100;		
		}
	}

	//_ATLAS_.meshes[_ATLAS_.currentVolume]['Model_3_Left-Cerebral-Cortex.vtk'].opacity = ui.value / 100;
/*  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushMesh.bind(RT, 'opacity', mesh.opacity), 150);

  }
 */
}

function thresholdScalars(event, ui) {

  if (!mesh) {
    return;
  }

  mesh.scalars.lowerThreshold = ui.values[0] / 100;
  mesh.scalars.upperThreshold = ui.values[1] / 100;

  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushScalars.bind(RT, 'lowerThreshold', mesh.scalars.lowerThreshold), 150);
    clearTimeout(RT._updater2);
    RT._updater2 = setTimeout(RT.pushScalars.bind(RT, 'upperThreshold', mesh.scalars.upperThreshold), 150);

  }

}

function scalarsMinColor(hex, rgb) {

  if (!mesh) {
    return;
  }

  mesh.scalars.minColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];

  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushScalars.bind(RT, 'minColor', mesh.scalars.minColor), 150);

  }

}

function scalarsMaxColor(hex, rgb) {

  if (!mesh) {
    return;
  }

  mesh.scalars.maxColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];

  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushScalars.bind(RT, 'maxColor', mesh.scalars.maxColor), 150);

  }

}

//
// Fibers
//
function toggleFibersVisibility() {

  if (!fibers) {
    return;
  }

  fibers.visible = !fibers.visible;

  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushFibers.bind(RT, 'visible', fibers.visible), 150);

  }


}

function thresholdFibers(event, ui) {

  if (!fibers) {
    return;
  }

  fibers.scalars.lowerThreshold = ui.values[0];
  fibers.scalars.upperThreshold = ui.values[1];
  if (RT.linked) {

    clearTimeout(RT._updater);
    RT._updater = setTimeout(RT.pushFibersScalars.bind(RT, 'lowerThreshold', fibers.scalars.lowerThreshold), 150);
    clearTimeout(RT._updater2);
    RT._updater2 = setTimeout(RT.pushFibersScalars.bind(RT, 'upperThreshold', fibers.scalars.upperThreshold), 150);

  }

}
