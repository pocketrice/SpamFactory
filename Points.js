var totalSpam = 0;
var factories = 1;
var meat = 0;
var automator = 0;
var autoCount = 0;
var cap = 0;
var cap1 = 0;
var cap2 = 0;
// variables above are for upgrades and price increases.

var potential = 1;

  function build() {
  
  if (totalSpam >= cap1 + 100) {
      alert("Your workers open a new factory! Your spam production now doubles. Cost increased to " + Number(cap1 + 200) + ".")
      totalSpam = totalSpam - Number(cap1 + 100);
      factories = factories + 1;
      cap1 = cap1 + 100;

  } else {
    factories = factories + 0;

    alert("you too poor lol, come back with " + Number(Number(cap1 + 100) - totalSpam) + " cans of spam")
  }
  update();
  }
  
function save() {

  if (totalSpam >= Math.floor(Number((cap + 10) * 1.1))) {
      
      alertCap = Math.floor(Number((cap + 10) * 1.1));
      alert("Your workers mix some inferior pork plus some chicken filler to ahem... lower the cost and increase the profit. One extra can of spam produced per production. Cost increased to " + Math.floor(Number(((alertCap + 10) * 1.1))) + ".")
      totalSpam = totalSpam - Math.floor(Number((cap + 10) * 1.1));
      meat = meat + 1;
      cap = Math.floor(Number((cap + 10) * 1.1));
      

  } else {
    meat = meat + 0;

    alert("you too poor lol, come back with " + (Math.floor(Number((cap + 10)) * 1.1) - totalSpam) + " cans of spam")
  }
  update();
  }


function automate()
{
  if (totalSpam >= Math.floor(Number((cap2 + 500) * 1.5))) {
      
      alertCap2 = Math.floor(Number((cap2 + 500) * 1.5));
      alert("You order the construction of automation modules to increase efficiency, with each producing 5 spam per second. Cost increased to " + Math.floor(Number(((alertCap2 + 500) * 1.5))) + ".")
      totalSpam = totalSpam - Math.floor(Number((cap2 + 500) * 1.5));
      automator = automator + 1;
      cap2 = Math.floor(Number((cap2 + 500) * 1.5));

      autoCount = autoCount + 1; // Doesn't depend on just number of automators in case the count goes back down later
      

  } else {
    automator = automator + 0;

    alert("you too poor lol, come back with " + (Math.floor(Number((cap2 + 500)) * 1.5) - totalSpam) + " cans of spam")
  }

  if (autoCount == 1)
  {
    alert("You've invested into automation! Press the 'Automator' button in the second row to toggle automation. Now, time for more SPAM!")
  }
  update();
}


function tutorial()
{
  var spam1 = 3;
  var value1 = 10;
  var total1 = Number(spam1) * Number(value1);

  /* if ((spam1 == 1) || (value1 !== 1))
  {
    alert("Handcraft and manually can some SPAM. This will produce " + spam1 + " can of spam, and is valued at " + value1 + " Jianyao Coins. In total it produces a value of " + total1 + " coins.")
  }
  else
  {
    if ((spam1 !== 1) || (value1 == 1))
    {
      alert("Handcraft and manually can some SPAM. This will produce " + spam1 + " cans of spam, and is valued at " + value1 + " Jianyao Coin. In total it produces a value of " + total1 + " coins.")
    }
  } */
} // Better tutorial now added to Event.js

