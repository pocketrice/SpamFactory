var infoAmount = 0;
var rank = 0;
var orderCount = 0;
var debt = 0;

var investProfitSpam = 0;
var investTotalSpam = 0;

var autoTotalSpam = 0;
var autoProfitSpam = 0;

var manualTotalSpam = 0;

var orderTotalSpam = 0;
var orderProfitSpam = 0;

var cheatTotalSpam = 0;
var cheatProfitSpam = 0;
var cheatCount = 0;

var advPrompt = 0;
var selectedRoll = 0;
var i = 1;
var investCount = 0;
var debtCounter = 0;

var oldSpam = 0;
var oldFactory = 0;
var oldMeat = 0;
var oldInvestCount = 0;

var checkDebug = false;
var debugActive = false;
var autoToggled = false;

var rollArray = new Array ();
rollArray[0] = "safeRoll";
rollArray[1] = "regRoll";
rollArray[2] = "riskRoll";

//var script = document.createElement('script');
//script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0]*/.appendChild(script);

function instantSpam()
{
   cheatCount = cheatCount + 1;
   totalSpam = totalSpam + 1000000
   alert("You order a boatload of SPAM, and now can freely spend it without any worry of debt. Excellent!")

   cheatTotalSpam = cheatTotalSpam + 1000000;
   update();

   potentialOverride = true;
   potOverValue = 1000000;
}


function status()
{
  // Basically a mildly funny message based on how much potential and spam you have.
  //var rank = 0;

}

function debugMode() // Enables buttons/debug.html
{
  if (debugActive == false)
  {
     $("#debugMode").show();
     $("#debugLinks").show();
     $("#debugSandbox").show();
     $("#debugGap").hide();
     $("#debugGap2").hide();
     debugActive = true;
     alert("Debug features enabled. Use the 'debug sandbox' for more features.")
  }
  else 
  {
     if (debugActive == true)
     {
      $("#debugMode").hide();
      $("#debugLinks").hide();
      $("#debugSandbox").hide();
      $("#debugGap").show();
      $("#debugGap2").show();
      debugActive = false;
      alert("Debug features disabled.")
     }
  }
  

  
  /*if (x.style.display === "none") 
  {
    x.style.display = "block";
  } 

  else 
  {
    x.style.display = "none";
  }*/
}


function cheat()
{
  cheatCount = cheatCount + 1;
  var cheatStoreSpam = totalSpam;

  update();
  var c1 = prompt("Set total amount of SPAM...", "?")
  var c2 = prompt("Set number of factories...", "?")
  var c3 = prompt("Set bags of inferior meat...", "?")
  var c4 = prompt("Set # of investments made...", "?")
  var c5 = prompt("Enable investment cap?", "?")
  
  if (!(c1 == null) && (!(isNaN(c1))) && (Number.isInteger(Number(c1))))
  {
    oldSpam = totalSpam;
    totalSpam = Number(c1);
    alert("Total SPAM count changed from " + oldSpam + " to " + totalSpam + ".")

    if ((totalSpam - oldSpam) > 0)
    {
      potentialOverride = true;
      potOverValue = (totalSpam - oldSpam);
    }
    else
    {
      potentialOverride = true;
      potOverValue = 0;
    }
    
  }
  else
  {
    alert("Input not a number! SPAM count unchanged.")
  }

  if ((!(c2 == null)) && (!(c2 < 1)) && (!(isNaN(c2))) &&(Number.isInteger(Number(c2))))
  {
    oldFactory = factories;
    factories = Number(c2)
    alert("Factory count changed from " + oldFactory + " to " + factories + ".")

  }
  else
  {
    alert("Input must be an integer, not equal null or NaN, and cannot be smaller than 1. Factories unchanged.")
  }

  if ((!(c3 == null)) && (!(c3 < 0)) && (!(isNaN(c3))) &&(Number.isInteger(Number(c3))))
  {
    oldMeat = meat;
    meat = Number(c3)
    alert("Inferior meat count changed from " + oldMeat + " to " + meat + ".")
  }
  else
  {
    alert("Input must be an integer, not equal null or NaN, and cannot be smaller than 0. Inferior meat count unchanged.")
  }

  if ((!(c4 == null)) && (!(c4 < 0)) && (!(isNaN(c4))) &&(Number.isInteger(Number(c4))))
  {
    oldInvestCount = investCount;
    investCount = Number(c4)
    alert("Investment count changed from " + oldInvestCount + " to " + investCount + ".")
  }
  else
  {
     alert("Input must be an integer, not equal null or NaN, and cannot be smaller than 0. Investment count unchanged.")
  }

  if ((c5 == "true") || (c5 == "false"))
  {
    if (c5 == "true")
    {
      investCount = 0;
      alert("Investment cap now toggled to 'on' and investments changed to 0.")
    }

    if (c5 == "false")
    {
      investCount = -10000;
      alert("Investment cap now toggled to 'off'.") //TODO: disable cap
    }
  }
  else
  {
    alert("Input must be true or false.")
  }

  
  cheatProfitSpam = totalSpam - oldSpam
  
  if (cheatProfitSpam >= 0)
  {
    cheatTotalSpam = cheatTotalSpam + cheatProfitSpam;
  }
  
  
  update();
}


function keyEvent()
{
    // A key unskippable event that unlocks something
}

function randomEvent()
{
   // Random events that can be positive or negative (similar to wild cards from Civic Mirror)
}

function order()
{
   var orderStoreSpam = totalSpam;
   orderCount = Number(orderCount) + 1;
  

   if ((Number(totalSpam) - 750 <= -300) && (potential <= 10) && (orderCount >= 3))
   { // If debt goes over -500, production is less than 30 spam per time, and you have ordered a third time, then activate.
     alert("You tried ordering more cans, but your advisor scrambled over to warn you not to fall into even more debt. Sounds reasonable... (Current debt: " + debt + " cans)")

     potentialOverride = true;
     potOverValue = 0;
   }
   else
   {
     if (orderCount >= 2)
   { // If you order a second time, you pay 750 cans in debt.
     alert("You tried to sneak away with yet another big shipment of SPAM, but you were caught and was forced to pay 750 cans as debt.")

     totalSpam = Number(totalSpam) - 750;
    
     if (totalSpam < 0)
     {
        debt = Math.abs(Number(totalSpam))
        alert("You are now indebted, and owe a total of " + debt + " cans of SPAM.")
     }

     potentialOverride = true;
     potOverValue = 0;
   }
   else
   { // First order always gives you 500 cans
     alert("You ordered a big box of SPAM cans for a very cheap price. Gained 500 cans!")
     totalSpam = Number(totalSpam) + 500;

     potentialOverride = true;
     potOverValue = 500;
   }
   }
  
  orderProfitSpam = Number(totalSpam - orderStoreSpam);

  if (orderProfitSpam >= 0)
  {
  orderTotalSpam = orderTotalSpam + orderProfitSpam;
  }

  update();
   
}

function invest()
{
  investCount = Number(investCount) + 1;
  var investStoreSpam = totalSpam;

  if ((investCount > 8) || (totalSpam < 100))
  { // To-do: refresh invest limit at a certain point
     if (investCount > 8)
      {
        investCount = Number(investCount) - 1;
        selectedRoll = null;
        alert("You tried investing again, but no one accepts your investment. Try again later...")

        potentialOverride = true;
        potOverValue = 0;
      }
     else // Assumes totalSpam is less than 100 now
      {
        selectedRoll = null;
        investCount = Number(investCount) - 1;
        alert("You tried investing your SPAM cans to try and make profit, but you don't have enough SPAM. Try again later...")

        potentialOverride = true;
        potOverValue = 0;
      }
  }
  else
  {
    var selectedRoll = rollArray[i]
    var jackpotRoll = Math.floor(100 * Math.random());
    var wahRoll = Math.floor(100 * Math.random());
  }

  
  
  if ((jackpotRoll > 95) && (wahRoll <= 99)) // Only jackpot
  {
    var pastSpam = totalSpam;
    totalSpam = Math.floor(Number(totalSpam) * 10);

    alert("You invest your SPAM collection, and collect an outstandingly successful return! Increased SPAM count by 10x. (" + pastSpam + " cans -> " + totalSpam + " cans)")

    selectedRoll = null;
    potentialOverride = true;
    potOverValue = totalSpam - pastSpam;
  }
  
  if ((wahRoll == 100) && (jackpotRoll <= 95)) // Only waluigi
  {
    var pastSpam = totalSpam;
    totalSpam = 0;

    alert("You ordered one of your officers to send your SPAM cans for investing, but a mustached, lanky thief stole all your SPAM... (" + pastSpam + " cans -> 0 cans)")
    
    selectedRoll = null;
    potentialOverride = true;
    potOverValue = 0;
  }

  if ((wahRoll == 100) && (jackpotRoll > 95)) // 0.05% chance
  { // Add 'challenge goal' for getting this rare event...
  // ...or maybe some sort of way to view all rare/potential events
    
    alert("You invest your SPAM and achieve a jackpot of profits! Unfortunately, a tall mustached thief stole all your SPAM... how unlucky! (" + totalSpam + " cans -> " + totalSpam + " cans)")
    
    selectedRoll = null;
    potentialOverride = true;
    potOverValue = 0;
  }

  // Used for debugging
  //alert(i)
  //alert(selectedRoll)

  var safeRoll = Math.floor(120 * Math.random());
  var regRoll = Math.floor(100 * Math.random());
  var riskRoll = Math.floor(80 * Math.random());
  
  
  if (selectedRoll == "safeRoll") // Personal note: OPTIMIZE CODE SOON!
  {
     if (safeRoll > 60)
      {
       var pastSpam = totalSpam;
       totalSpam = Math.floor(Number(totalSpam) * 1.5);
       alert("You invest cautiously, and make profit! Your SPAM count increases by 1.5x. (" + pastSpam + " cans -> " + totalSpam + " cans)")

       var investSpam = Number(totalSpam) - Number(pastSpam)

      potentialOverride = true;
      potOverValue = investSpam;
      }
    else
      {
       var pastSpam = totalSpam;
       totalSpam = Math.floor(Number(totalSpam) / 1.5);
       alert("You invest safely and unfortunately did not make profit. SPAM count cut by 1.5x. (" + pastSpam + " cans -> " + totalSpam + " cans)")

       var investSpam = Number(totalSpam) - Number(pastSpam)

      potentialOverride = true;
      potOverValue = 0;
      }
  }
  
  if (selectedRoll == "regRoll")
  {
    if (regRoll > 60)
    {
      var pastSpam = totalSpam;
      totalSpam = Math.floor(Number(totalSpam) * 2.5);
      alert("You make a normal investment and succeed! SPAM count increases by 2.5x. (" + pastSpam + " cans -> " + totalSpam + " cans)")

      var investSpam = Number(totalSpam) - Number(pastSpam)

      potentialOverride = true;
      potOverValue = investSpam;
    }
    else
    {
      var pastSpam = totalSpam;
      totalSpam = Math.floor(Number(totalSpam) / 2.5);
      alert("You invest as normal and unfortunately lost. SPAM count cut by 60%. (" + pastSpam + " cans -> " + totalSpam + " cans)")

      var investSpam = Number(totalSpam) - Number(pastSpam)

      potentialOverride = true;
      potOverValue = 0;
    }
  }

  if (selectedRoll == "riskRoll")
  {
    if (riskRoll > 60)
    {
      var pastSpam = totalSpam;
      totalSpam = Math.floor(Number(totalSpam) * 4);
      alert("You decide to make a risky investment, and make lots of stonks! SPAM count increases by 4x! (" + pastSpam + " cans -> " + totalSpam + " cans)")

      var investSpam = Number(totalSpam) - Number(pastSpam)

      potentialOverride = true;
      potOverValue = investSpam;
    }
    else
    {
      var pastSpam = totalSpam;
      totalSpam = Math.floor(Number(totalSpam) / 4);
      alert("You make a risky investment... and oof, no success. SPAM count cut by 75%. (" + pastSpam + " cans -> " + totalSpam + " cans)")

      var investSpam = Number(totalSpam) - Number(pastSpam)

      potentialOverride = true;
      potOverValue = 0;
    }
  }

  // Used for debugging
  //alert(safeRoll + " (safe)")
  //alert(regRoll + " (regular)")
  //alert(riskRoll + " (risky)")
  
  investProfitSpam = Number(totalSpam - investStoreSpam); // Find difference between spam before investing and after investing

  if (investProfitSpam >= 0)
  {
  investTotalSpam = investTotalSpam + investProfitSpam; // Add up how much spam you've made, only if it is positive
  }
  update();
}

function invOld() // Old function, just for documentation
{
  i = Number(i) - 1;
  if ((i > 2) || (i < 0))
  {
    if (i > 2)
    {
      i = 2;
      alert(i) // Should be 2
    }

    else
    {
      i = 0;
      alert(i) // Should be 0
    }
  }
  else
  {
    alert(i) // Should be 1
  }
}


function invLeft()
{
  i = Number(i) - 1; // Requires optimization, see old function to work on base function more
  if ((i > 2) || (i == -1))
  {
    if (!(i > 2))
    {
      i = 2;
      alert("Selected investment: Risky (" + i + ")")
    }
  }
  else
  {
    if (i == 0)
    {
     alert("Selected investment: Safe (" + i + ")")
    }
    else
    {
      alert("Selected investment: Normal (" + i + ")")
    }
  }
}

function invRight()
{
  i = Number(i) - 1;
  if ((i > 2) || (i < 0))
  {
    if (i > 2)
    {
      i = 2;
      alert(i) // Should be 2
    }

    else
    {
      i = 0;
      alert(i) // Should be 0
    }
  }
  else
  {
    alert(i) // Should be 1
  }
}



function info()
{
  infoAmount = Number(infoAmount) + 1;

  if (infoAmount <= 1)
  { // Maybe a "spam stock market" that randomizes to add challenge?
    alert("Welcome to SPAM Factory! Produce high-quality spam and make tons of profit by investing into upgrades. To learn about production, press the '?' button again.")
  }
  else
  {
    alert("By initially making spam, you create 1 can of spam each time. Invest into inferior meat to make one extra can, and build factories to double production.") 
    
    alert("Tip: Use the 'inquiry' button to check how much spam you have and other stats.")
  }
  update();
}


function query()
{ // To-Do: scrolling ticker text for latest spam news and what to do next? Maybe unique messages for what you have at the moment?
  update();
  if (debt <= 0)
  {
     alert("You interrogate factory workers on how much SPAM has been produced. Currently " + totalSpam + " cans of spam are in storage, with lifetime production of " + absoluteTotalSpam + " cans.")
  }
  else
  {
    alert("You interrogate factory workers on how much SPAM has been produced. Currently 0 cans of spam are in storage, with lifetime production of " + absoluteTotalSpam + " cans.")
  }
  

  alert("You currently have mixed " + meat + " bags of inferior meat, and built " + (Number(factories) - 1) + " factories.")

  alert("Potential spam per production is " + potential + " cans of delicious spam, and you have manually made " + manualTotalSpam + " cans of spam.")
  
  if (automator > 0)
  {
    alert("You have a total of " + automator + " automated spam machines, which produces " + autoVisual + " cans of spam every second. Lifetime auto production is " + autoTotalSpam + " cans.")
  }

  if (investCount > 0)
  {
    alert("You have made a total of " + investCount + " investments, and made a total of " + investTotalSpam + " cans from investing.")
  }

  if (cheatCount > 0)
  {
    alert("You have sneakily used cheats a total of " + cheatCount + " times; also evaded effort and created " + cheatTotalSpam + " cans out of thin air. Interesting...")
  }
  
  if ((orderCount > 0) && (!(debt > 0)))
  {
    alert("You have ordered " + orderCount + " shipments, and acquired " + orderTotalSpam + " cans from imports.")
  }
  else
  {
    if ((orderCount > 0) && (debt > 0))
    {
      alert("You have ordered " + orderCount + " shipments, and owe " + debt + " cans to imports. Oof...") // Might be useful if other sources of debt exist; in which case split into orderDebt, investDebt, etc.
    }
  }


  if (debt > 0)
  {
    alert("Currently indebted with " + debt + " cans of debt.")
    debtCounter = debtCounter + 1;
  }
  else
  {
    if (debtCounter == 1)
    {
      alert("You are not in debt anymore, hooray!")
      debtCounter = 0;
    }
  }


  /*if (rank == 0) // needs optimizing
  {
    alert("Rank: SPAM Collector. You collect delicious spam as an avid hoarder of meats.")
  }*/
  

  /*if ((Number(totalSpam) > 1000) && (advPrompt <= 0)) // Advancement check, move somewhere else preferably so it updates constantly
  {
    alert("After making a thousand cans of spam, you decide to invest into advancements to maximize your production. Advancements unlocked!")

    advPrompt = Number(advPrompt) + 1;
    var adv = true
  }
  else
  {
    var adv = false
  }
  update();*/ // TODO: Add this later, maybe with extra balancing when advancements are done
}


function allowDebug()
{
  
  if (document.getElementById("debugCheck").checked == true)
  {
    checkDebug = true;
    update();
  } 
  else
  {
    checkDebug = false;
    update();
  }
}

function transferDebug()
{
  update();
  if (checkDebug == false)
  {
    alert("You did not accept the conditions!");
    //document.getElementById("a")
  }
  
  if (checkDebug == true)
  {
    alert("Transferring to debug page...")
  }
}

function demoMode()
{
  //Essentially send to a copy of the demo mode (separate html page), with some extra features such as a link back to full version.)
}

/*function arrayTest() // Data storage test through arrays (progress saving?) STILL REQUIRE TESTING!
{
  const testArray = new Int8Array;
  var buffer = new ArrayBuffer(2 * 5);
  var array = new Int8Array(buffer);
  
  for (var i = 0; i < array.length; i++) {
    array[i] = i;
  }

  array[0] = 300;
  
  for (var i = 0; i < array.length; i++) {
    console.log("INT8ARRAY ELEMENT: " + array[i]);
  }
  //alert(testArray)
}*/