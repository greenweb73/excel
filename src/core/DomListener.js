import {capitalize} from '@/core/utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      // console.log(this)
      // console.log(listener, this.$root)
      // console.log(this[method])
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`)
      }
      this[method] = this[method].bind(this)
      // Это тоже самое что и addEventListener
      this.$root.on(listener, this[method])
    })
  }
  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      console.log(method)
      // Это тоже самое что и removeEventListener
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
