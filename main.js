document.addEventListener('DOMContentLoaded', start);

function start () {
    getQuote();
    var tweetQuote = document.getElementById("tweet");
    var newQuote = document.getElementById("newquote");
    tweetQuote.addEventListener("click", tweetIt);
    newQuote.addEventListener("click", getQuote);
}

function tweetIt () {
    //$('#tweet').html('&nbsp;')
    var quoteText = $('#quote').text();
    var authorText = $('#author').text();
    console.log(quoteText);
    console.log(authorText);
    // twttr.widgets.load();
    var tweetContent = '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=' + quoteText + " - " + authorText + '">Tweet</a>';
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
          console.log(returnQuote);
          var $quote = $('<h1 id="quote">').text(returnQuote.quote);
          console.log($quote);
          var $author = $('<p id="author">').text(returnQuote.author);
          console.log($author);
          $('#quote')
             .replaceWith($quote)
          $('#author')
             .replaceWith($author);
       },
       beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "ghJGu8NsJXmsh5TCrhXPVgc4baHSp18CnHPjsng2ZnXWLXGsx0"); // Enter here your Mashape key
       }
      //  xhr.setRequestHeader("X-Mashape-Authorization", "ghJGu8NsJXmsh5TCrhXPVgc4baHSp18CnHPjsng2ZnXWLXGsx0");
    // type: 'GET'
    });
}
