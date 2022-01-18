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
    // countArraySorted = countArray.sort();
    
    // for (i=0; i < countArraySorted.length; i++) {
    //   countArraySorted[i].indexOf

    
    multiDimArray.sort().reverse().forEach(function(obj) {
      $('ul#result').append("<li>" +  obj[1] + " " + obj[0] +  "</li>");
    });
      



    
    $("#sentence").val("");  
  });
      
});
    