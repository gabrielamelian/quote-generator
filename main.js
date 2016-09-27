document.addEventListener('DOMContentLoaded', start);

function start () {
    getQuote();
    var tweetQuote = document.getElementById("tweet");
    var newQuote = document.getElementById("newquote");
    tweetQuote.addEventListener("click", tweetIt);
    newQuote.addEventListener("click", getQuote);
}

function tweetIt () {
    //alert("tweeting");
    //<a href="https://twitter.com/share" class="twitter-share-button" data-text="testetetttetet" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
}

// function quoteIt () {
//     alert("I want a new quote!");
// }

function getQuote() {
    $.ajax({
       url: 'https://crossorigin.me/http://quotes.rest/qod.json', // http://quotes.rest/quote.json
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
             .replaceWith($quote)
          $('#author')
             .replaceWith($author);
       },
    type: 'GET'
    });
    updateTweet();
}

function updateTweet () {

}