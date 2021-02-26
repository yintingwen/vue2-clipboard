import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $copyText: CopyText
  }
}

interface CopyText {
  (text: string, options: { container?: string | HTMLElement, callHooks?: boolean }): Promise<any>
}

interface MergeOptions {
  success(): any
  error(): any
  callHooks?: boolean
}

declare class Vue2Clipboad {
  static install(vue: typeof Vue, options: MergeOptions): void
}

export const mergeOptions: MergeOptions
export const copyText: CopyText
export default Vue2Clipboad
