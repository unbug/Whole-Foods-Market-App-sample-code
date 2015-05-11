module.exports = function(driver){
  this.title = driver.elementById('com.wholefoods.wholefoodsmarket:id/header_title');

  this.getTitle = function(){
    return this.title.text();
  }
  this.isSearchResultView = function(){
    return this.getTitle().should.become('SEARCH');
  }
}
