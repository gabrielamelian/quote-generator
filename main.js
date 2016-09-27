document.addEventListener('DOMContentLoaded', start);

function start () {
    getQuote();
    var tweetQuote = document.getElementById("tweet");
    var newQuote = document.getElementById("newquote");
    tweetQuote.addEventListener("click", tweetIt);
    newQuote.addEventListener("click", getQuote);
}

function tweetIt () {
    alert("tweeting");
}

// function quoteIt () {
//     alert("I want a new quote!");
// }

function getQuote() {
    $.ajax({
   url: 'https://crossorigin.me/http://quotes.rest/qod.json',
   data: {
      format: 'json'
   },
   error: function() {
      $('#quote').html('<p>An error has occurred</p>');
   },
   dataType: 'json',
   success: function(data) {
      var $quote = $('<h1>').text(data.contents.quotes[0].quote);
      // console.log($quote);
      var $author = $('<p>').text(data.contents.quotes[0].author);
      // console.log($author);
      $('#quote')
         .append($quote)
         .append($author);
   },
   type: 'GET'
});
}