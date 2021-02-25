
import Vue, { PluginFunction } from 'vue'

interface methodOptions {
  container? :string | HTMLElement,
  callHooks?: boolean
}
declare module "vue/types/vue" {
  interface Vue {
    $copyText(text: string, options: methodOptions): Promise<any>
  }
}

export declare interface Vue2Clipboard {
  install: PluginFunction<never>
}

export declare interface mergeOptions {
  success (): any
  error (): any
  callHooks?: boolean
}

export declare interface copyText {
  (text: string, options: methodOptions): Promise<any>
}

export default Vue2Clipboard
