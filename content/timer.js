var secs;
var timerID = null;
var timerRunning = false;
var delay = 1000;
var initialSecs;

function eggon_initializeTimer(x)
{
    // Set the length of the timer, in seconds
    secs = x;
    initialSecs = x;
    eggon_stopTheClock();
    eggon_startTheTimer(x);
}

function eggon_stopTheClock()
{
    if(timerRunning)
    {
        clearTimeout(timerID);
    }
    timerRunning = false;
}

function eggon_startTheTimer()
{
    if (secs==0)
    {
        eggon_stopTheClock();
        // Here's where you put something useful that's
        // supposed to happen after the allotted time.
        // For example, you could display a message:
        alert("You have just wasted " + initialSecs + " seconds of your life.");
    }
    else
    {
        self.status = secs;
        secs = secs - 1;
        timerRunning = true;
        timerID = self.setTimeout("eggon_startTheTimer()", delay);
    }
}
