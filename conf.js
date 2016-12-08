var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://trade-qa.acuityads.com:8080',
    /*multiCapabilities: [
        { browserName: 'chrome'  },
        { browserName: 'firefox' }
    ],*/

    specs: ['specs/**/*_spec.js'],

    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 13000000
    },

    onPrepare: function () {
        global.Pages = require('include-all')({
            dirname: __dirname + '/lib/pages',
            filter: /(.*)\.js$/,
            flattenDirectories: true
        });

        global.Functions =  require(__dirname + '/lib/functions/glb_functions.js');

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/'
        }));

    }
};