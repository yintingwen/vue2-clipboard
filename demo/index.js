import plugins, { copyText } from '../lib/index'
import Vue from 'vue/dist/'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.use(plugins, {
  success() {
    alert('成功')
  },
  error() {
    alert('失败')
  },
})
console.log(document.querySelector('#app').outerHTML)

const v = new Vue({
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
}).$mount()
// console.log(v)
