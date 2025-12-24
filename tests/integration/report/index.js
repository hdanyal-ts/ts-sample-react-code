const reporter = require('cucumber-to-html')

const options = {
  theme: 'bootstrap',
  brandTitle: 'OpsPortal Application',
  name: 'Cucumber Integration Tests',
  jsonFile: 'tests/integration/report/cucumber.json',
  output: 'tests/integration/report/cucumber.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true
}

reporter.generate(options)
