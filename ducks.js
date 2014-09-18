var IMAGE_ROTATION = 0;

$( document ).ready(function() {
    alert( "ready!" );

	$('#bigger').on("click", function(){
		$('img').css("width","+=20%");
	});

	$('#smaller').on("click", function(){
		$('img').css("width","-=20%");
	});

	$('#spin').on("click", function(){
		IMAGE_ROTATION = IMAGE_ROTATION === 0 ? 5 : 0;
	});


	var angle = 0;
	setInterval(function(){
      	angle+=IMAGE_ROTATION;
     	$("img").rotate(angle);
	},50);

});

