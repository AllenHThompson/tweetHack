/*
interation 1:use phonetic concatination to take a paragraph not essay, and shorten by removing vowels
iteration 2: if too long, run again
iteration 3: if too long, back to user and say too long, shortern your paragraph

TEST TWEET
example 1.
Since I have been enrolled at DigitalCrafts. I have been learning HTML, JavaScript, and JQuery. With this tools, I have thought about solving a problem. It is hard to fit a tweet into 140 characters. (160 chars)

example 2.
Composing a tweet that fits into Twitters 140 character limit is not always easy! It would be nice if there was an application that could help you with that. It could be built with JavaScript! (152 chars)

*/

//need to count all characters. is it less than 140?
//recount after edit is it less than 140?
//use .split to break paragraph into an array
//match the array to to abbr Object
var abbr = {
     Composing: 'compsing',
     that: 'tht',
     character: 'chractr',
     limit: 'lmt',
     not: 'nt',
     always: 'alwys',
     easy: 'esy',
     application: 'applction',
     since: 'snc',
     enrolled: 'enrld',
     learning: 'lrning',
     thought: 'thght',
     about: 'abt',
     solving: 'slving',
     to: '2',
     into: 'n2',
     tweet: 'twt',
     can: 'cn',
     abbreviation: 'abbr',
     problem: 'prblm',
     boot: 'bt',
     camp: 'cmp',
     JavaScript: 'JS',
     would: 'wd',
     could: 'cd',
     with: 'w/',
     help: 'hlp',
}

var str = "";
var replace = "";


$(document).ready(function() {
     $('.form').submit(function(event){
          event.preventDefault();

          var input = $('#input').val();
          var x = tweetHack(input);
          $('#output').text(x);

          var count = input.length;
          $('#count').text(count);

          var countResult = x.length;
          $('#count-result').text(countResult);
     });
     // $('#input').keypress(function(){}

});

function countFun(input){
     var count = input.length;
}
//This function will remove vowels from a word

var test = "application";
function removeVowel(){
     var vow = [a, e, i, o, u]
     if vow.charAt = [a, e, i, o, u];

     if test.attChar =


}

function tweetHack(input){
     var newArray = [];
     str = input.split(" ");
     for (var i = 0; i < str.length; i++){
          var word = str[i];
          if (word in abbr) {
               replace = abbr[word];
               newArray.push(replace);
          } else {
               newArray.push(word);
          }
     }
     var result = newArray.join(" ");
     return result;
}
