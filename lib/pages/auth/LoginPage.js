var LoginPage = function () {
    var url = browser.baseUrl + '/login.html#/';
    var userTxt = element(by.model('user.userName'));
    var paswdTxt = element(by.model('user.password'));
    var loginBtn = element(by.buttonText('Login'));

    this.get = function () {
        browser.get(url);
    };

    this.inputCredentials = function(username, password) {
        userTxt.sendKeys(username);
        paswdTxt.sendKeys(password);
        loginBtn.click();
    };
};

module.exports = LoginPage;