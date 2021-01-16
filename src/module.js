console.log('module.js is added')

async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)
const el = document.createElement('div')
el.css({ color: 'green', height: '22px' })
function css(styles = {}) {
  Object.keys(styles).forEach(s => el.style[s] = styles[s])

}
