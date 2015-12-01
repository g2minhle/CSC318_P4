function a() {
	$('#img_Test3').draggable({ containment: 'parent', axis: 'x' });
	$('#img_Test2').draggable({ containment: 'parent', axis: 'x' });
	$('#img_Test4').draggable({ containment: 'parent', axis: 'x' });
	$('#div_Lyric').draggable({ containment: 'parent', axis: 'x' });
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
	$.notify('Change saved', 'success');
}


function cmd_addTracK(){
	$('#cmd_Upload').click();
}

function input_fileUploaded(){
	$.notify('Track added', 'success');
}

function cmd_play(){
	var audio = new Audio('./fullSong.mp3');
	audio.play();	
}

function cmd_addLyric(){
	$('#div_lyric').show();
	$('#input_Lyric').focus();	
}