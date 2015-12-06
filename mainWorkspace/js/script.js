var barStorage = {};
var currentId = null;


draggableObject = {
	containment: 'parent',
	axis: 'x' ,
	start : function(){
		console.log('start');
		var trackID = $(this).id;
		var offset = $(this).offset();
		$('.' + $(this).attr('id') ).each(function (index ){
			console.log(offset);
			$(this).offset({
				top: offset.top + $(this).data('top-offset'),
				left: offset.left + $(this).data('left-offset')
			});
		});
	},
	drag : function(){
		var trackID = $(this).id;
		console.log('draging');
		var offset = $(this).offset();
		$('.' + $(this).attr('id') ).each(function (index ){
			console.log(offset);
			$(this).offset({
				top: offset.top + $(this).data('top-offset'),
				left: offset.left + $(this).data('left-offset')
			});
		});
	}};


	function addComment(e) {
		var comment = prompt("Please enter your comment", "My comment");
			if (comment == null) return;
		var id = Math.random();
		var trackID = $(this).attr('id');
		var parentOffset = $(this).offset();
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;

		var str = $('<button id = "btn_'+ id+'" type="button"' +
						'class="btn btn-xs btn-warning comment ' + trackID + '"' +
						'data-toggle="popover"'+
						'title="Me"' +
						'data-trigger="focus"' +
						'data-content="' + comment +'"' +
						'data-top-offset="' + relY +'"' +
						'data-left-offset="' + relX +'">' +
						'<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>' +
												'</button>');
		str.offset({
			top: parentOffset.top + relY,
			left: relX
		});
		str.popover();
		$(this).parent().append(str);

		$('.comment').contextmenu(function(){
			$(this).hide();
			return false;
		});

		var trackID = $(this).id;
			console.log('draging');
			var offset = $(this).offset();
			$('.' + $(this).attr('id') ).each(function (index ){
				console.log(offset);
				$(this).offset({
					top: offset.top + $(this).data('top-offset'),
					left: offset.left + $(this).data('left-offset')
				});
			});

		return false;
	}

function a() {
	if(window.location.search == "?new=1"){
		$('.track').hide();
	}
	$('#div_Lyric').draggable({ containment: 'parent', axis: 'x' });
	$('.js-track-images .trackLength').draggable(draggableObject);


	$('.js-track-images .trackLength').contextmenu(addComment);
	// $('#volumeSlider').slider();
	// $('#bassSlider').slider();
	// $('#middleSlider').slider();
	// $('#trebleSlider').slider();
	// $('#panLR').slider();

	$("[data-toggle='popover']").popover();
	var offset = $('.js-track-images .trackLength').offset();
	$('#btn_Note').offset({ top: offset.top, left: offset.left});
}

$('.comment').contextmenu(function(){
	$(this).hide();
	return false;
});

function cmd_save(){
	$.notify('Change saved', 'success');
}

function cmd_discard(){
	$.notify('Change Not Saved! Redirecting to Home Page shortly!', 'warn');
	window.setTimeout(function () {
        location.href = "../homepage/index.html";
    }, 2000);
}

$('body').on('click', '.js-close-track', function(e){
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


$('body').on('click', '.js-display-wave', function(){
	var trackColumn = $(this).closest('.track');
	trackColumn.find('.trackLength').attr('src',
		trackColumn.find('.trackLength').data('srcwaves')
	);
});
$('body').on('click', '.js-display-sheet', function(){
	var trackColumn = $(this).closest('.track');

	trackColumn.find('.trackLength').attr('src',
		trackColumn.find('.trackLength').data('srcsheets')
	);
});
$('body').on('click', '.js-display-tab', function(){
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

	//CLONE track
	var id = parseInt(Math.random() * 1000);
	var newTrack = $(".track:first").clone();
	newTrack.attr("id", "div_track" + id);
	newTrack.find("h3").text("New Track");
	newTrack.find(".comment").remove();
	newTrack.find("img").attr("id", id);
	newTrack.find(".trackLength").draggable(draggableObject);
	newTrack.find(".trackLength").contextmenu(addComment);
	$(".trackList .track:last").before(newTrack);

}

function cmd_play(){
	var audio = new Audio('./fullSong.mp3');
	audio.play();
}

function cmd_addLyric(){
	$('#div_lyric').show();
	$('#input_Lyric').focus();
}

function alertMsg() {
    alert("Functionality not implemented!");
}
