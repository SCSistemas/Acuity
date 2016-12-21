/* Created by kmimos on 12-12-2016.*/
describe('Wrong parameters in Licensee Creation Test', function() {

    beforeAll(function(){
        browser.get("http://trade-qa.acuityads.com:8080//login.html");
        browser.driver.manage().window().maximize();
        expect(browser.getTitle()).toEqual("AcuityAds | Login");

        element(by.name('userName')).clear().sendKeys('laxmi');
        element(by.name('password')).clear().sendKeys('laxmi');
        var el = element(by.className('btn btn-info btn-block aadev-submit ng-binding'));
        el.click();
        expect(browser.getTitle()).toEqual("AcuityAds | Programmatic Marketing Platform");
    });

    afterEach(function() {

        browser.sleep(5000);
        element(by.name('name')).clear();                               //Licensee Name
        element(by.name('displayName')).clear();                        //Display Name
        //element(by.name('licenseeTypeId')).clear();                   //Type
        element(by.name('website')).clear();                            //Website
        //element(by.name('licenseeCampaignManagerId')).clear();        //Campaign Manager
        //element(by.name('licenseeSalesRepId')).clear();               //Sales Rep
        var addr = element(by.name('address1'));                        //Address 181 Bay Street, Toronto, ON M5J 2T3, CA
        addr.clear();
        element(by.name('address2')).clear();                           //Suite
        element(by.name('phone')).clear();                              //Phone
        element(by.name('fax')).clear();                                //Fax
        browser.sleep(5000);
    });

    it('Enter New Licensee Menu', function() {
        var EC = protractor.ExpectedConditions;
        //browser.sleep(5000);
        element(by.xpath('.//*[contains(text(), "Admin")]')).click();
        //browser.sleep(5000);
        element(by.xpath('//*[contains(text(), "Licensees")]')).click();

        var NewLic = element(by.xpath('//*[@id="side-menu"]/li[5]/ul/li[1]/ul/li[3]'));
        browser.wait(EC.visibilityOf(NewLic), 8000);
        NewLic.click();
        //browser.sleep(3000);
    });

    it('New Licensee - Wrong Website Format', function() {

        var web = element(by.name('website'));
        web.clear();
        web.sendKeys('google');                                         //Website
        var domainFormat = element(by.xpath('//span[contains(text(), "Expected hostname")]'));
        var button = element(by.xpath('//*[@id="page-wrapper"]/div[1]/div/div[2]/form/div/div[2]/button'));
        expect(button.isEnabled()).toBe(true);
        web.clear();

    });

    it('New Licensee - Short Phone Number', function() {

        var phone = element(by.name('phone')).sendKeys('123456789');
        var phoneFormat = element(by.xpath('//span[contains(text(), "This field is too short")]'));
        expect(phoneFormat.getText()).toEqual("This field is too short");

    });
    it('New Licensee - Short Adress Format', function() {

        var Addr = element(by.name('address1')).sendKeys('d');
        var Addr = element(by.xpath('//span[contains(text(), "This field is too short")]'));
        expect(Addr.getText()).toEqual("This field is too short");

    });
});