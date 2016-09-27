document.addEventListener('DOMContentLoaded', start);

function start () {
    var tweetQuote = document.getElementById("tweet");
    var newQuote = document.getElementById("newquote");
    tweetQuote.addEventListener("click", tweetIt);
    newQuote.addEventListener("contextmenu", quoteIt);
}

function tweetIt () {
    alert("tweeting");
}

function quoteIt () {
    alert("I want a new quote!");
}

