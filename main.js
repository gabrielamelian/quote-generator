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
   url: 'http://quotes.rest/qod.json',
   data: {
      format: 'json'
   },
   error: function() {
      $('#quote').html('<p>An error has occurred</p>');
   },
   dataType: 'jsonp',
   success: function(data) {
      var $quote = $('<h1>').text(contents.quotes[0].quote);
      var $author = $('<p>').text(contents.quotes[0].author);
      $('#quote')
         .append($quote)
         .append($author);
   },
   type: 'GET'
});
}