
/**
 * Created by kmimos on 16-12-2016.
 */

describe('New Agency Test', function() {
    it('New Agency', function() {
        //browser.sleep(3000);
        var EC = protractor.ExpectedConditions;

        element(by.xpath('.//*[contains(text(), "Admin")]')).click();
        browser.sleep(3000);
        element(by.xpath('//*[contains(text(), "Agencies")]')).click();

        var NewAge = element(by.css('a[href="/#/admin/agencies/edit/"]'));
        browser.wait(EC.visibilityOf(NewAge), 8000);
        NewAge.click();

        element(by.name('licenseeId')).click();                             //Type
        element(by.xpath('.//*[@label="QALic"]')).click();

        element(by.name('agencyName')).click().sendKeys('QAAgency');
        element(by.name('agencyDisplayName')).click().sendKeys('QAAgency');
        element(by.name('website')).click().sendKeys('www.google.co.ve');

        element(by.name('agencyCampaignManagerId')).click();                  //Campaign Manager
        element(by.xpath('.//*[@label="Acuity  CM"]')).click();

        element(by.name('agencySalesRepId')).click();                         //Sales Rep
        element(By.name('agencySalesRepId')).all(By.xpath('.//option[@label="Acuity Sales"]')).click();


        var addr = element(by.name('agencyAddress1')).sendKeys('181 Bay Street, Toronto, ON M5J 2T3, Canada');                         //Address 181 Bay Street, Toronto, ON M5J 2T3, CA
        addr.click();
        browser.sleep(1000);
        browser.driver.actions().mouseMove(addr);
        addr.sendKeys(protractor.Key.ARROW_DOWN);
        addr.sendKeys(protractor.Key.TAB);

        element(by.name('agencyAddress2')).sendKeys('3333');                          //Suite
        element(by.name('agencyPhone')).sendKeys('55544433322');                      //Phone
        element(by.name('agencyFax')).sendKeys('5554458956');                         //Fax

        browser.pause();
    });
});
