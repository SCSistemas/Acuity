/**
 * Created by kmimos on 12-12-2016.
 */
describe('New Licensee Test', function() {

    it('New Licensee - Wrong Website Format', function() {

        var web = element(by.name('website'));
        web.clear();
        web.sendKeys('google');               //Website

        var domainFormat = element(by.xpath('//span[contains(text(), "Expected hostname")]'));
        var button = element(by.xpath('//*[@id="page-wrapper"]/div[1]/div/div[2]/form/div/div[2]/button'));
        //expect(domainFormat.getText()).toEqual('Expected hostname format: "www.domain.com"');
        browser.sleep(5000);
        expect(button.isEnabled()).toBe(false);

        //browser.pause();
    });
});