mesh_tree_data = [
	{
		label : '<button id="Region1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 1</span>',
		children : [
			 { label: '<button id="mesh1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh1</span>' },
			 { label: '<button id="mesh2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh2</span>' },
			 { label: '<button id="mesh3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh3</span>' },
			 { label: '<button id="mesh4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh4</span>' },
		]
	},
	{
		label : '<button id="Region2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 2</span>',
		children : [
			 { label: '<button id="mesh1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh1</span>' },
			 { label: '<button id="mesh2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh2</span>' },
			 { label: '<button id="mesh3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh3</span>' },
			 { label: '<button id="mesh4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh4</span>' },
		]
	},
	{
		label : '<button id="Region3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 3</span>',
		children : [
			 { label: '<button id="mesh1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh1</span>' },
			 { label: '<button id="mesh2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh2</span>' },
			 { label: '<button id="mesh3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh3</span>' },
			 { label: '<button id="mesh4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh4</span>' },
		]
	},
	{
		label : '<button id="Region4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">Region 4</span>',
		children : [
			 { label: '<button id="mesh1" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh1</span>' },
			 { label: '<button id="mesh2" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh2</span>' },
			 { label: '<button id="mesh3" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh3</span>' },
			 { label: '<button id="mesh4" class="tree_button" onClick=""><img src="gfx/show.png"></button><span class="tree_label">mesh4</span>' },
		]
	}
];


$(function() {

	// create label tree
	$('#mesh_tree').tree({
		data: mesh_tree_data,
		autoEscape: false,
		autoOpen: true
	});
	
	//create controls
	$("#mesh_control_opacity").slider({
		value: 0,
		min: 0,
		step: 1,
		max: 100,
	});

});

