const { get } = require('lodash')
const path = require('path')
const selectors = require('require-all')({
  dirname: path.join(__dirname, '../page')
})

module.exports = {
  clickElement,
  countElement,
  inputText,
  openPage,
  waitForElement,
  waitForHiddenElement
}

const timeoutWait = { visible: true, timeout: 120 * 1000 }

async function clickElement (page, elementName) {
  await global.page.waitForSelector(getSelector(page, elementName), timeoutWait)
  return global.page.click(getSelector(page, elementName))
}
async function countElement (page, elementName) {
  const selector = getSelector(page, elementName)
  await global.page.waitForSelector(selector, { visible: true })
  const element = await global.page.$$(selector)
  return get(element, 'length', 0)
}
function getSelector (page, elementName) {
  const camelCasedPage = page
    .replace(/(.+)\s(.)/, (match, g1, g2) => g1 + g2.toUpperCase())
    .replace(/\//g, '.')
  return elementName
    ? get(selectors, `${camelCasedPage}.${elementName}`)
    : get(selectors, camelCasedPage)
}
async function inputText (page, elementName, value) {
  const selector = getSelector(page, elementName)
  await global.page.waitForSelector(selector, timeoutWait)
  await global.page.focus(selector)
  await global.page.keyboard.type(value)
  await global.page.keyboard.press('Enter')
  await global.page.keyboard.press('Escape')
}
async function openPage (page) {
  const host = process.env.HOST || 'http://localhost:3000'
  const uri = new URL(page, host).href
  await global.page.goto(uri)
  await global.page.waitForSelector('body', { visible: true })
}
async function waitForElement (page, elementName) {
  await global.page.waitForSelector(getSelector(page, elementName), timeoutWait)
}
async function waitForHiddenElement (page, elementName) {
  const selector = getSelector(page, elementName)
  await global.page.waitForSelector(selector, { hidden: true })
}
