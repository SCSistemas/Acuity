module.exports = {
    doLogin: function () {
        var loginPage = new Pages.LoginPage();
        loginPage.get();
        loginPage.inputCredentials('Darwin', 'Darwin');
        browser.driver.wait(function(){
            targeturl = (browser.baseUrl + '/#/?type=My_Campaigns');
            return (targeturl == browser.getCurrentUrl());
        }, 10000)
            .then(function(){
                callback();
            }, function(){
                loginPage.inputCredentials('Darwin', 'Darwin');
                browser.driver.wait(function(){
                    targeturl = (browser.baseUrl + '/#/?type=My_Campaigns');
                    return (targeturl == browser.getCurrentUrl());
                }, 10000)
                    .then(function(){
                        callback();
                    }, function(){
                        targeturl = (browser.baseUrl + '/#/?type=My_Campaigns');
                        return (targeturl == browser.getCurrentUrl());
                    });

            });

    },

    waitForUrlToChangeTo: function (urlRegex) {
        var currentUrl;

        return browser.getCurrentUrl().then(function storeCurrentUrl(url) {
                currentUrl = url;
            }
        ).then(function waitForUrlToChangeTo() {
                return browser.wait(function waitForUrlToChangeTo() {
                    return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
                        return urlRegex == url;
                    });
                });
            }
        );
    },

    cleanupDB: function () {
        var ConnectDatabase = require("../connections/connectDatabase");
        var connectDatabase = new ConnectDatabase();
        protractor.wait(function () {
            connectDatabase.connection.connect();
        }, 10000);
        var sql = "update Licensee set Status = 'I' where Name like 'RAT%'";
        connectDatabase.connection.query(sql, function(err, rows) {
            console.log('4');
            if (!err) {
                console.log('Cleaned');
            }else{
                console.log('Error');
            }
        });
    }


};

