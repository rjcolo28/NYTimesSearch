// global variables
var recNum = 1;
var searchTrm;
var startYr = 18510101
var endYr = 20190101
var article;
var title;

$(document).ready(function() {


    // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // url += '?' + $.param({
    //   'api-key': "e78f0950463749c98b09fd7420c6c7c0",
    //   'q': "Vietnam",
    //   'begin_date': startYr,
    //   'end_date': endYr
    // });
    // $.ajax({
    //   url: url,
    //   method: 'GET',
    // }).done(function(result) {
    //   console.log(result);
    // }).fail(function(err) {
    //   throw err;
    // });
    $(".btn").on("click", function() {
    searchTrm = $("#searchTerm-text").val();
    searchFn();
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
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });


for (i = 0; i < recNum ; i++){
    articleTitle = response.docs[i].headline.main;
    articleAuthor = result.docs[i].byline.original;
    console.log(articleTitle, articleAuthor);
    resultNum = i+1;
}
}
});
