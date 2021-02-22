import Clipboard from 'clipboard/dist/clipboard.min.js'
import { commonButton, formatText } from './utils'
import { callHooks } from './options.js'

/**
 * 复制文字
 * @param {*} text 文字
 */
export function copyText (text, hooks = true) {
  return new Promise((resolve, reject) => {
    text = formatText(text)

    const clipboard = new Clipboard(commonButton(), {
      text
    })

    clipboard.on('success', (e) => {
      hooks && callHooks('success')
      resolve(e)
      clipboard.destroy()
    })

    clipboard.on('error', (e) => {
      hooks && callHooks('error')
      reject(e)
      clipboard.destroy()
    })

    commonButton().click()
  })
}
