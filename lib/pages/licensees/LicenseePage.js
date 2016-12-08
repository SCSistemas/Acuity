var LicenseePage = function () {
    var url = browser.baseUrl + '/#/admin/licensees/edit/';
    var titleElm = element.all(by.tagName('h1')).first();

    var lNameFieldElem = element(by.model('licensee.licenseeName'));
    var dNameFieldElem = element(by.model('licensee.displayName'));
    var typeFieldElem = element(by.model('licensee.licenseeTypeId'));
    var adressFieldElem = element(by.model('strAddress1'));
    var phoneFieldElem = element(by.model('strPhone'));

    var saveBtn = element(by.buttonText('Save Licensee'));

    var titleExp = 'Add Licensee';
    var fStepBreadcrumExp = 'Licensees';
    var fLinkBreadcrumExp = browser.baseUrl +'/#/admin/licensees/list/';
    var sStepBreadcrumExp = 'Add Licensee';

    this.get = function () {
        browser.get(url);
    };

    this.getTitleElm = function () {
        return titleElm;
    };

    this.getLNameFieldElem = function () {
        return lNameFieldElem;
    };

    this.getTitleExp = function () {
        return titleExp;
    };

    this.getFStepBreadcrumExp = function () {
        return fStepBreadcrumExp;
    };
    this.getFLinkBreadcrumExp = function () {
        return fLinkBreadcrumExp;
    };
    this.getSStepBreadcrumExp = function () {
        return sStepBreadcrumExp;
    };

    this.getSaveBtn = function () {
        return saveBtn;
    };

    this.getDNameFieldElem = function () {
        return dNameFieldElem;
    };

    this.getTypeFieldElem = function () {
        return typeFieldElem;
    };

    this.getAdressFieldElem = function () {
        return adressFieldElem;
    };

    this.getPhoneFieldElem = function () {
        return phoneFieldElem;
    };



};

module.exports = LicenseePage;

