function a() {
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
		var id = Math.random(); 		
		var parentOffset = $(this).parent().offset();    
   	var relX = e.pageX - parentOffset.left;

		var str = $('<button id = "btn_'+ id+'" type="button"' +
						'class="btn btn-xs btn-warning comment"' +
						'data-toggle="popover" title="Popover title"' +
						'data-content="And heres some amazing content. Its very engaging.Right?">' +
						'<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>' +
												'</button>');

		str.css('left', relX);
		var person = prompt("Please enter your comment", "My comment");
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

}
