import Clipboard from 'clipboard'
import { commonButton, formatText, query } from '../utils'
import { callHook } from '../options.js'

/**
 * 复制文字
 * @param {*} text 文字
 * @param { {callHooks: boolean, container: string | Element} }
 */
export function copyText (text, { callHooks = true, container } = {}) {
  return new Promise((resolve, reject) => {
    const clipboard = new Clipboard(commonButton(), {
      text: formatText(text),
      container: query(container)
    })

    clipboard.on('success', (e) => {
      callHooks && callHook('success')
      resolve(e)
      clipboard.destroy()
    })

    clipboard.on('error', (e) => {
      callHooks && callHook('error')
      reject(e)
      clipboard.destroy()
    })

    commonButton().click()
  })
}
