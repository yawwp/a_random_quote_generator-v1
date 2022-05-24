/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {  quote: "Houston, we have a problem", 
     source: "Jim Lovell (Tom Hanks)",
     citation: "Apollo - Movie" ,
     year: 1995
 },
 {
   quote: "You shall not pass!",
   source: "Gandalf (Ian Mckellen)",
   citation: "Lord of the Rings: The Fellowship of the Ring - Movie",
   year: 2002
 },
 {
   quote: "May the Force be with you",
   source: "Han Solo (Harrison Ford)",
   citation: "Star Wars: A New Hope - Movie",
   year: 1977
 },
 {
   quote: "Hello, my name is Inigo Montoya. You killed my father. Prepare to die.",
   source: "Inigo Montoya(Mandy Patinkin)",
   citation: "The Princess Bride - Movie ",
   year: 1987
 },
 {
   quote: "I'll be back.",
   source: "Terminator (Arnold Schwarzenegger)",
   citation: "The Terminator - Movie",
   year: 1984
 }
];


function getRandomQuote() {
 let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
 return randomQuote; //returns a random quote from the `quotes` array 
};

/***
* `printQuote` function
***/
function printQuote() { 
 let quoteSelected = getRandomQuote();
 printQuote =  `
   <p class="quote"> ${quoteSelected.quote} </p>
   <p class="source"> ${quoteSelected.source}
 `
 if (quoteSelected.citation !== undefined) {
   printQuote += `
   <span class="citation">${quoteSelected.citation}</span>`
 } else {
   printQuote += `</p>`
 }

 if (quoteSelected.year !== undefined) {
   printQuote += `
   <span class="year"> ${quoteSelected.year} </span></p>`
 } else {
   print += `</p>`
 }
 return printQuote;
};
//printQuote
document.querySelector('main').innerHTML = printQuote();



 // 6. set the innerHTML of the quote-box div to equal the 
 // complete HTML string





/***
* click event listener for the print quote button
* DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);