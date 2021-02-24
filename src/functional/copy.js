import Clipboard from 'clipboard'
import { commonButton, formatText, query } from '../utils'
import { callHook } from '../options.js'

/**
 * 复制文字
 * @param {*} text 文字
 */
export function copyText (text, { hooks = true, container }) {
  return new Promise((resolve, reject) => {
    text = formatText(text)

    const clipboard = new Clipboard(commonButton(), {
      text,
      container: query(container)
    })

    clipboard.on('success', (e) => {
      hooks && callHook('success')
      resolve(e)
      clipboard.destroy()
    })

    clipboard.on('error', (e) => {
      hooks && callHook('error')
      reject(e)
      clipboard.destroy()
    })

    commonButton().click()
  })
}

// export function copyTarget (el, hooks = true) {

// }
