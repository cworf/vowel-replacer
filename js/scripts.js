$(function(){
  $('.input').submit(function(event){
    event.preventDefault();
    var vowels = ["a","e","i","o","u"];
    var letters = $('#sentence').val().split("");

    for (var iLetters = 0; iLetters < letters.length; iLetters += 1) {
      for (var iVowels = 0; iVowels < vowels.length; iVowels += 1) {
        if (letters[iLetters] === vowels[iVowels]) {
          letters[iLetters] = "-";
        };
      };
    };
    $('.result').text(letters.join(""));
  });
});

    // var found = false;
    // var check = letters.map(function(letter){
    //
    //   for (var index = 0; letter === vowels[index]; index += 1) {
    //     return "-";
    //     found = true;
    //   };
    //   if (!found) {
    //     return letter;
    //   };
    // });
    // var newSentence = check.join("");
    // $('.result').text(newSentence);



// vowels.forEach(function(vowel){
//   if (letter != vowel) {
//     newSentence.push(letter)
//   } else {
//     newSentence.push("-")
//   };
// });
// $('.result').text(newSentence);
