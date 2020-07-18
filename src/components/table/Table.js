import {ExcelComponent} from '@/core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.function';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'mousemove']})
    this.currEl = null
  }

  toHTML() {
    return createTable(25)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    }
  }

  onMousemove(event) {
    if (event.target) {
      // this.currEl.setAttribute('style', `width: ${event.clientX}px`)
    }
  }
}