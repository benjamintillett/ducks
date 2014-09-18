var IMAGE_ROTATION = 0;
var RED_INDEX = 0; 



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



	$('#less-red').on("click", function(){
		var backgroundColor = $('body').css("background-color"); 
		var rgbValues = backgroundColor.match(/\d+/g);
		rgbValues[RED_INDEX] -= 10; 
		var newBackgroundColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")" 
		$('body').css("background-color",newBackgroundColor);
	});

	$('#more-red').on("click", function(){
		var backgroundColor = $('body').css("background-color"); 
		var rgbValues = backgroundColor.match(/\d+/g);
		console.log(rgbValues)
		rgbValues[RED_INDEX] += 10; 
		var newBackgroundColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")" 
		$('body').css("background-color",newBackgroundColor);
	});




});

