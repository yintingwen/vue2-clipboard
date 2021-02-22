import { mergeOptions } from './options'
import { copyText } from './functional'

const install = (Vue, options = {}) => {
  mergeOptions(options)

  Vue.prototype.$copyText = copyText
}

export {
  copyText,
  mergeOptions
}

export default { install }
