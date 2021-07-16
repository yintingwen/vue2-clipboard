import { mergeOptions } from './options'
import { copyText } from './functional/copy'
import copy from './directive/copy'

const install = (Vue, options = {}) => {
  mergeOptions(options)
  Vue.prototype.$copyText = copyText
  Vue.directive('copy', copy)
}

export {
  copyText,
  mergeOptions
}

export default {
  install
}
