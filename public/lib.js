import plugins, { copyText } from '../lib/index'
import Vue from 'vue/dist/vue.min'
Vue.use(plugins, {
  success() {
    alert('成功')
  },
  error() {
    alert('失败')
  },
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
    dirSuccess() {
      console.log('指令成功')
    },
    dirError() {
      console.log('指令失败')
    }
  },
})
