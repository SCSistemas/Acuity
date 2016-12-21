/**
 * Created by kmimos on 12-12-2016.
 */
// spec.js
describe('Protractor Demo App', function() {
    it('Right Login', function() {
        element(by.name('userName')).clear().sendKeys('laxmi');
        element(by.name('password')).clear().sendKeys('laxmi');
        var el = element(by.className('btn btn-info btn-block aadev-submit ng-binding'));
        el.click();
        expect(browser.getTitle()).toEqual("AcuityAds | Programmatic Marketing Platform");
    });
});
