var timeString;

function eggon_parser(input)
{
	timeString = input;
	var days = 0;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	
	if( /\d*:\d*:\d*:\d*/.test( timeString ) ){
		//do something
		var times = timeString.split( ":" );
		days = times[0];
		hours = times[1];
		minutes = times[2];
		seconds = times[3];
	} else if ( /\d*:\d*:\d*/.test( timeString ) ){
		var times = timeString.split( ":" );
		hours = times[0];
		minutes = times[1];
		seconds = times[2];
	} else if ( /\d*:\d*/.test( timeString ) ){
		var times = timeString.split( ":" );
		minutes = times[0];
		seconds = times[1];
	} else if ( /\d+/.test( timeString )){
		var times = timeString.split( ":" );
		minutes = times[0];
	} else {
		//ERROR!!!
	}
	
	var totalTime = (seconds * 1) + (minutes * 60) + (hours * 60 * 60) + (days * 24 * 60 * 60);
	eggon_initializeTimer( totalTime );
	//alert( "days: " + days + " hours: " + hours + " minutes: " + minutes + " seconds: " + seconds + " total time: " + totalTime);
	 
}