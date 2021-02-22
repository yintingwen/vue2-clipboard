import Clipboard from 'clipboard'
import { globalOptions } from './options'
import { formatText } from './utils'

const bind = (el, binding) => {
  const { arg, value } = binding

  if (arg === 'success') {
    el._clipboard_success = value
  } else if (arg === 'error') {
    el._clipboard_error = value
  } else {
    const text = formatText(value)

    const clipboard = new Clipboard(el, {
      text
    })

    el._clipboard = clipboard
  }
}

export default (Vue) => {
  const unbind = (el) => {

  }

  Vue.directives('copy', {
    bind
  })
}
