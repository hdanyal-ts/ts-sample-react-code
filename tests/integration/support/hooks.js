const {
  setDefaultTimeout,
  After,
  BeforeAll,
  AfterAll,
  Status
} = require('@cucumber/cucumber')
const fs = require('fs')
const puppeteer = require('puppeteer')
const { serve, killProcess } = require('./server.runner')
require('dotenv').config()

const defaultPuppeteerArgs = [
  '--disable-web-security',
  '--disable-features=IsolateOrigins,site-per-process',
  '--disable-infobars',
  '--no-sandbox'
]
const INTERACTIVE_CONFIG = {
  headless: false,
  defaultViewport: null,
  args: ['--window-size=1440,900', ...defaultPuppeteerArgs]
}
const HEADLESS_CONFIG = {
  headless: 'new',
  args: defaultPuppeteerArgs
}

const isInteractive = process.env.APP_ENV === 'local'

const processes = []

setDefaultTimeout(isInteractive ? 10000 : 30000)

BeforeAll({ timeout: 240 * 1000 }, async () => {
  processes.push(await serve('app'))
})

BeforeAll(async () => {
  const config = isInteractive ? INTERACTIVE_CONFIG : HEADLESS_CONFIG
  global.browser = await puppeteer.launch(config)
  const pages = await global.browser.pages()
  global.page = pages[0]
})

After(async function (testCase) {
  if (testCase.result.status === Status.FAILED) {
    const featureName = testCase.pickle.uri.match(/([^/]+)\.feature$/)[1]
    const scenarioName = testCase.pickle.name.replace(/\s*/g, '')
    const path = `tests/integration/report/screenshots/${featureName}`
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path)
    }
    await global.page.screenshot({
      path: `${path}/${scenarioName}.png`,
      fullPage: true
    })
  }
})

AfterAll(async () => {
  await global.browser.close()
  const promises = processes.map(killProcess)
  await Promise.all(promises)
})
