/**
 * Created by kmimos on 12-12-2016.
 */
// conf.js
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['Login/*', 'Licensee/*.js'],
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 25000,
        getPageTimeout: 25000,
        allScriptsTimeout: 20000
    },
    capabilities: {
        browserName: 'chrome'
        //maxInstances: 5,
        //count: 1
    },

    suites: {
        Login: './Login/*.js',
        Licensee: './Licensee/*.js'
    },

    onPrepare: function () {
        //global.Functions =  require(__dirname + '/lib/functions/glb_functions.js');

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/',
            takeScreenshots: true,
            screenshotsFolder: 'images',
            takeScreenshotsOnlyOnFailures: true
        }));

    }

    /*beforeEach:(function() {
        //browser.ignoreSynchronization = true;
        //broser.waitForAngular();
    })*/


};
