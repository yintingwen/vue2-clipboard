import { isEmptyObject } from './utils'

export const globalOptions = {}

/**
 * 合并选项
 * @param {*} options
 */
export const mergeOptions = (options = {}) => {
  if (isEmptyObject(options)) return

  const { success, error, callback } = options

  if (success && typeof success !== 'function') {
    options.success = null
  }

  if (error && typeof error !== 'function') {
    options.fail = null
  }

  options.callback = Boolean(callback)

  Object.assign(globalOptions, options)
}

/**
 * 执行钩子
 * @param {*} hook 钩子名称
 */
export const callHooks = (hook) => {
  const { callback } = globalOptions

  if (!callback) return

  const targetHook = globalOptions[hook]

  targetHook && targetHook()
}
