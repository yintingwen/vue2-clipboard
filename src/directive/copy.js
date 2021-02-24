import Clipboard from 'clipboard'
import { callHook } from '../options'
import { formatText } from '../utils'

const bind = (el, binding) => {
  const { arg, value } = binding

  if (arg === 'success') {
    el._clipboard_success = value
  } else if (arg === 'error') {
    el._clipboard_error = value
  } else {
    const text = formatText(value)

    const clipboard = new Clipboard(el, {
      text,
      action: 'copy',
      container: el
    })

    clipboard.on('success', (e) => {
      const hook = el._clipboard_success
      hook ? hook(e) : callHook('success')
    })

    clipboard.on('error', (e) => {
      const hook = el._clipboard_error
      hook ? hook(e) : callHook('error')
    })

    el._clipboard = clipboard
  }
}

const update = (el, binding) => {
  const { arg, value } = binding

  if (arg === 'success') {
    el._clipboard_success = value
  } else if (arg === 'error') {
    el._clipboard_error = value
  } else {
    el._clipboard.text = formatText(value)
  }
}

const unbind = (el, binding) => {
  const { arg } = binding
  if (arg === 'success') {
    Reflect.defineProperty(el, '_clipboard_success')
  } else if (arg === 'error') {
    Reflect.defineProperty(el, '_clipboard_error')
  } else {
    el._clipboard.destroy()
    Reflect.defineProperty(el, '_clipboard')
  }
}

export default {
  bind,
  update,
  unbind
}
