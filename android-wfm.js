"use strict";

require("./helpers/setup");

var wd = require("wd"),
    _ = require('underscore'),
    serverConfigs = require('./helpers/appium-servers'),
    _p = require('./helpers/promise-utils'),
    Q = require('q');


describe("android WholeFoodsMarketApp", function () {
  this.timeout(300000);
  var driver;
  var allPassed = true;

  before(function () {
    var serverConfig = serverConfigs.local;
    driver = wd.promiseChainRemote(serverConfig);
    require("./helpers/logging").configure(driver);

    var desired = _.clone(require("./helpers/caps").android22);
    desired = _.extend(desired,require("./helpers/apps").WholeFoodsMarketApp);

    return driver
      .init(desired)
      .setImplicitWaitTimeout(5000);
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
    return driver
        .elementById('com.wholefoods.wholefoodsmarket:id/etHomeSearch')
        .sendKeys('coffee')
        .text().should.become('coffee')
  });

  it('should click on Search Button', function () {
    return driver
        .elementById('com.wholefoods.wholefoodsmarket:id/imgSearch')
        .click()
  });

  it('should show the "SEARCH" result', function () {
    return driver
        .waitForElementById('com.wholefoods.wholefoodsmarket:id/header_title',5000)
        .text().should.become('SEARCH')
  });

});
