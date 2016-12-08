describe ('Add Licensees', function() {
	var page = new Pages.LicenseePage();
/*
    beforeAll (function() {
        Functions.doLogin();
    });

    beforeEach (function() {
        page.get();
        Functions.waitForUrlToChangeTo(browser.baseUrl + '/#/admin/licensees/edit/');
    });
*/
    afterAll (function () {
        //ptor.sleep(50000);
        console.log('AQUI');
        Functions.cleanupDB();
    });

    it ('testing cleanup', function() {
        //Functions.cleanupDB();
        expect(1).toBe(1);
    });
/*
	it ('should have the expected title', function() {
	    expect(page.getTitleElm().getText()).toEqual(page.getTitleExp());
	});

    it ('should have the expected breadcrumb', function() {
        var parent = element(by.css('.breadcrumb'));
        var list = parent.all(by.tagName('li'));

        expect(list.get(0).getText()).toEqual(page.getFStepBreadcrumExp());
        expect(list.get(0).element(by.tagName('a')).getAttribute('href')).toEqual(page.getFLinkBreadcrumExp());
        expect(list.get(1).getText()).toEqual(page.getSStepBreadcrumExp());
    });

    it ('no should save, whether the fields required no are complete', function() {
        page.getLNameFieldElem().sendKeys('RAT006');
        page.getSaveBtn().click();
        expect(element.all(by.css('[ng-message=required]')).count()).toEqual(4);

    });

    it ('should save, whether the fields required are complete', function() {
        page.getLNameFieldElem().sendKeys('RAT008');
        page.getDNameFieldElem().sendKeys('RAT008');
        element(by.cssContainingText('option', 'House Account')).click();
        page.getAdressFieldElem().sendKeys('181 Bay Street, Toronto, ON M5J 2T3, Canadá');
        browser.sleep(3500);
        browser.driver.actions().mouseMove(page.getAdressFieldElem());
        page.getAdressFieldElem().sendKeys(protractor.Key.ARROW_DOWN);
        page.getAdressFieldElem().sendKeys(protractor.Key.TAB);
        page.getPhoneFieldElem().sendKeys('1234567890');
        page.getSaveBtn().click();
        expect(element.all(by.tagName('h1')).first().getText()).toEqual('Edit Licensee');

    });

    it("should be the service listening", function(done){
        var needle = require('needle');
        var data = {
            value: JSON.stringify({ status: 'A' })
        };
        var options = {
            headers: { 'Content-Type': 'application/json' }
        };
       var restendpointUrl = browser.baseUrl + '/aa/api/v1/licensee/';

        needle.request('post', restendpointUrl, data,options, function(err, resp, body) {
            expect(1).toBe(1);
            done();
        });
    });

    it("should be the response code 200", function(done){
        var needle = require('needle');
        var data = {
            value: JSON.stringify({ status: 'A' })
        };
        var options = {
            headers: { 'Content-Type': 'application/json' }
        };
        var restendpointUrl = browser.baseUrl + '/aa/api/v1/licensee/';

        needle.request('post', restendpointUrl, data,options, function(err, resp, body) {
            expect(resp.statusCode).toBe(200);
            //console.log (resp.body);
            done();
        });
    });
*/
});