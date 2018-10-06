// Create Word Bank
var wordBank = ["nirvana", "pearl jam", "red hot chili peppers", "foo fighters", "oasis", "rage against the machine"];
var correct = [];
var incorrect = [];
var dashes = [];
// Chooses random wordfrom Word Bank array
var randomNum = Math.floor(Math.random() * wordBank.length);
var choosenWord = wordBank[randomNum];

//DOM manipulation
var wordDashes = document.getElementsByClassName('dashes');

console.log(choosenWord);
var newArr = [];
var hideWords = function() {
  for(var i = 0; i < choosenWord.length; i++) {
    newArr.push("-")
  }
  return newArr;
}
console.log(hideWords());

// Get guess
document.addEventListener('keypress', function() {
    var keyCode = event.keyCode;
    var keyWord = String.fromCharCode(keyCode);
    console.log(keyWord);
// Putting correct and incorrect guesses in new Arrays
if(choosenWord.indexOf(keyWord) > -1) {
    console.log(true);
      correct.push(keyWord);
      newArr[choosenWord.indexOf(keyWord)] = keyWord;
      if(correct.join('') == choosenWord) {
          alert('You Win!');
      };
      console.log(correct);
    }
    else {
        incorrect.push(keyWord);
        console.log(incorrect);
    }
  })

wordDashes[0] = hideWords().join(' ');
hideWords(wordDashes);