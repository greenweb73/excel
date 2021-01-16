export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // Уведомляет слушателей, если они есть
  // table.emit('table:select', {a: 1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // on, listen
  // Подписывается на уведомление
  // Добавляет нового слушателя
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    // возвращаем функцию удаляющую слушателя события
    return () => {
      this.listeners[event] =
          this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// Example
// const emitter = new Emitter()

// const unsub = emitter.subscribe('somename',
//  data => console.log('Sub:', data))
// const unsub2 = emitter.subscribe('23423423423',
//  data => console.log('Sub2:', data))
// emitter.emit('23423423423', 42)
// setTimeout(() => {
//  emitter.emit('somename', 'After 2s ')
// }, 2000)

// setTimeout(() => {
//  unsub2() // отписываемся от события
// }, 3000)

// setTimeout(() => {
//  emitter.emit('23423423423', 'After 4s ')
// }, 4000)
