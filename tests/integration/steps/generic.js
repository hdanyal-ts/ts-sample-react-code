const assert = require('assert')
const { Then } = require('@cucumber/cucumber')
const {
  openPage,
  waitForElement,
  clickElement,
  inputText,
  countElement,
  waitForHiddenElement
} = require('../actions/generic')

Then('I open the {string} page', async page => {
  return openPage(page)
})
Then('I see the {string} page', page => {
  return waitForElement(page, 'pageName')
})
Then('I see the {string} on the {string} page', (elementName, page) => {
  return waitForElement(page, elementName)
})
Then('I use the {string} button on the {string} page', (elementName, page) => {
  return clickElement(page, elementName)
})
Then(
  'I type {string} into the {string} input on {string} page',
  (value, elementName, page) => {
    return inputText(page, elementName, value)
  }
)
Then(
  'I see {int} different {string} on the {string} page',
  async (expectedCount, elementName, page) => {
    const length = await countElement(page, elementName)
    assert.strictEqual(length, expectedCount)
  }
)
Then(
  'I do not see the {string} on the {string} page',
  (elementName, page) => {
    return waitForHiddenElement(page, elementName)
  }
)
