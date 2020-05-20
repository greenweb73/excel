console.log('module.js is added')

async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)
