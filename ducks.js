$( document ).ready(function() {
    alert( "ready!" );

	$('#bigger').on("click", function(){
		$('img').css("width","+=20%");
	});

	$('#smaller').on("click", function(){
		$('img').css("width","-=20%");
	});

	var angle = 0;
	setInterval(function(){
      	angle+=5;
     	$("img").rotate(angle);
	},50);

});

