$(document).ready(function() {

  $.getJSON( 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', function(data) {
    $('#quote').empty();
    console.log(data)
    $('#quote').append("<p>" + data.quoteText + "</p>");
    if (data.quoteAuthor == "") {
     $('#quoteAuthore').append("<p>" + "Unknown" + "</p>");
   }
   else {
     $('#quoteAuthore').append("<p>" + data.quoteAuthor + "</p>");
    }
     //COLOR INFO BELOW//
    $('#colorGot').append("<span>" + "rgb(255,166,160)" + "</span>")
    }); //closing append first quote

  $('#findAnother').click(function(){
    $.getJSON( 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?', function(data) {
      $('#quote').empty();
      $('#quoteAuthore').empty();
      $('#quote').append("<p>" + data.quoteText + "</p>");
   if (data.quoteAuthor == "") {
     $('#quoteAuthore').append("<p>" + "Unknown" + "</p>");
   }
   else {
     $('#quoteAuthore').append("<p>" + data.quoteAuthor + "</p>");
      }
    //BACKGROUND COLOR FUNCTION BELOW//
      function r() {
      return Math.floor(Math.random() * 255) }
      var color = 'rgb(' + r() + "," + r() + "," + r() + ')';
      $("body").animate({backgroundColor: color}, "slow");
      $('#colorGot').empty()
      $('#colorGot').append("<span>" + color + "</span>")
    });
   }); //closing "find another" button and change background

    //////TWITTER API BELOW///////
   $('#twitter-share').click(function (e) {
   var textToTweet = $("#quote").text() + " " + $("#quoteAuthore").text()
   //?????????????????;
   if (textToTweet.length > 140) {
   alert('Tweet should be less than 140 Chars');
   }
   else {
   var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
   window.open(twtLink,'_blank');
   }
   });  // closing twitter-share

}); //closing document
