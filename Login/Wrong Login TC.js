/**
 * Created by kmimos on 20-12-2016.
 */
// spec.js
describe('Protractor Demo App', function() {
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
});
