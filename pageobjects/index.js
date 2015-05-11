var Home = require('./Home');
var SearchResult = require('./SearchResult');

var oHome,oSearchResult;
exports.getHome = function(driver){
  oHome = oHome || new Home(driver);
  return oHome;
}

exports.getSearchResult = function(driver){
  oSearchResult = oSearchResult || new SearchResult(driver);
  return oSearchResult;
}
