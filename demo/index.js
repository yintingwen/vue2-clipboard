import Vue2Clipboard from '@ytw/vue2-clipboard'
import plugins, { copyText } from '../lib/index'

Vue.use(plugins, {
  success() {
    alert('成功')
  },
  error() {
    alert('失败')
  },
})

Vue.use(Vue2Clipboard, {
  
})

new Vue({
  el: '#app',
  data: {
    visible: false,
  },
  methods: {
    testFunc() {
      copyText('我是函数式')
    },
    async showModal() {
      try {
        await this.$confirm()
        this.testFunc()
      } catch (error) {}
    },
    dirSuccess() {
      console.log('指令成功')
    },
    dirError() {
      console.log('指令失败')
    }
  },
})
