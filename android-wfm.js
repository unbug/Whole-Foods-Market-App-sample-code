"use strict";

require("./helpers/setup");

var wd = require("wd"),
  _ = require('underscore'),
  serverConfigs = require('./helpers/appium-servers'),
  _p = require('./helpers/promise-utils'),
  Q = require('q'),
  pageObjects = require('./pageobjects/index');

describe("android Whole Foods Market App", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = _.clone(require("./helpers/caps").android22);
    desired = _.extend(desired, require("./helpers/apps").WholeFoodsMarketApp);

    return driver
      .init(desired)
      .setImplicitWaitTimeout(15000);
  });

  after(function () {
    return driver
      .sleep(5000)
      .quit()
  });

  afterEach(function () {
    allPassed = allPassed && this.currentTest.state === 'passed';
  });

  it('should enter “Coffee” in the search box', function () {
    var home = pageObjects.getHome(driver);
    home.setSearchValue('Coffee')
    return home.verifySearchValue('Coffee');
  });

  it('should click on Search Button', function () {
    var home = pageObjects.getHome(driver);
    return home.startSearch();
  });

  it('should show the "SEARCH" result', function () {
    var searchResult = pageObjects.getSearchResult(driver);
    return searchResult.isSearchResultView();
  });

});
