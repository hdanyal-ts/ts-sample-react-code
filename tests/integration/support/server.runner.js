const spawn = require('child_process')
const kill = require('tree-kill')
const dotenv = require('dotenv')

dotenv.config({ path: '.env.development' })

module.exports = { serve, killProcess }

function serve (name, opt = {}) {
  const servers = {
    app: {
      command: 'yarn',
      options: ['dev'],
      regex: /✓ Ready in/
    }
  }
  const { command, options, regex, env } = servers[name]
  try {
    return new Promise((resolve, reject) => {
      const spawned = spawn.spawn(command, options, {
        cwd: __dirname,
        env: Object.assign(process.env, env, { BROWSER: 'none' })
      })
      spawned.stdout.on('data', data => {
        const line = data.toString()
        regex.test(line) && resolve({ spawned, name })
      })
    })
  } catch (error) {
    console.log('error: ', error)
  }
}

function killProcess (ps) {
  return new Promise(resolve => {
    kill(ps.spawned.pid)
    ps.spawned.on('exit', (code, signal) => {
      console.log('\nps terminated', ps.name)
      resolve(code)
    })
  })
}
