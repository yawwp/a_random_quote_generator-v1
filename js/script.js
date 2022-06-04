/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of objects that consist of a "quote", it's "source", the "citation", and "year" it was said. 
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

/*
  The getRandomQuote function selects a random object in the `quotes` array. 
  In the function,
      `quotes` is an array and we needed to select a random number from the array.
      Math.random() method was used to randomize the selection from the quotes length.
      Math.floor is used to select a position in the array ranging from 0 to anywhere 
      in the quotes length and this is set equal to 'randomQuote'.
  Using this function will return a randomQuote.
*/
function getRandomQuote() {
 let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
 return randomQuote;
}

let html = ``; // Empty string value. This will be where we store the HTML elements. 

/*
  The printQuote function inputs html elements into the empty string created above. 

      Firstly, we grab a quote from the getRandomQuote function and save it the variable 'quoteSelected'.
      The quote that is selected is then added in the html string. The html string is in form of an html element. 
      Each line consists of part of the object using methods, 
          "quoteSelected.quote" for the quote and "quoteSelected.source" for the soruce.

      Secondly, an "If else" statement is used to test the existence of a citation in the object and the existence 
      of the year in the object. If they are aviable then it will be added into the string. If not, then the html
      string will close out with the last </p> element. 

      Lastly, we return the the value of the string to the DOM. 
*/

function printQuote() { 
 let quoteSelected = getRandomQuote();
 html =  `
   <p class="quote"> ${quoteSelected.quote} </p>
   <p class="source"> ${quoteSelected.source}
 `
 if (quoteSelected.citation !== undefined) {
   html += `
   <span class="citation">${quoteSelected.citation}</span>`
 } else {
   html += `</p>`
 }

 if (quoteSelected.year !== undefined) {
   html += `
   <span class="year"> ${quoteSelected.year} </span></p>`
 } else {
   html += `</p>`
 }
 return document.getElementById('quote-box').innerHTML = html;
};


document.getElementById('load-quote').addEventListener("click", printQuote, false);