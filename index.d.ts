declare module '@ytw/vue2-clipboard' {
  import Vue, { PluginFunction } from 'vue'
  module "vue/types/vue" {
    interface Vue {
      $copyText(text: string, options: { container?: string | HTMLElement, callHooks: boolean }): Promise<any>
    }
  }

  const Vue2Clipboard: { 
    install: PluginFunction<never> 
  }

  export const mergeOptions: { 
    success: () => any,
    error: () => any,
    callHooks: boolean 
  }

  export const copyText: (text: string, options: {
    container?: string | HTMLElement, 
    callHooks: boolean
  }) => any

  export default Vue2Clipboard
}