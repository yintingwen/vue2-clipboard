export const globalOptions = {
  callHooks: true
}

export const hooks = ['success', 'error']

/**
 * 合并选项
 * @param {*} options
 */
export const mergeOptions = (options = {}) => {
  mergeHooks(options)
  mergeCallHooks(options)
}

const mergeHooks = (options) => {
  const { success, error } = options

  if (success && typeof success === 'function') {
    globalOptions.success = success
  }

  if (error && typeof error === 'function') {
    globalOptions.error = error
  }
}

/**
 * 合并callHooks配置
 * @param {*} options
 */
const mergeCallHooks = (options) => {
  const { callHooks } = options

  if (typeof callHooks !== 'boolean') return

  globalOptions.callHooks = callHooks
}

/**
 * 执行钩子
 * @param {*} hook 钩子名称
 */
export const callHook = (hook) => {
  if (!globalOptions.callHooks) return

  const targetHook = globalOptions[hook]

  targetHook && targetHook()
}

/**
 * 判断是否是钩子
 * @param {*} arg 指令参数
 */
export function isHook (arg) {
  return hooks.indexOf(arg) !== -1
}
