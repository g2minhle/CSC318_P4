function a() {
	$('#img_Test3').draggable({ containment: 'parent', axis: 'x' });
	$('#img_Test2').draggable({ containment: 'parent', axis: 'x' });
	$('#img_Test4').draggable({ containment: 'parent', axis: 'x' });
	$('#div_Lyric').draggable({ containment: 'parent', axis: 'x' });
	$('.js-track-images .trackLength').draggable({ 
		containment: 'parent', 
		axis: 'x' ,
		start : function(){
			console.log('start');
			var offset = $('.js-track-images .trackLength').offset();
			$('#btn_Note').offset({ top: offset.top, left: offset.left});
		},
		drag : function(){
			console.log('draging');
			var offset = $('.js-track-images .trackLength').offset();
			$('#btn_Note').offset({ top: offset.top, left: offset.left});			
		}});

	$('.js-track-images .trackLength').contextmenu(function(e) {
		var person = prompt("Please enter your comment", "My comment");
  	

		var id = Math.random(); 		
		var parentOffset = $(this).parent().offset();    
   	var relX = e.pageX - parentOffset.left;

		var str = $('<button id = "btn_'+ id+'" type="button"' +
						'class="btn btn-xs btn-warning comment"' +
						'data-toggle="popover"'+
						'data-content="' + person +'">' +
						'<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>' +
												'</button>');

		str.css('left', relX).popover();  	
		$('#theTrackContainer').append(str);		
				
		return false;
	});
	// $('#volumeSlider').slider();
	// $('#bassSlider').slider();
	// $('#middleSlider').slider();
	// $('#trebleSlider').slider();
	// $('#panLR').slider();

	$("[data-toggle='popover']").popover();
	var offset = $('.js-track-images .trackLength').offset();
	$('#btn_Note').offset({ top: offset.top, left: offset.left});
}

function cmd_Save(){
	$.notify('Change saved', 'success');
}

$('.js-close-track').on('click', function(e){
	// removing track
	$(this).closest('.track').hide();
});




$('.js-display-wave').on('click', function(){
	var trackColumn = $(this).closest('.track');
	trackColumn.find('.trackLength').attr('src',
		trackColumn.find('.trackLength').data('srcwaves')
	);
});
$('.js-display-sheet').on('click', function(){
	var trackColumn = $(this).closest('.track');

	trackColumn.find('.trackLength').attr('src',
		trackColumn.find('.trackLength').data('srcsheets')
	);
});
$('.js-display-tab').on('click', function(){
	var trackColumn = $(this).closest('.track');
	
	trackColumn.find('.trackLength').attr('src',
		trackColumn.find('.trackLength').data('srctabs')
	);
});


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