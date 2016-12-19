/**
 * Created by kmimos on 12-12-2016.
 */
// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Login.js','Advertiser/*.js'],
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 25000,
        getPageTimeout: 25000,
        allScriptsTimeout: 20000
    },
    capabilities: {
        'browserName': 'firefox'
    }
};
