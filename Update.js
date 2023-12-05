var absoluteTotalSpam = 0;
//TODO: add more advanced checker for potentialOverride - maybe automatically set to 0 if it is negative outcome. Maybe add a tickbox to determine what potential is listed (classic v. n)

var clockFlash = 0;


function update()
{
  absoluteTotalSpam = autoTotalSpam + investTotalSpam + manualTotalSpam + cheatTotalSpam + orderTotalSpam;


  // Automation total, investing total, manual total, cheating total, and order totals added together.
  
  // Note: Cheat, order, and invest can all lower spam counts so they ignore negative outcomes.
  

  var pastSpam = 0;
  
  if (totalSpam < 0) // Track debt
  { 
     debt = Math.abs(Number(totalSpam))
  }

 if (!(absoluteTotalSpam == 0))
 {
     if (debt > 0) // Just the same stuff from points() but tweaked
     {
        x = ("You made " + Number(potential) + " cans of spam! You now have 0 spam cans and have " + debt + " cans in debt left.");
     }
  else
     {
        x = ("You made " + Number(potential) + " cans of spam! You now have " + Number(totalSpam) + " spam cans.");
     }
 }
 else
 {
    x = ("You currently have " + Number(totalSpam) + " spam cans.")
 }
  
 
  document.getElementById("demo").innerHTML = "<b>" + x + "</b>";
  
  if ((pastSpam < 0) && (totalSpam >= 0))
  {
    alert("Debt has been paid off!")
  }

  storeSpam = totalSpam
}


function clock()
{
    clockFlash = clockFlash + 1;
    var currentTime = new Date ( );

    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds; // Derived from tutorial, might need more learning on ternary operators - https://www.elated.com/creating-a-javascript-clock

   if (clockFlash % 2 == 0) // Even number check
   {
     var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
   }
   else
   {
     var currentTimeString = currentHours + "." + currentMinutes + "." + currentSeconds;
   }

    

    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

function autoToggle()
{
  var autoVisual = Number(5 * automator)

  if (autoToggled == false)
  {
    autoToggled = true;
    alert("You order the machinery workers to activate automation for efficiency. You will now produce an additional " + autoVisual + " cans every second.")
    $("#autoDisplay").fadeIn("fast");
  }
  else
  {
    autoToggled = false;
    alert("After quickly shutting off automatic SPAM production, workers resume with regular manual canning again. No additional cans will be produced automatically.")
    $("#autoDisplay").fadeOut();
  }
}

function autoSpam()
{
  if (automator > 0)
  {
    $("#autoToggle").show();
  }

  if ((automator > 0) && (autoToggled == true))
  {
    var autoStoreSpam = totalSpam;
    totalSpam = totalSpam + Number(5 * automator)
    $("#autoDisplay").fadeIn(200);

    autoVisual = Number(5 * automator)
    autoDisplay = ("+ " + autoVisual + " automatic cans of spam")
 
    document.getElementById("autoDisplay").innerHTML = "<em>" + autoDisplay + "</em>";
    $("#autoDisplay").fadeOut();

    autoProfitSpam = Number(totalSpam - autoStoreSpam);
    autoTotalSpam = autoTotalSpam + autoProfitSpam; 
  }
  else
  {
    $("#autoDisplay").fadeOut();
  }

update();
}

function advAuto()
{
  alert("Advanced automator coming soon")
}