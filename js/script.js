// This program will generate a new random quote when prompted//


//If random quote button is clicked these quotes will be randomly picked//

var quotes = [
   {quote: "For some there is a method to their madness, For others there is only madness to their methods",
    source: "Toni Hammond",
    year: "2019"},

   {quote: "Start by doing what's necessary, then do what's possible, and suddenly you are doing the impossible", 
   source: "Francis of Assisi"},

   {quote: "Believe you can and you're halfway there", 
    citation: "www.goodreads.com",
   source: "Theodore Roosevelt"},

   {quote: "It does not matter how slowly you go as long as you do not stop",
    citation: "www.brainyquote.com",
    source: "Confucius"},

   {quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time",
    source: "Thomas A. Edison"},

   {quote: "Don't watch the clock; do what it does. Keep going", 
    source: "Sam Levenson"},

   {quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence", 
    source: "Confucius"},

   {quote: "Grouches are nearly always pinheads, small men who have never made any effort to improve their mental capacity", 
    source: "Thomas Edison",
    citation: "todayinsci.com",
    year: "Jan 1921"

  }];
 
var source =[
  { source: "ToniHammond, FrancisOfAssisi, TheodoreRoosevelt, Confucius, ThomasAEdison, Confucius, SamLevenson"
  }];

console.log 


//A function for a new random quote is called//

function getRandomQuote () {

  var randomQuote=Math.floor(Math.random() *quotes.length);
  return quotes[randomQuote]
}

// a function to print the quote to screen is called//

  function printQuote () {
    var list =getRandomQuote ();
    var elements = "";

    elements+= '<p class="quote">' + list.quote + "</p>";
    elements+= '<p class="source">' + list.source; 

// If quote contains a citation it will be called along with the quote//

if (quotes.citation) {
  elements += '<span class="citation">' + list.citation + "</span>"

}
//If the quote contains a year it will be called along with the quote//

if(quotes.year) {
  elements += '<span class="year">' + list.year + "</span>";
}

//Calling quotes stored in the quote.box in the inner HTML//
    elements +="</p>";
    var quotebox= document.getElementById("quote-box");
quotebox.innerHTML= elements;
  
} 

console.log

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

