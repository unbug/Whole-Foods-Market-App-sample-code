#Node.js Whole Foods Market App sample code

### to view reports in [reports](https://github.com/unbug/Whole-Foods-Market-App-sample-code/blob/master/reports/)

![Reports.](https://github.com/unbug/Whole-Foods-Market-App-sample-code/blob/master/assets/reports.png)

### to view code coverages in [coverage](https://github.com/unbug/Whole-Foods-Market-App-sample-code/blob/master/coverage/)

![coverage.](https://github.com/unbug/Whole-Foods-Market-App-sample-code/blob/master/assets/coverage.png)

## prerequisites

Upgrade Mocha to the latest version:

```
npm install -g -f mocha
```

Install local packages:

```
npm install
```

### to run tests locally

Install appium and start the appium server for your device, please refer to:

- http://appium.io
- https://github.com/appium/appium/blob/master/README.md

Install the latest android SDK.
- http://developer.android.com/sdk/installing/index.html?pkg=tools

### Before run test
Start a virtual device(with Nexus5 and android5.1.1) from AVD manager.
Launch Appium(set the "Android Emulator" for Device Name in the android settings).

## running tests

```
gulp
```
