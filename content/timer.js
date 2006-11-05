//Written by Kalin & Jordie from the Eggon Team
//November 5th, 2006
//www.rely.ca/eggon
//Some lifted and heavily modified from an open 
//source site on the net that I lost the URL for

var secs;
var timerID = null;
var delay = 1000;
var initialSecs;

function eggon_initializeTimer(x)
{
    // x sets the length of the timer, in seconds
    secs = x;
    initialSecs = x;
    eggon_startTheTimer(x);
}

function eggon_startTheTimer()
{
    if (secs==0)
    //Checks to see if your egg is complete and
    //and performs necessary computer tasks to
    //finish up the process.
    {
        eggon_endEggCook();
        clearTimeout(timerID);
        alert("Your egg is now perfectly cooked according to your tastes.");
    }
    else
    //Main portion of the loop
    {
        self.status = secs;
        secs = secs - 1;
        timerRunning = true;
        timerID = self.setTimeout("eggon_startTheTimer()", delay);
    }
}
