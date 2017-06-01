$(document).ready(function() {

  $("#new-quote").on("click", newQuote);
  $("#tweet").on("click", newTweet);

  var quote;
  var author;

  function newQuote() {
    $.ajaxSetup({
      cache: false
    });

    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", writeQuote);

    $(".canvas").html("");
  }

  function writeQuote(a) {
    quote = a[0].content;
    author = a[0].title;

    $(".canvas").append(quote + "<footer> " + author + "</footer>");

  }

  function newTweet() {
    $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quote.slice(3,-5));
  }

});