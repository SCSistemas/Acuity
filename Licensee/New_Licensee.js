/**
 * Created by kmimos on 12-12-2016.
 */
describe('New Licensee Test', function() {
    it('New Licensee', function() {
        browser.sleep(3000);
        var EC = protractor.ExpectedConditions;

        element(by.xpath('.//*[contains(text(), "Admin")]')).click();
        browser.sleep(3000);
        element(by.xpath('//*[contains(text(), "Licensees")]')).click();

        var NewLic = element(by.xpath('//*[@id="side-menu"]/li[5]/ul/li[1]/ul/li[3]'));
        browser.wait(EC.visibilityOf(NewLic), 8000);
        NewLic.click();

        element(by.name('name')).sendKeys('QALic2');                            //Licensee Name
        element(by.name('displayName')).sendKeys('QALic');                      //Display Name

        element(by.name('licenseeTypeId')).click();                             //Type
        element(by.xpath('.//*[@label="Self Serve"]')).click();

        element(by.name('website')).sendKeys('www.google.co.ve');               //Website

        element(by.name('licenseeCampaignManagerId')).click();                  //Campaign Manager
        element(by.xpath('.//*[@label="Acuity  CM"]')).click();

        element(by.name('licenseeSalesRepId')).click();                         //Sales Rep
        element(by.xpath('.//option[@label="Acuity Sales"]')).click();

        var addr = element(by.name('address1')).sendKeys('181 Bay Street, Toronto, ON M5J 2T3, Canada');                         //Address 181 Bay Street, Toronto, ON M5J 2T3, CA
        addr.click();
        browser.sleep(1000);
        browser.driver.actions().mouseMove(addr);
        addr.sendKeys(protractor.Key.ARROW_DOWN);
        addr.sendKeys(protractor.Key.TAB);

        element(by.name('address2')).sendKeys('3333');                          //Suite
        element(by.name('phone')).sendKeys('55544433322');                      //Phone
        element(by.name('fax')).sendKeys('5554458956');                         //Fax
        //browser.pause();
    });
});