//Written by Kalin & Jordie from the Eggon Team
//November 5th, 2006
//www.rely.ca/eggon

var cookingEgg = false;

function eggon_parser(timestring)
//Parses a string and attempts to parse it as time
//Accepts formats D:H:M:S, H:M:S, M:S and M
//Where D = Days, H = Hours, M = Minutes, S = Seconds
{
	var days = 0;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	if( cookingEgg ){
	//If someone is still cooking their egg
		alert("You are currently cooking an egg.  Please wait until it is perfect!");
		return;
	} else if( /\d*:\d*:\d*:\d*/.test( timeString ) ){
	//For the D:H:M:S format
		var times = timeString.split( ":" );
		days = times[0];
		hours = times[1];
		minutes = times[2];
		seconds = times[3];
	} else if ( /\d*:\d*:\d*/.test( timeString ) ){
	//For the H:M:S format
		var times = timeString.split( ":" );
		hours = times[0];
		minutes = times[1];
		seconds = times[2];
	} else if ( /\d*:\d*/.test( timeString ) ){
	//For the M:S
		var times = timeString.split( ":" );
		minutes = times[0];
		seconds = times[1];
	} else if ( /\d+/.test( timeString )){
	//For the M
		var times = timeString.split( ":" );
		minutes = times[0];
	} else {
	//For anything else which is treated as junk
		alert("You have inputted junk.  It should be inputted in the format: D:H:M:S, H:M:S, M:S, or M.");
		return;
	}
	
	var totalTime = (seconds * 1) + (minutes * 60) + (hours * 60 * 60) + (days * 24 * 60 * 60);
	cookingEgg = true;
	eggon_initializeTimer( totalTime );
	//A useful diagnostic message
	//alert( "days: " + days + " hours: " + hours + " minutes: " + minutes + " seconds: " + seconds + " total time: " + totalTime);
	 
}

function eggon_endEggCook(){
//sets cookingEgg boolean to false so a new egg can be cooked
	cookingEgg = false;
}