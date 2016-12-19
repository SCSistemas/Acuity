/**
 * Created by kmimos on 16-12-2016.
 */

describe('New Advertiser Test', function() {
    it('New Advertiser', function() {
        browser.sleep(3000);
        var EC = protractor.ExpectedConditions;

        element(by.xpath('.//*[contains(text(), "Admin")]')).click();
        browser.sleep(3000);
        element(by.xpath('//*[contains(text(), "Advertisers")]')).click();

        var NewAge = element(by.css('a[href="/#/admin/advertisers/edit/"]'));
        browser.wait(EC.visibilityOf(NewAge), 8000);
        NewAge.click();
        browser.sleep(3000);
        element(by.name('licenseeId')).click();                                     //Type
        element(by.xpath('.//*[@label="QALic"]')).click();

        element(by.name('agencyId')).click();                                       //Type
        element(by.xpath('.//*[@label="QAAgency"]')).click();


        element(by.name('name')).click().sendKeys('QAAdvertiser');
        element(by.name('displayName')).click().sendKeys('QAAdvertiser');

        element(by.name('advertiserIndustryId')).click();                           //Campaign Manager
        element(by.xpath('.//option[@label="Computing Products"]')).click();

        element(by.name('advertiserTypeId')).click();                               //Campaign Manager
        element(by.xpath('.//option[@label="Direct"]')).click();

        element(by.name('website')).click().sendKeys('www.google.co.ve');

        element(by.name('advertiserCampaignManagerId')).click();                    //Campaign Manager
        element(by.xpath('.//*[@label="Acuity  CM"]')).click();

        element(by.name('advertiserSalesRepId')).click();                           //Sales Rep
        element(by.xpath('.//option[@label="Acuity Sales"]')).click();

        var addr = element(by.name('address1')).sendKeys('181 Bay Street, Toronto, ON M5J 2T3, Canada');                         //Address 181 Bay Street, Toronto, ON M5J 2T3, CA
        addr.click();
        browser.sleep(1000);
        browser.driver.actions().mouseMove(addr);
        addr.sendKeys(protractor.Key.ARROW_DOWN);
        addr.sendKeys(protractor.Key.TAB);

        element(by.name('address2')).sendKeys('3333');                              //Suite
        element(by.name('phone')).sendKeys('55544433322');                          //Phone
        element(by.name('fax')).sendKeys('5554458956');                             //Fax

        browser.pause();
    });
});
