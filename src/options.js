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
    globalOptions.error = console.error()
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
  const { callHooks } = globalOptions

  if (!callHooks) return

  const targetHook = globalOptions[hook]

  targetHook && targetHook()
}

/**
 * 判断是否是钩子
 * @param {*} arg 指令参数
 */
export function isHook (arg) {
  console.log(hooks.includes)
  return hooks.includes(arg)
}
