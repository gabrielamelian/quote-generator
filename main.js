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
    // updateTweet();
}

function updateTweet () {

}
