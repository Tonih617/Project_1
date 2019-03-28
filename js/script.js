(document) .ready(function(){
var quotes = []
  quote = ['Start by doing what\s necessary then do what\s possible and suddenly you are doing the impossible.', 'Believe you can and you\'re halfway there.','It does not matter how slowly you go as long as you do not stop.', 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.', 'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.', 'Don\'t watch the clock; do what it does. Keep going.'];
 
var source =[]
  source= ['-Francis of Assisi','-Theodore Roosevelt','-Confucius','-Thomas A. Edison','-Confucius','-Sam Levenson'];



  


function loadQuote() {
var randomNumber = Math.floor(math.random() (quote.length))

function printQuote(quote){
  div.innerHTML=quote;
  
};



document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}})