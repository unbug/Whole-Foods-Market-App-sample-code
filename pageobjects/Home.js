module.exports  = function(driver){
  this.searchInput = driver.elementById('com.wholefoods.wholefoodsmarket:id/etHomeSearch');
  this.searchButton = driver.elementById('com.wholefoods.wholefoodsmarket:id/imgSearch');

  this.setSearchValue = function(v){
    return this.searchInput.sendKeys(v);
  }
  this.verifySearchValue = function(v){
    return this.searchInput.textPresent(v);
  }
  this.startSearch = function(){
    return this.searchButton.click();
  }
}
