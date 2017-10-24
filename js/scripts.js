$(function(){
  $('.input').submit(function(event){
    event.preventDefault();
    var vowels = ["a","e","i","o","u"];
    var letters = $('#sentence').val().split("");
    var found = false;
    var check = letters.map(function(letter){

      for (var index = 0; letter != vowels[index]; index += 1) {
        return letter;
        found = true;
      };
      if (!found) {
        return "-";
      };
    });
    var newSentence = check.join("");
    $('.result').text(newSentence);
  });
});


// vowels.forEach(function(vowel){
//   if (letter != vowel) {
//     newSentence.push(letter)
//   } else {
//     newSentence.push("-")
//   };
// });
// $('.result').text(newSentence);
