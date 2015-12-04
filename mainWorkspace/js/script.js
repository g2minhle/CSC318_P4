var barStorage = {};
var currentId = null;

function a() {	
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
		var comment = prompt("Please enter your comment", "My comment");
  		if (comment == null) return;
		var id = Math.random(); 		
		var parentOffset = $(this).parent().offset();    
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;

		var str = $('<button id = "btn_'+ id+'" type="button"' +
						'class="btn btn-xs btn-warning comment"' +
						'data-toggle="popover"'+
						'title="Me"' + 
						'data-trigger="focus"' +
						'data-content="' + comment +'">' +
						'<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>' +
												'</button>');

		str.css('left', relX).popover();
		str.css('top', relY).popover();  	
		$(this).parent().append(str);		
				
		$('.comment').contextmenu(function(){
			$(this).hide();
			return false;	
		});
		
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

function cmd_save(){
	$.notify('Change saved', 'success');
}

$('.js-close-track').on('click', function(e){
	// removing track
	$(this).closest('.track').hide();
});

$('.track').on('click', function(e){
	var itemID = $(this).attr('id');
	if(itemID == 'div_lyric') return;
	
	$('.track').removeClass('selected');
	$(this).addClass('selected');

	// save current 
	if(currentId != null){
		barStorage[currentId] = {};
		barStorage[currentId]['volumeSlider'] = $('#volumeSlider').val();
		barStorage[currentId]['panSlider'] = $('#panSlider').val();
		barStorage[currentId]['bassSlider'] = $('#bassSlider').val();
		barStorage[currentId]['middleSlider'] = $('#middleSlider').val();
		barStorage[currentId]['trebbleSlider'] = $('#trebbleSlider').val();
		console.log(barStorage);	
	}
	
	// change slider
	var trackId = itemID.replace("div_track", "");
	
	currentId = trackId;
	
	if(trackId in barStorage){
		$('#volumeSlider').val(barStorage[trackId]['volumeSlider']);
		$('#panSlider').val(barStorage[trackId]['panSlider']);		
		$('#bassSlider').val(barStorage[trackId]['bassSlider']);
		$('#middleSlider').val(barStorage[trackId]['middleSlider']);
		$('#trebbleSlider').val(barStorage[trackId]['trebbleSlider']);		
	} else {
		$('#volumeSlider').val(50);
		$('#panSlider').val(50);
		$('#bassSlider').val(50);
		$('#middleSlider').val(50);
		$('#trebbleSlider').val(50);
	}
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
	tracks = $(".track:hidden").first().show();
}

function cmd_play(){
	var audio = new Audio('./fullSong.mp3');
	audio.play();	
}

function cmd_addLyric(){
	$('#div_lyric').show();
	$('#input_Lyric').focus();	
}