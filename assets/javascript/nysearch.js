// global variables
var recNum;
var searchTrm;
var startYr = 18510101
var endYr = 20190101
// var article;
var title;
var author;
var nytArts;
var nytArt;
var resultNum;

$(document).ready(function() {

    $(".btn:submit").on("click", function() {
      $(".listEntry").remove();
      searchTrm = $("#searchTerm-text").val();
      recNum = $("#recordsToRetrieve-text").val();
      console.log("Rec Num: " + recNum)
      searchFn();
    })

    $(".btn:reset").on("click", function() {
      $(".listEntry").remove();
      $("#searchTerm-text").val("");
      // $("#recordsToRetrieve-text").val("");
    })


function searchFn(){
  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "e78f0950463749c98b09fd7420c6c7c0",
    'q': searchTrm,
    'begin_date': startYr,
    'end_date': endYr
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).then(function(result) {
    nytArts = result;
    writeData();

  }).fail(function(err) {
    throw err;
  });
 
};
function writeData(){
  for (i = 0; i < recNum ; i++){
    title = nytArts.response.docs[i].headline.main;
    let titleHTML = $("<h2>").addClass("artTitle");
    titleHTML.text(title);

    author = nytArts.response.docs[i].byline.original;
    let authorHTML = $("<p>").addClass("artAuthor");
    authorHTML.text(author);

    resultNum = i+1;
    let numHTML = $("<h4>").addClass("artNum");
    numHTML.text(resultNum);

    let infoBox = $("<div>").addClass("listEntry");
    infoBox.append(numHTML).append(titleHTML).append(authorHTML);
    $("#topArticles").append(infoBox);
  }

}

// end of document.ready
});
