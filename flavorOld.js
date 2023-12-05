function flavorOld() // Old script
{
  function flavorRandom(max) // Derived from Mozilla math.random documentation
  {
    return Math.floor(Math.random() * Math.floor(max))
  }

 var flavorDescText = ['World domination through definitely healthy meat...', 'Your favorite game about spam!', 'A new day, a new opportunity to invest into spam', 'Breaking News: investors feverishly investing into SPAM', "I can't believe it's not spam!",'ANOTHER DAY OF SPAM PRODUCTION AWAITS!']


 var flavorCount = flavorDescText.length;

  var flavorIndex = flavorRandom(flavorCount);

// TODO: count number of strings, dynamically make them all into variables, randomize?

 /*var flavorVariables = {} ,flavorDescNum = ['world', 'favorite', 'day', 'news', 'surprise', 'caps'];

  for (var i=0;i<flavorDescNum.length;i+=1){
    flavorVariables[flavorDescNum[i]] = 0;
  }*/ // This seems broken... needs more testing (https://stackoverflow.com/questions/11807231/how-to-dynamically-create-javascript-variables-from-an-array)

  alert(flavorIndex) // random string
  alert(flavorCount) // total amount of strings
}