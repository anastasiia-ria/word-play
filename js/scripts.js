$(document).ready(function() {

  $('form#form').submit(function(event) {
    event.preventDefault();
    $('ul#result').empty();

    /*let sentence = $('input#sentence').val();
    let threeChar = "";
    let sentenceArray = [];
    let threeCharArray = [];
    sentenceArray = sentence.split(" ");

    sentenceArray.forEach(function(word) {
      if (word.length >= 3) {
        threeCharArray.push(word);
      }
    });

    threeCharArray.reverse();
    threeChar = threeCharArray.join(" ");
    $('div#result').append("<p>" + threeChar + "</p>");*/

    let textArray = $('input#sentence').val().toLowerCase().split(" ");
    let multiDimArray = [];
    let uniqueArray = textArray.filter( function( item, index, inputArray ) {
      return inputArray.indexOf(item) === index;
    }); 

    uniqueArray.forEach(function(word) {
      let count = 0;
      textArray.forEach(function(secondRun) {
        if (word === secondRun) {
          count++;
        }
      });
      multiDimArray.push([count,word]);
    });

    console.log(multiDimArray.sort().reverse());
    
    multiDimArray.sort().reverse().forEach(function(obj) {
      $('ul#result').append("<li>" +  obj[1] + " " + obj[0] +  "</li>");
    });
    
    $("#sentence").val("");  
  });
      
  const ranks = ["ace", "2" , "3", "4", "5" , "6", "7",  "8" , "9", "10", "jack" , "queen", "king"];
  const suits = ["spades", "hearts", "diamonds", "clubs"];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      $('ul#playing-card-list').append("<li>" + rank + " of " + suit + "</li>");
    });
  });
});
    