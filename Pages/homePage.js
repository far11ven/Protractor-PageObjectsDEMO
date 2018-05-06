
class HomePage {
    constructor() {
        this.searchBox = $('input#lst-ib');
        this.firstResultLink = $('div.g:nth-child(1) h3.r > a');
		
		// Extras..
        this.addButton = element(by.buttonText('+ add'));
        this.actualCount = $('em.ng-binding');
        this.deleteButton = $('i.icon-trash');
        this.deleteButtons = $$('i.icon-trash');
        this.friendName = text => { return element.all(by.cssContainingText('span.p-nickname.vcard-username.d-block', text)); };
        this.rows = element.all(by.repeater('row in rows'));
        this.names = element.all(by.repeater('row in rows').column('{{row}}'));
        this.url = 'angular/friends/';

    }

    /**
     * search for a friend
     * @param  {string} string
     * @return {promise}
     */
    searchFor(string) {
       return this.searchBox.sendKeys(string);
    }
	
	/**
     * Webdriver equivalent to hitting Enter/Return key.
	 * @return {promise}
     */
    hitEnter() {
		return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    /**
     * add a friend
     * @return {promise}
     */
    clickFirstResultLink() {
        return this.firstResultLink.click();
    }

}
module.exports = new HomePage();