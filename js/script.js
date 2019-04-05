/ This program will generate a new random quote when prompted//


//If random quote button is clicked these quotes will be randomly picked//

var quotes = [
   {quote: "For some there is a method to their madness, For others there is only madness to their methods",
    source: "-Toni Hammond",
    year: "2019"},

   {quote: "Start by doing what's necessary, then do what's possible, and suddenly you are doing the impossible", 
   source: "-Francis of Assisi"},

   {quote: "Believe you can and you're halfway there", 
   source: "-Theodore Roosevelt"},

   {quote: "It does not matter how slowly you go as long as you do not stop",
   source: "-Confucius"},

   {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time",
   source: "-Thomas A. Edison"},

   {quote: "Don't watch the clock; do what it does. Keep going", 
   source: "-Sam Levenson"},

   {quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence", 
   source: "-Confucius"
  }];
 
var source ={} 
  source= {'-Francis of Assisi':'-Theodore Roosevelt','-Confucius':'-Thomas A Edison','-Confucius':'-Sam Levenson'};

//A function for a new random quote is called//

var randomQuote = Math.floor(Math.random() ("quote".length))

  function printQuote(){
    var quote= '<p class="quote"> '+ source+'</p>'
    var source= '<p class="source"> '+ quote+'</p>'
    var citation='<p class="citation"> '+ citation+'</p>'
    var year='<p class="year"> '+ year+ '</p>'
    var quoteBox = document.getElementById("quote-Box");
    quoteBox.innerHTML=quote;
  
  
};



document.getElementById('loadQuote').addEventListener("click", printQuote, false);
