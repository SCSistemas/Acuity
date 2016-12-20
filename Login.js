/**
 * Created by kmimos on 12-12-2016.
 */
// spec.js
describe('Protractor Demo App', function() {
    it('UI3 Enabled', function() {
        browser.get("http://trade-qa.acuityads.com:8080//login.html");
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual("AcuityAds | Login");
    });
    it('Login - Wrong Password ', function() {
        element(by.name('userName')).clear().sendKeys('laxmi');
        element(by.name('password')).clear().sendKeys('sdasdasd');
        var el = element(by.className('btn btn-info btn-block aadev-submit ng-binding'));
        el.click();
        expect(browser.getTitle()).not.toEqual("AcuityAds | Programmatic Marketing Platform");
    });
    it('Login - Wrong Username', function() {
        element(by.name('userName')).clear().sendKeys('wererwerr');
        element(by.name('password')).clear().sendKeys('laxmi');
        var el = element(by.className('btn btn-info btn-block aadev-submit ng-binding'));
        el.click();
        expect(browser.getTitle()).not.toEqual("AcuityAds | Programmatic Marketing Platform");
    });
    it('Login - Wrong Username/Password', function() {
        element(by.name('userName')).clear().sendKeys('laxasdasdasdmi');
        element(by.name('password')).clear().sendKeys('lasdasdsaaxmi');
        var el = element(by.className('btn btn-info btn-block aadev-submit ng-binding'));
        el.click();
        expect(browser.getTitle()).not.toEqual("AcuityAds | Programmatic Marketing Platform");
    });
    it('Right Login', function() {
        element(by.name('userName')).clear().sendKeys('laxmi');
        element(by.name('password')).clear().sendKeys('laxmi');
        var el = element(by.className('btn btn-info btn-block aadev-submit ng-binding'));
        el.click();
        expect(browser.getTitle()).toEqual("AcuityAds | Programmatic Marketing Platform");
    });
});
