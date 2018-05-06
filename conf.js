// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['test_spec1.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  /*
	beforeLaunch:function(){
    if (fs.existsSync('./logs/ExecutionLog.log')) {
        fs.unlink('./logs/ExecutionLog.log')
    }
    log4js.configure({
        appenders: [
            { type: 'log4js-protractor-appender', category: 'protractorLog4js' },
            {
                type: "file",
                filename: './logs/ExecutionLog.log',
                category: 'protractorLog4js'
            }
        ]
    });
	},
	onPrepare: function() {
    browser.logger = log4js.getLogger('protractorLog4js');
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter('./Reports', true, true));
  }*/
};
