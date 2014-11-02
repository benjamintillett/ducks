var IMAGE_ROTATION = 0;
var RED_INDEX = 0; 
var GREEN_INDEX = 1;
var BLUE_INDEX = 2;


$( document ).ready(function() {

	$('#bigger').on("click", function(){
		$('img').css("width","+=20%");
	});

	$('#smaller').on("click", function(){
		$('img').css("width","-=20%");
	});

	$('#spin').on("click", function(){
		IMAGE_ROTATION = IMAGE_ROTATION === 0 ? 3 : 0;
	});

	var angle = 0;
	setInterval(function(){
      	angle += IMAGE_ROTATION;
     	$("img").rotate(angle);
	},1);


	$('#less-blue').on("click", function(){
		changeColor(BLUE_INDEX,-10);
	});

	$('#less-red').on("click", function(){
		changeColor(RED_INDEX,-10);
	});

	$('#less-green').on("click", function(){
		changeColor(GREEN_INDEX,-10);
	});

	$('#more-red').on("click", function(){
		changeColor(RED_INDEX,10);
	});
	
	$('#more-green').on("click", function(){
		changeColor(GREEN_INDEX,10);
	});
	
	$('#more-blue').on("click", function(){
		changeColor(BLUE_INDEX,10);
	});
});



function changeColor(color_index,ammount) {
		var backgroundColor = $('body').css("background-color"); 
		var rgbValues = backgroundColor.match(/\d+/g);
		rgbValues[color_index] =  parseFloat(rgbValues[color_index]) + ammount; 
		var newBackgroundColor = "rgb(" + rgbValues[0] + ", " + rgbValues[1] + ", " + rgbValues[2] + ")" 
		$('body').css("background-color",newBackgroundColor);
}

