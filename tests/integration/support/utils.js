module.exports = { sleep }

async function sleep (ms) {
  return await new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}
