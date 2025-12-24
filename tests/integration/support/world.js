const { setWorldConstructor } = require('@cucumber/cucumber')

function CustomWorld ({ attach, parameters }) {
  this.attach = attach
  this.parameters = parameters
}

setWorldConstructor(CustomWorld)
