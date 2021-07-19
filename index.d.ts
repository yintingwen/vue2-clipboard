import Vue from 'vue'

interface CopyText {
  (text: string, options: { container?: string | HTMLElement, callHooks?: boolean }): Promise<any>
}

interface GlobalOptions {
  success?(): any
  error?(): any
  callHooks?: boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $copyText: CopyText
  }
}

declare class Vue2Clipboard {
  static install(vue: typeof Vue, options?: GlobalOptions): void
}

export const mergeOptions: (options?: GlobalOptions) => void
export const copyText: CopyText
export default Vue2Clipboard
