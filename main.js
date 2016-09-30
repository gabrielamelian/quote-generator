document.addEventListener('DOMContentLoaded', start);

function start () {
    getQuote();
    var tweetQuote = document.getElementById("tweet");
    var newQuote = document.getElementById("newquote");
    tweetQuote.addEventListener("click", tweetIt);
    newQuote.addEventListener("click", getQuote);
}

function tweetIt () {
    var quoteText = $('#quote').text();
    var authorText = $('#author').text();
    var tweetContent = '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteText) + " - " + encodeURIComponent(authorText) + '">Tweet</a>';
    console.log(tweetContent);
    $('#tweet').html(tweetContent);
}


function getQuote() {
    $.ajax({
       url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
       data: {
          format: 'json'
       },
       error: function() {
          $('#quote').html('<p>An error has occurred</p>');
       },
       dataType: 'json',
       success: function(data) {
          var returnQuote = data;
          var $quote = $('<h1 id="quote">').text(returnQuote.quote);
          var $author = $('<p id="author">').text(returnQuote.author);
          $('#quote')
             .replaceWith($quote)
          $('#author')
             .replaceWith($author);
       },
       beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "ghJGu8NsJXmsh5TCrhXPVgc4baHSp18CnHPjsng2ZnXWLXGsx0");
       }
    });
}
