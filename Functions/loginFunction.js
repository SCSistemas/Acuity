/**
 * Created by kmimos on 21-12-2016.
 */
module.exports = {
    doLogin: function() {
        browser.get("http://trade-qa.acuityads.com:8080//login.html");
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual("AcuityAds | Login");
    }
};


