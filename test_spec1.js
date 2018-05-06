var homePage = require('./pages/homePage');

describe('Navigating to homepage', function() {
  it('should navigate to home page', function() {
	  browser.ignoreSynchronization = true;
	  browser.driver.manage().window().maximize();
      browser.get('http://www.google.com');
		
	});
	
	
  it('Typing searchstring in search box', function() {
		var searchString = 'far11ven';
		
		homePage.searchFor(searchString);
		homePage.hitEnter();
		
		homePage.clickFirstResultLink();
		
		var titleName = browser.driver.findElement(by.css('span.p-nickname.vcard-username.d-block'));
		
		expect(titleName.getText()).toBe('far11ven');
		
		//browser.logger.info(' Username is : ', titleName.getText());
		//window.alert('titleName.getText()');
		//browser.pause();
		
    });
	
});