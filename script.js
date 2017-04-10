$(document).ready(function(){
  var x = $("#results");
  var w = $("#url");
  $("#getWiki").on("submit", function(event){
    event.preventDefault();
 var y = $("#searchBox").val();  $.getJSON("https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=" + encodeURI(y) + "&exsentences=&exintro=1", function(json) {      
       var z = Object.keys(json).map(function(e) {
       return json[e];
       });
   var pages = z[2]['pages'];
   var pageId = pages[Object.keys(pages)[0]];
   var extract = pageId[Object.keys(pageId)[3]];
   var title = pageId[Object.keys(pageId)[2]];
   x.html("<h2>" + title + "</h2>" + extract);
   w.attr("href", "https://en.wikipedia.org/wiki/" + encodeURI(y))
    });
  });  
});