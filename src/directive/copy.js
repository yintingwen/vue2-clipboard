import Clipboard from 'clipboard'
import { callHook, isHook } from '../options'
import { formatText } from '../utils'

const bind = (el, binding) => {
  const { arg, value } = binding

  if (isHook(arg)) {
    el[`_clipboard_${arg}`] = value
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

  if (isHook(arg)) {
    el[`_clipboard_${arg}`] = value
  } else {
    el._clipboard.text = formatText(value)
  }
}

const unbind = (el, binding) => {
  const { arg } = binding
  if (isHook(arg)) {
    delete el[`_clipboard_${arg}`]
  } else {
    el._clipboard.destroy()
    delete el._clipboard
  }
}

export default {
  bind,
  update,
  unbind
}
