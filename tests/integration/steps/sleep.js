const { Then } = require('@cucumber/cucumber')
const { sleep } = require('../support/utils')

Then('I pause for {int}(ms)', async function (timeout) {
  await sleep(timeout)
})
