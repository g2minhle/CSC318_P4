function a() {
	$('#img_Test').draggable({ 
		containment: 'parent', 
		axis: 'x' ,
		start : function(){
			console.log('start');
			var offset = $('#img_Test').offset();
			$('#btn_Note').offset({ top: offset.top, left: offset.left});
		},
		drag : function(){
			console.log('draging');
			var offset = $('#img_Test').offset();
			$('#btn_Note').offset({ top: offset.top, left: offset.left});			
		}});
	$('#img_Test').contextmenu(function(e) {
		var id = Math.random(); 		
		var str = '<button							id = "btn_'+ id+'"							type="button" class="btn btn-xs btn-warning comment"							data-toggle="popover" title="Popover title"							data-content="And heres some amazing content. Its very engaging.Right?">							<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>						</button>';
		var person = prompt("Please enter your comment", "My comment");
  		$('#theTrackContainer').append(str);		  			
		return false;
	});
	$('#volumeSlider').slider();
	$('#bassSlider').slider();
	$('#middleSlider').slider();
	$('#trebleSlider').slider();
	$('#panLR').slider();
	$("[data-toggle='popover']").popover();
	var offset = $('#img_Test').offset();
	$('#btn_Note').offset({ top: offset.top, left: offset.left});
}

function cmd_Save(){
	$.notify("Change saved", "success");
}


function cmd_addTracK(){
	$('#cmd_Upload').click();
}

function input_fileUploaded(){
	$.notify("Track added", "success");
}

function cmd_Play(){
	var audio = new Audio('./NyanCat.mp3');
	audio.play();
}
